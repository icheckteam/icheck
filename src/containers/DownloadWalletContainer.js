import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CopyToClipboard from '../components/CopyToClipboard';
function mapStateToProps(state) {
  return {
    account: state.generateWallet
  };
}

class DownloadWalletContainer extends Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        { account.address }
        <CopyToClipboard tooltip="Copied" text={account.address}/>
      </div>
    );
  }
}
DownloadWalletContainer.propTypes = {
  account: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
)(DownloadWalletContainer);