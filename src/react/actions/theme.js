import Reflux from 'reflux';

var themeActions = Reflux.createActions([
    'uploadTheme',
    'saveTheme',
    'setRange',
    'blockColor',
    'removeBlockColor'
]);

module.exports = themeActions;
