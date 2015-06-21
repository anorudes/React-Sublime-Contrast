import {React, Reflux, reactMixin} from '../init';

export default class Upload extends React.Component { 
  componentDidMount() {
    this.refs.contrast.getDOMNode().defaultValue = "0";
    this.refs.brightness.getDOMNode().defaultValue = "0";
  }
  render() {   
    const {props, state} = this;    
    return (
      <div className="options">        
           <p className="range-field">
             <label for="contrast" class="active">Contrast:</label>
             <input type="range" ref="contrast" id="contrast" min="0" max="100" />
           </p>
           <p className="range-field">
              <label for="brightness" class="active">Brightness:</label>
             <input type="range" ref="brightness" id="brightness" min="0" max="100" />
           </p>         
      </div>
    );
  }
}