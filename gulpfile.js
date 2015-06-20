var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require("gulp-concat");
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel");
var react = require('gulp-react');
var notify = require("gulp-notify");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');


swallowError = function(error) {
    console.log(error.toString());
    notify().write(error.toString());
    this.emit('end');
};

gulp.task('react', function() {
    var b = browserify({
        entries: './src/react/index.jsx',
        extensions: ['.jsx'],
        debug: true,
        transform: [
                 babelify.configure({
                   stage: 0,   
                   plugins: ["jsx-control-statements/babel"]}
                 )
        ]        
    })    
    b.bundle().on('error', function(err) {
        notify().write(err.toString());
        this.emit("end");
    }).pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('js/'))
    .pipe($.connect.reload());
});

gulp.task('sass', function() {
    gulp;
    return gulp.src('src/css/styles.scss').pipe(sourcemaps.init()).pipe(sass({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task("connect", function() {
    return $.connect.server({
        root: ".",
        port: 1338,
        livereload: true
    });
});

gulp.task('watch', function() {            
    gulp.watch(['src/css/**/*.*'], ['sass']);        
    gulp.watch(['src/react/**/*.*'], ['react']);        
});

gulp.task('default', ['connect', 'react', 'sass', 'watch']);



