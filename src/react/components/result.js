import {React, Reflux, reactMixin} from '../init';
import ParserApi from '../api/parser';

import themeActions from '../actions/theme';

export default class Result extends React.Component { 
  render() {   
    const {props, state} = this;     
    return (
      <section className="result" >
        <div className="result__title">
          Generated theme:
        </div>
        <div className="result__code">
        { props.themeContent }
        </div>
      </section>
    );
  }
}