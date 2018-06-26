import React, { Component } from 'react';
import { connect } from 'react-redux';
import IdentitiesList from './IdentitiesList';

function mapStateToProps(state) {
  return {

  };
}

class IdentityContainer extends Component {
  render() {
    return (
      <div>
        <IdentitiesList/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(IdentityContainer);