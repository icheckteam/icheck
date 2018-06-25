import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../actions/auth';

function mapStateToProps(state) {
  return {
  };
}

class LoginContainer extends Component {

  handleSubmit = (data) => {
    this.props.login(data)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginContainer);