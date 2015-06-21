import {React, Reflux, reactMixin} from '../init';
import ParserApi from '../api/parser';
import themeActions from '../actions/theme';

export default class Upload extends React.Component { 
  constructor(props) {
   super(props);
   this._onChangeFile = this._onChangeFile.bind(this); 
  }
  _onChangeFile() {        
    themeActions.uploadTheme();  
  }
  render() {   
    const {props, state} = this;    
    return (
      <div className="upload">
        <div className="upload__container">
          <span className="upload__title">Choose file</span>
          <div className="upload__choice">
             <div className="file-field input-field">
               <div className="btn">
                 <i className="large icon mdi-file-cloud-upload"></i>
                 <span>Upload</span>
                 <input type="file" onChange={ this._onChangeFile } />
               </div>
             </div>         
             <span className="upload__hint">
              Select a theme file
             </span>
          </div>
        </div>
      </div>
    );
  }
}