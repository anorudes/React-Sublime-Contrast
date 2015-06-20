import React from 'react/addons';

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
      </div>
    );
  }
}


React.render(
  <App />,
  document.getElementById('app')
);  