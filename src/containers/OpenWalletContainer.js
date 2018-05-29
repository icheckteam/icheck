import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class OpenWalletContainer extends Component {
  render() {
    return (
      <div>
        OpenWalletContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(OpenWalletContainer);