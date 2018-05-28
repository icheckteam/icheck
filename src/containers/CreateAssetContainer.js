import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    
  };
}

class CreateAssetContainer extends Component {
  render() {
    return (
      <div>
        CreateAssetContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CreateAssetContainer);