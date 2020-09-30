import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposeComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if(!this.props.authenticated) {
        history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        history.push('/');
      }
    }
    render() {
      return <ComposeComponent/>
    }
  }

  function mapStateToProps(state) {
    const { authenticated } = state.auth;
    return { authenticated };
  }

  return connect(mapStateToProps)(Authentication)
}