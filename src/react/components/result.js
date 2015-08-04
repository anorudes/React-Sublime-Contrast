import React from 'react/addons';
import ParserApi from '../api/parser';

export default class Result extends React.Component {
  render() {
    return (
      <section className="result" >
        <div className="result__title">
          Generated theme:
        </div>
        <div className="result__code">
        { this.props.store.themeContent }
        </div>
      </section>
    );
  }
}