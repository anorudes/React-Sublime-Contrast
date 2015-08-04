import React from 'react/addons';

export default class Save extends React.Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }
  componentDidMount() {
      $(React.findDOMNode(this.refs.saveDialog)).attr('nwsaveas', this.props.store.fileName);
  }
  onSave() {
    this.props.actions.save();
  }
    render() {
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
