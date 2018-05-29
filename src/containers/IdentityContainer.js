import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class IdentityContainer extends Component {
  render() {
    return (
      <div>
        IdentityContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(IdentityContainer);