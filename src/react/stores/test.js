import Reflux from 'reflux';
import testActions from '../actions/test';

var testStore = Reflux.createStore({    
    listenables: [testActions],
    data: {
      text: "world!"
    },
    onChangeName() {      
      this.data.text = this.data.text == "world!" ? "react!" : "world!";
      this.trigger(this.data);
    },
    getInitialState() {
      return this.data;
    }
});

module.exports = testStore;
