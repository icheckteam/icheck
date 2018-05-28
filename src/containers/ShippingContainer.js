import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class ShippingContainer extends Component {
  render() {
    return (
      <div>
        ShippingContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ShippingContainer);