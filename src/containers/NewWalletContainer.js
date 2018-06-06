import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { keys } from 'ichain-js-sdk'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DownloadWallet from './DownloadWallet';
import NewWalletFrom from './NewWalletFrom';
function mapStateToProps(state) {
  return {

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
  state = {
    account: undefined
  }

  handleNewAccount = () => (opts) => {
    const account = new keys.Key()
    this.setState({
      account: account,
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        {this.state.account ? (
          <DownloadWallet account={this.state.account}/>
        ): <NewWalletFrom onSubmit={this.handleNewAccount()}/>}
      </Paper>
    );
  }
}

NewWalletContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
)(NewWalletContainer));