import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewKeyForm from './NewKeyForm';
import { getSeed, createKey } from '../actions/auth';
import { Redirect } from 'react-router-dom'
function mapStateToProps(state) {
  return {
    seed: state.auth.seed
  };
}

class NewKeyContainer extends Component {
  state = {
    redirect: false,
  }
  componentDidMount() {
    this.props.getSeed()
  }

  handleSubmit = (data) => {
    this.props.createKey({
      ...data,
      seed: this.props.seed,
    }).then(() => {
      this.setState({
        redirect: true,
      })
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