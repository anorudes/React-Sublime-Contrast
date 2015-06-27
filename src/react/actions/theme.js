import Reflux from 'reflux';

let themeActions = Reflux.createActions([
    'uploadTheme',
    'saveTheme',
    'setRange',
    'blockColor',
    'removeBlockColor'
]);

module.exports = themeActions;
