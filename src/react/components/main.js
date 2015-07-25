import {React, Reflux, reactMixin} from '../init';
import Upload from './upload';
import Result from './result';
import Options from './options';
import Previews from './previews';
import Save from './save';

export default class Main extends React.Component {
  render() {
    const { props, state } = this;
    const { upload, save, blockColor, removeBlockColor, setRange } = this.props;
    
    return (
      <div>
        <nav className="section-header">
           <div className="nav-wrapper">
             <i className="material-icons header-icon-reload dp48" onClick={ WindowApi.reload.bind(this) }>replay</i>
             <a href="#" className="brand-logo">Sublime Contrast</a>
           </div>
         </nav>

         <If condition={ !state.showOptions }>
           <section className="section-upload">
            <Upload />
          </section>
        </If>

         <If condition={ state.showOptions }>
          <section className="section-options">
            <Options />
          </section>
        </If>

         <If condition={ state.showOptions }>
            <section className="section-previews">
              <Previews colors={state.colors} />
            </section>
        </If>

        <If condition={ state.showOptions }>
          <Save fileName={state.fileName} />
        </If>
      </div>
    );
  }
}