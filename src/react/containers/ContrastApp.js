import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import { connect } from 'redux/react';
import Main from '../components/Main';
import * as Actions from '../actions/actions';

export default class ContrastApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Connector select={state => ({ store: state.store })}>
        {this.renderChild}
      </Connector>
    );
  }
  renderChild({ store, dispatch }) {
    const actions = bindActionCreators(Actions, dispatch);
    return (
        <Main store={store} actions={actions} />
    );
  }
}
