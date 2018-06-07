import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { ROUTES } from '../common/constants';
import { Paper, MenuItem, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { setDefaultAccount, saveWallet, decrypt } from '../actions/accounts';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  selectAccount: {
    minWidth: 150,
  }
});
function mapStateToProps(state) {
  return {
    wallet: state.wallet.wallet,
    defaultIndex: state.wallet.defaultIndex,
    privateKey: state.wallet.privateKey,
  };
}

class WalletContainer extends Component {

  state = {
    passphrase:  ""
  }


  renderAccounts = () => {
    const { wallet, defaultIndex, setDefaultAccount, classes } = this.props
    if (wallet.accounts.length > 0) {
      return (
        <Select className={classes.selectAccount} value={defaultIndex} onChange={(e) => {
          setDefaultAccount(e.target.value)
          saveWallet(wallet)
        }}>
          {wallet.accounts.map((account, index) => {
            return (
              <MenuItem key={account.address} value={index}>{account.name || account.address}</MenuItem>
            )
          })}
        </Select>
      )
    }
  }

  render() {
    const { classes, decrypt, wallet,  privateKey, defaultIndex} = this.props;
    const { passphrase } = this.state;
    return (
      <div>
        <h1>Wallet management</h1>

        <Paper className={classes.paper}>
          Wallet: {this.renderAccounts()} &nbsp; &nbsp;

          <Button component={Link} variant="raised" color="primary" to={ROUTES.NEW_WALLET}>
            New Wallet
          </Button> &nbsp;

          <Button component={Link} variant="raised" color="primary" to={ROUTES.OPEN_WALLET}>
            Open wallet
          </Button>

         
          {wallet.accounts.length > 0  && !privateKey? (
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <div>Unlock your wallet account to access management</div>
              <p></p>
              <TextField
                type="password"
                placeholder="Your password"
                onChange={(e) => this.setState({passphrase: e.target.value})}
                value={passphrase}
                />
              <Button variant="raised" color="primary" onClick={() => {
                decrypt(defaultIndex, wallet, passphrase)
              }}>
                Unlock
              </Button> 
            </div>
          ) : null}
        </Paper>

        
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
  { setDefaultAccount, decrypt }
)(WalletContainer));