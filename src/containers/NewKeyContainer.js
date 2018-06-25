import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewKeyForm from './NewKeyForm';
import { getSeed, createKey } from '../actions/auth';

function mapStateToProps(state) {
  return {
    seed: state.auth.seed
  };
}

class NewKeyContainer extends Component {

  componentDidMount() {
    this.props.getSeed()
  }

  handleSubmit = (data) => {
    this.props.createKey({
      ...data,
      seed: this.props.seed,
    })
  }

  render() {
    return (
      <div>
        <h1>New Key</h1>
        <NewKeyForm seed={this.props.seed} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getSeed, createKey }
)(NewKeyContainer);