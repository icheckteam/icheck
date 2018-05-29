import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class WalletContainer extends Component {
  render() {
    return (
      <div>
        WalletContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(WalletContainer);