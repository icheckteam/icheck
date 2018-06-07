import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DownloadWallet from './DownloadWallet';
import { saveAccount } from '../actions/accounts';
import { resetKey } from '../actions/generateWallet';
function mapStateToProps(state) {
  return {
    account: state.generateWallet
  };
}

class DownloadWalletContainer extends Component {
  render() {
    const { account, resetKey, history, saveAccount} = this.props;
    return (
      <DownloadWallet {...account} 
        resetKey={resetKey}
        history={history}
        saveAccount={saveAccount}/>
    );
  }
}
DownloadWalletContainer.propTypes = {
  account: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  { resetKey, saveAccount}
)(DownloadWalletContainer);