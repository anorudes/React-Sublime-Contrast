import {React, Reflux, reactMixin} from '../init';
import ParserApi from '../api/parser';

import themeActions from '../actions/theme';
import themeStore from '../stores/theme';

@reactMixin.decorate(Reflux.connect(themeStore))
export default class Result extends React.Component { 
  render() {   
    const {props, state} = this; 
    let cx = React.addons.classSet;        
    return (
      <section className={ cx({ 'result': true, 'result--show': state.showResult }) }>
        <div className="result__title">
          Generated theme:
        </div>
        <div className="result__code">
        test
        </div>
      </section>
    );
  }
}