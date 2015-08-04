import React from 'react/addons';
import Tooltip from './tooltip';

class Preview extends React.Component {
    constructor(props) {
      super(props);
      this.toggleBlock = this.toggleBlock.bind(this);
      this.state = { blocked: false }
    }
    toggleBlock() {
      let blocked = !this.state.blocked;
      this.setState({ blocked: blocked });
      if (blocked) {
        this.props.actions.blockColor(this.props.defaultColor);
      } else {
        this.props.actions.removeBlockColor(this.props.defaultColor);
      }
    }
    render() {
      let cx = React.addons.classSet;
      let style = {
        backgroundColor: this.props.color
      };
      let classNames = cx({ 'preview--blocked': this.state.blocked, 'preview': true});
      return (
        <div className={classNames} style={style} onClick={this.toggleBlock}>
          <Tooltip color={this.props.defaultColor} />
        </div>
      );
    }
}

export default class Previews extends React.Component {
  componentWillUpdate() {
    this.resize();
  }
  componentDidMount() {
   this.resize();
  }
  resize() {
    WindowApi.setHeight( Math.ceil(this.props.store.colors.length / 13) * 50 + 400);
  }
  render() {
    return (
      <section className="previews" >
        <For each="color" of={this.props.store.colors}>
          <Preview color={color.newColor} defaultColor={color.defaultColor} actions={this.props.actions} />
        </For>
      </section>
    );
  }
}
