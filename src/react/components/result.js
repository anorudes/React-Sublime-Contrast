import {React, Reflux, reactMixin} from '../init';
import UploadApi from '../api/upload';

import themeActions from '../actions/theme';
import themeStore from '../stores/theme';

@reactMixin.decorate(Reflux.connect(themeStore))
export default class Result extends React.Component { 
  render() {   
    const {props, state} = this;    
    return (
      <div className="result">
      </div>
    );
  }
}