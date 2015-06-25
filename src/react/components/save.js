import {React, Reflux, reactMixin} from '../init';
import themeActions from '../actions/theme';

export default class Save extends React.Component {   
    render() {   
      return (        
          <div className="save-button">
            <a className="waves-effect waves-light btn" onClick={ themeActions.saveTheme.bind(this) }><i className="material-icons left"></i>Save</a>        
          </div>
      );
    }      
}
