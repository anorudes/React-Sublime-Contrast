import React from 'react/addons';

export default class TooltipColor extends React.Component {
  render() {
    let cx = React.addons.classSet;
    let style = {
      backgroundColor: this.props.color
    };
    return (
      <div className="preview__default-color" style={style}></div>
    );
  }
}