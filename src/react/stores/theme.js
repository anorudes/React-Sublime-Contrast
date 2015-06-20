import Reflux from 'reflux';
import themeActions from '../actions/theme';

var themeStore = Reflux.createStore({
    listenables: [themeActions],
    data: {
    },
    init() {      
    },
    getInitialState() {
      return this.data;
    }
});

module.exports = themeStore;
