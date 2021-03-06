import React from 'react/addons';

export default class Upload extends React.Component {
  constructor(props) {
   super(props);
   this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    React.findDOMNode(this.refs.saturate).defaultValue = '50';
    React.findDOMNode(this.refs.brightness).defaultValue = '50';
  }
  onChange() {
    let saturate = React.findDOMNode(this.refs.saturate).value;
    let brightness = React.findDOMNode(this.refs.brightness).value;
    this.props.actions.setRange(saturate, brightness);
  }
  render() {
    return (
      <div className="options">
           <p className="range-field">
             <label>Saturate:</label>
             <input type="range" ref="saturate" min="0" max="100" onChange={  this.onChange } />
           </p>
           <p className="range-field">
             <label>Brightness:</label>
             <input type="range" ref="brightness" min="0" max="100" onChange={  this.onChange } />
           </p>
      </div>
    );
  }
}
