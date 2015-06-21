import Reflux from 'reflux';
import themeActions from '../actions/theme';

var themeStore = Reflux.createStore({
    listenables: [themeActions],
    data: {
      brightnessPercentage: 0,
      contrastPercentage: 0,
      showResult: false,
      showOptions: false
    },
    onUploadTheme() {
      alert('1');
    },
    onShowResult() {
      this.data.showResult = true;
      this.trigger(this.data);
    },
    onHideResult() {
      this.data.showResult = false;
      this.trigger(this.data);
    },    
    onShowOptions() {

    },    
    onSetContrast(value) {
      this.data.contrastPercentage = value;
      this.trigger(this.data);
    },
    onSetBrightness(value) {
      this.data.brightnessPercentage = value;
      this.trigger(this.data);
    },
    getInitialState() {
      return this.data;
    }
});

export default themeStore;