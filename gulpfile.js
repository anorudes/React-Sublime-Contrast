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
var clean = require('gulp-clean');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var eslint = require('gulp-eslint');
var livereload = require('gulp-livereload');

swallowError = function(error) {
    console.log(error.toString());
    notify().write(error.toString());
    this.emit('end');
};


gulp.task('lint', function() {
  return gulp.src(['src/react/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build', function() {
    var b = browserify({
        entries: './src/react/index.js',
        extensions: ['.js'],
        debug: false,
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
    .pipe(gulp.dest('js/'));
});

gulp.task('clean', function() {
    return gulp.src('js/bundle.js', {read: false})
        .pipe(clean());
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
    .pipe(gulp.dest('css'))
});

gulp.task('reload', function() {
    return gulp.src(['*.html', 'js/*.js', 'css/*.css'])
    .pipe(livereload());
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
    gulp.watch(['src/react/**/*.*'], ['build']);
});

gulp.task('watch-reload', function() {
    livereload.listen();
    gulp.watch(['*.html', 'js/*.js', 'css/*.css'], ['reload']);
});

gulp.task('default', ['build', 'sass', 'watch', 'watch-reload']);



