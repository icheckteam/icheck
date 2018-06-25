import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewKeyForm from './NewKeyForm';

function mapStateToProps(state) {
  return {

  };
}

class NewKeyContainer extends Component {
  render() {
    return (
      <div>
        <h1>New Key</h1>

        <NewKeyForm/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(NewKeyContainer);