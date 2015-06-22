import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Upload extends React.Component { 
  constructor(props) {
   super(props);
   this._onChangeContrast = this._onChangeContrast.bind(this); 
   this._onChangeBrightness = this._onChangeBrightness.bind(this);    
  }  
  componentDidMount() {    
    React.findDOMNode(this.refs.contrast).defaultValue = "0";
    React.findDOMNode(this.refs.brightness).defaultValue = "0";    
  }
  _onChangeContrast() {    
    let contrast = React.findDOMNode(this.refs.contrast).value;
    themeActions.setContrast(contrast);
  }    
  _onChangeBrightness() {
    let brightness = React.findDOMNode(this.refs.contrast).value;
    themeActions.setBrightness(brightness);
  }
  render() {   
    const {props, state} = this;    
    return (
      <div className="options">        
           <p className="range-field">
             <label class="active">Contrast:</label>
             <input type="range" ref="contrast" id="contrast" min="0" max="100" onChange={  this._onChangeContrast } />
           </p>
            <p className="range-field">
              <label class="active">Brightness:</label>
             <input type="range" ref="brightness" id="brightness" min="0" max="100" onChange={  this._onChangeBrightness }  />
           </p>         
      </div>
    );
  }
}