import Reflux from 'reflux';

var themeActions = Reflux.createActions([
    "uploadTheme",
    "showResult",
    "showOptions",
    "setContrast",
    "setBrightness"
]);

module.exports = themeActions;
