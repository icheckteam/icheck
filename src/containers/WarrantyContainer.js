import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class WarrantyContainer extends Component {
  render() {
    return (
      <div>
        WarrantyContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(WarrantyContainer);