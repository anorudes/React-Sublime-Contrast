import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Upload extends React.Component { 
  constructor(props) {
   super(props);
   this._onChangeSaturate = this._onChangeSaturate.bind(this);    
  }  
  componentDidMount() {    
    React.findDOMNode(this.refs.saturate).defaultValue = "100";    
  }
  _onChangeSaturate() {    
    let saturate = React.findDOMNode(this.refs.saturate).value;
    themeActions.setSaturate(saturate);
  }    
  render() {   
    const {props, state} = this;    
    return (
      <div className="options">        
           <p className="range-field">
             <label class="active">Saturate:</label>
             <input type="range" ref="saturate" min="0" max="100" onChange={  this._onChangeSaturate } />
           </p>          
      </div>
    );
  }
}