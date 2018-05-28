import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class InvoicesContainer extends Component {
  render() {
    return (
      <div>
        InvoicesContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(InvoicesContainer);