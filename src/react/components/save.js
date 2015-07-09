import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Save extends React.Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }
  componentDidMount() {
      $(React.findDOMNode(this.refs.saveDialog)).attr('nwsaveas', this.props.fileName);
  }
  onSave() {
    themeActions.saveTheme();
  }
    render() {
      const {props, state} = this;
      return (
        <div>
          <input type="file" ref="saveDialog" id="saveDialog" hidden />
          <div className="buttons">
            <div className="save-button">
              <a className="waves-effect waves-light btn" onClick={ this.onSave }><i className="material-icons left"></i>Save</a>
            </div>
          </div>
        </div>
      );
    }
}
