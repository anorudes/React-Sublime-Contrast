import Reflux from 'reflux';

var themeActions = Reflux.createActions([
    "uploadTheme",
    "setContrast",
    "setBrightness"
]);

module.exports = themeActions;
