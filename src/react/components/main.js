import {React, Reflux, reactMixin} from '../init';
import Upload from './upload';
import Result from './result';
import Options from './options';
import Previews from './previews';
import Save from './save';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="section-header">
           <div className="nav-wrapper">
             <i className="material-icons header-icon-reload dp48" onClick={ WindowApi.reload.bind(this) }>replay</i>
             <a href="#" className="brand-logo">Sublime Contrast</a>
           </div>
         </nav>

         <If condition={ !this.props.store.showOptions }>
           <section className="section-upload">
            <Upload {...this.props} />
          </section>
        </If>

         <If condition={ this.props.store.showOptions }>
          <section className="section-options">
            <Options {...this.props} />
          </section>
        </If>

         <If condition={ this.props.store.showOptions }>
            <section className="section-previews">
              <Previews {...this.props} />
            </section>
        </If>

        <If condition={ this.props.store.showOptions }>
          <Save {...this.props} />
        </If>
      </div>
    );
  }
}