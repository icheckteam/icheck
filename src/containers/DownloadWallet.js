import React, { Component } from 'react';
import PropTypes from 'prop-types';
class DownloadWallet extends Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        {account.address}
      </div>
    );
  }
}

DownloadWallet.propTypes = {
  account: PropTypes.object.isRequired,
}

export default DownloadWallet