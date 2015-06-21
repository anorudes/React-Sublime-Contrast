import Reflux from 'reflux';

var themeActions = Reflux.createActions([
    "uploadTheme",
    "showResult",
    "hideResult",
    "showOptions",
    "setContrast",
    "setBrightness"
]);

module.exports = themeActions;
