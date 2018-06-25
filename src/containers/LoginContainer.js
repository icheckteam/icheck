import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../actions/auth';
import { Redirect } from 'react-router-dom'
function mapStateToProps(state) {
  return {
  };
}

class LoginContainer extends Component {
  state = {
    redirect: false,
  }
  handleSubmit = (data) => {
    this.props.login(data).then(() => {
      this.setState({redirect: true});
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