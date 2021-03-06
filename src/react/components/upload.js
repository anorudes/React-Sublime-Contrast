import React from 'react/addons';
import ParserApi from '../api/parser';

export default class Upload extends React.Component {
  constructor(props) {
   super(props);
   this.onChangeFile = this.onChangeFile.bind(this);
  }
  onChangeFile() {
    let filePath = React.findDOMNode(this.refs.file).value;
    this.props.actions.upload(filePath);
  }
  render() {
    return (
      <div className="upload">
        <div className="upload__container">
          <span className="upload__title">Choose file</span>
          <div className="upload__choice">
             <div className="file-field input-field">
               <div className="btn">
                 <i className="large icon mdi-file-cloud-upload"></i>
                 <span>Upload</span>
                 <input type="file" ref="file" onChange={ this.onChangeFile } />
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