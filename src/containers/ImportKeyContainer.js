import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImportKeyForm from './ImportKeyForm';
import {createKey } from '../actions/auth';

function mapStateToProps(state) {
  return {
    seed: state.auth.seed
  };
}

class ImportKeyContainer extends Component {
  handleSubmit = (data) => {
    this.props.createKey(data)
  }
  render() {
    return (
      <div>
        <h1>Import key</h1>
        <ImportKeyForm seed={this.props.seed} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { createKey }
)(ImportKeyContainer);