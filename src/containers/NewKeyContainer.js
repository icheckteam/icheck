import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class NewKeyContainer extends Component {
  render() {
    return (
      <div>
        NewKeyContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(NewKeyContainer);