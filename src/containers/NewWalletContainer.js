import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { generateNewWalletAccount } from '../actions/generateWallet'
import NewWalletForm from './NewWalletForm';
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

  generateNewWalletAccount = (passphrase, passphrase1) => {
    this.props.generateNewWalletAccount(passphrase, passphrase, this.props.history)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Add new wallet account</h1>
        <Paper className={classes.root} elevation={4}>
          <NewWalletForm onSubmit={this.generateNewWalletAccount}/>
        </Paper>
      </div>
    );
  }
}

NewWalletContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  generateNewWalletAccount: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  { generateNewWalletAccount }
)(NewWalletContainer));