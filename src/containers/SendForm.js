import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Select, MenuItem } from '@material-ui/core';
const styles = theme => ({
  container: {
  },
  textField: {
    maxWidth: 500,
    marginRight: 10
  },
  button: {

  }
});

class SendForm extends Component {
  state = {
    denom: "tomato",
    amount: 0,
    recipient: "",
    memo: "",
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit({
      recipient: this.state.recipient,
      memo: this.state.memo,
      amount: [
        { denom: this.state.denom, amount: Number(this.state.amount)}
      ]
    })
  };


  render() {
    const { classes, coins  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Select
          fullWidth={true}
          value={this.state.denom}
          onChange={this.handleChange("denom")}
          className={classes.textField}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          {coins.map(coin => {
            return (
              <MenuItem key={coin.denom} value={coin.denom}>
                <em>{coin.denom}</em>
              </MenuItem> 
            )
          })}
        </Select>

        <TextField
        fullWidth={true}
          id="recipient"
          label="Recipient"
          className={classes.textField}
          value={this.state.recipient}
          onChange={this.handleChange('recipient')}
          margin="normal"
        />

        <TextField
        fullWidth={true}
          id="amount"
          label="Amount"
          type="number"
          className={classes.textField}
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          margin="normal"
        />

        <TextField
        fullWidth={true}
          id="memo"
          label="Memo"
          className={classes.textField}
          value={this.state.memo}
          onChange={this.handleChange('memo')}
          margin="normal"
        />
        <Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.handleSubmit()}>
          Send
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SendForm)