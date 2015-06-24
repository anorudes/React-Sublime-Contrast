import Reflux from 'reflux';
import themeActions from '../actions/theme';
import Parser from '../api/parser';

var themeStore = Reflux.createStore({
    listenables: [themeActions],
    data: {
      saturatePercentage: 0,      
      showOptions: false,
      themeContentDefault: null,
      themeContentNew: null
    },
    onUploadTheme(filePath) {
      this.data.showOptions = true;      
      let themeContent = fs.readFileSync(filePath, "utf8");       
      this.data.themeContent = themeContent;      
      this._updateTheme();      
    },
    _updateTheme() {
      this.data.themeContentNew = Parser.generate(this.data.themeContent, this.data.saturatePercentage);
      this.trigger(this.data);       
    },
    onSetSaturate(value) {      
      this.data.saturatePercentage = value;              
      this.trigger(this.data);
      this._updateTheme();
    },
    getInitialState() {
      return this.data;
    }
});

export default themeStore;