import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, HeaderBar } from './header';

class Layout extends Component {
  render() {
    const { title, subtitle, hidebar } = this.props;
    return (
      <div className='layout-grid'>
        <Header
          title={title}
          subtitle={subtitle}
        />
        {this.props.hidebar ? '' : <HeaderBar/>}
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const header = state.header;
  return {
    ...header
  }
}

Layout = connect(mapStateToProps)(Layout);

export default Layout;