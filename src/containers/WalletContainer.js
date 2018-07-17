import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import SendForm from './SendForm';
import { send } from '../actions/accounts';
import { unlock, logout } from '../actions/auth';
import TransactionsContainer from './TransactionsContainer';
import LoginContainer from './LoginContainer';
import UnlockForm from './UnlockForm';
import TextOverflow from '../components/TextOverflow';
import { showUnlockDialogIfNotPassword } from '../actions/unlockDialog';
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
    auth: state.auth,
  };
}
 
class WalletContainer extends Component {

  handleSubmit = () => (data) => {
    this.props.showUnlockDialogIfNotPassword(this.props.auth.config, () => {
      this.props.send(data.recipient, {
        ...this.props.auth.config,
        amount: data.amount,
      });
    });
  }

  handleUnlock = (data) => {
    const { auth} = this.props;
    this.props.unlock({
      name: auth.config.name,
      password: data.password,
    });
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { classes, auth} = this.props;
    return (
      <div>
        { auth.addr ?(
          <div>
            <h1>Wallet management</h1>
            <Paper className={classes.paper}>

              <Button variant="raised" color="primary" onClick={this.handleLogout}>
                Logout
              </Button> <br/>
              <h3>Your address: <TextOverflow>{auth.addr}</TextOverflow></h3>
              <h3>Your tokens </h3> 
              {auth.coins.map(coin => {
                return (
                  <b key={coin.denom}><p >{coin.amount} {coin.denom}</p></b>
                )
              })}
            </Paper>
            
            {!auth.config.password ? (
              <div>
                <h1>Unlock your account </h1>
                <Paper className={classes.paper}>
                  <UnlockForm onSubmit={this.handleUnlock}/>
                </Paper>
              </div>
            ) : ""}

            <h1>Send token</h1>
            <Paper className={classes.paper}>
              <SendForm
                onSubmit={this.handleSubmit()}
                coins={auth.coins} />
            </Paper>

            <TransactionsContainer/>
          </div>
        ) : (
          <LoginContainer/>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
  { send, unlock, logout, showUnlockDialogIfNotPassword}
)(WalletContainer));