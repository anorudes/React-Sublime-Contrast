import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {saved: false};
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ saved: true });
    setTimeout(() => {
      this.setState({ saved: false });
    }, 1500);
    themeActions.saveTheme();
  }
    render() {
      const {props, state} = this;
      return (
          <div className="save-button">
            <a className="waves-effect waves-light btn" onClick={ this.onClick }><i className="material-icons left"></i>Save</a>
            { (state.saved) && <span className="file-path">saved</span> }
          </div>
      );
    }
}
