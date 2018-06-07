import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DownloadWallet from './DownloadWallet';
import NewWalletFrom from './NewWalletFrom';
import { generateNewWalletAccount } from '../actions/generateWallet'
function mapStateToProps(state) {
  return {
    account: state.generateWallet,
  };
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});


class NewWalletContainer extends Component {
  render() {
    const { classes, generateNewWalletAccount, account } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        {account.address ? (
          <DownloadWallet account={account}/>
        ): <NewWalletFrom onSubmit={generateNewWalletAccount}/>}
      </Paper>
    );
  }
}

NewWalletContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  generateNewWalletAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  { generateNewWalletAccount }
)(NewWalletContainer));