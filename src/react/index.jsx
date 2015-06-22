import {React, Reflux, reactMixin} from './init';

import Upload from './components/upload';
import Result from './components/result';
import Options from './components/options';
import themeStore from './stores/theme';
//import gui from 'nw.gui';

//debugger;

@reactMixin.decorate(Reflux.connect(themeStore))
export default class App extends React.Component { 
  render() {   
    const {props, state} = this;    
    return (      
      <div>
        <nav className="section-header">
           <div className="nav-wrapper">
             <a href="#" className="brand-logo">Lower Contrast</a>
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
          <section className="section-result">
            <Result />
          </section>
        </If>
      </div>
    );
  }
}


React.render(
  <App />,
  document.getElementById('app')
);  