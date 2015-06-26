import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

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
        themeActions.blockColor(this.props.defaultColor);
      } else {
        themeActions.removeBlockColor(this.props.defaultColor);
      }
    }
    render() {
      const {props, state} = this;
      let cx = React.addons.classSet;
      let style = {
        backgroundColor: props.color
      };
      let classNames = cx({ 'preview--blocked': state.blocked, 'preview': true});
      return (
        <div className={classNames} style={style} onClick={this.toggleBlock}></div>
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
    WindowApi.setHeight( Math.ceil(this.props.colors.length / 13) * 50 + 400);
  }
  render() {
    const {props, state} = this;
    return (
      <section className="previews" >
        <For each="color" of={props.colors}>
          <Preview color={color.newColor} defaultColor={color.defaultColor} />
        </For>
      </section>
    );
  }
}