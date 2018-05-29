import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class NewWalletContainer extends Component {
  render() {
    return (
      <div>
        NewWalletContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(NewWalletContainer);