import React, { Component } from 'react';
import OpenWalletForm from './OpenWalletForm';
import { connect } from 'react-redux';
import { handleLogin} from '../actions/accounts'
function mapStateToProps(state) {
  return {

  };
}

class OpenWalletContainer extends Component {
  render() {
    return (
      <div>
        <h1>Open wallet account</h1>
        <OpenWalletForm handleLogin={this.props.handleLogin}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { handleLogin}
)(OpenWalletContainer);