import React from 'react/addons';

export default class App extends React.Component { 
  render() {   
    const {props, state} = this;    
    return (
      <div>
      </div>
    );
  }
}


React.render(
  <App />,
  document.getElementById('app')
);  