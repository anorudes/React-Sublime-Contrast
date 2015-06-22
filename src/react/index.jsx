import { React } from './init';
import Main from './main';
import Window from './api/window';

class App {
  static config() {

  }
  static render() {
    React.render(
      <Main />,
      document.getElementById('app')
    );  
  }
}

App.render();
App.config();


