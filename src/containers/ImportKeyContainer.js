import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImportKeyForm from './ImportKeyForm';
import {createKey } from '../actions/auth';
import { Redirect } from 'react-router-dom'
function mapStateToProps(state) {
  return {
    seed: state.auth.seed
  };
}

class ImportKeyContainer extends Component {
  state = {
    redirect: false,
  }
  handleSubmit = (data) => {
    this.props.createKey(data).then(() => {
      this.setState({
        redirect: true,
      });
    }); 
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/'/>
      )
    }
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