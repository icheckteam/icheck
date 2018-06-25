import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import SendForm from './SendForm';
import { send } from '../actions/accounts';
import TransactionsContainer from './TransactionsContainer';
import LoginContainer from './LoginContainer';

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
    this.props.send(data.recipient, {
      ...this.props.auth.config,
      amount: data.amount,
    });
  }

  render() {
    const { classes, auth} = this.props;
    return (
      <div>
        { auth.addr ?(
          <div>
            <h1>Wallet management</h1>
            <Paper className={classes.paper}>
              {auth.coins.map(coin => {
                return (
                  <p key={coin.denom}>{coin.amount} {coin.denom}</p>
                )
              })}

              <SendForm
                onSubmit={this.handleSubmit()}
                coins={auth.coins}
              />
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
  { send }
)(WalletContainer));