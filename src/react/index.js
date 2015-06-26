import { React } from './init';
import Main from './main';

class App {
  static config() {
    WindowApi.init();
  }
  static render() {
    React.render(
      <Main />,
      document.getElementById('app')
    );
  }
}

App.config();
App.render();



