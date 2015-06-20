import React from 'react/addons';
import Upload from './components/upload';

export default class App extends React.Component { 
  render() {   
    const {props, state} = this;    
    return (
      <div>
        <nav className="section-header">
           <div className="nav-wrapper">
             <a href="#" className="brand-logo">lower contrast</a>
           </div>
         </nav>             
         <section className="section-upload">
          <Upload />
         </section>
      </div>
    );
  }
}


React.render(
  <App />,
  document.getElementById('app')
);  