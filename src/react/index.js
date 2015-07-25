import { React } from './init';
import App from './containers/App';

WindowApi.init();

React.render(
  <App />,
  document.getElementById('app')
);


