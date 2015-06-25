import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Upload extends React.Component { 
  constructor(props) {
   super(props);
   this._onChange = this._onChange.bind(this);    
  }  
  componentDidMount() {    
    React.findDOMNode(this.refs.saturate).defaultValue = "100";    
    React.findDOMNode(this.refs.brightness).defaultValue = "100";        
  }
  _onChange() {    
    let saturate = React.findDOMNode(this.refs.saturate).value;    
    let brightness = React.findDOMNode(this.refs.brightness).value;    
    themeActions.setRange(saturate, brightness);
  }    
  render() {   
    const {props, state} = this;    
    return (
      <div className="options">        
           <p className="range-field">
             <label class="active">Saturate:</label>
             <input type="range" ref="saturate" min="0" max="100" onChange={  this._onChange } />
           </p>          
           <p className="range-field">
             <label class="active">Brightness:</label>
             <input type="range" ref="brightness" min="0" max="100" onChange={  this._onChange } />
           </p>                                
      </div>
    );
  }
}