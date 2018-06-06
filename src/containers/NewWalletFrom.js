import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class NewWalletFrom extends Component {
  state = {
    passphrase: "",
    passphrase2: "",
  }

  resetFields () {
    this.setState({
      passphrase: '',
      passphrase2: '',
    })
  }

  createWalletAccount = () => (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.createWalletAccount()} noValidate autoComplete="off">
        <TextField
          id="passphrase"
          label="Enter passphrase here"
          className={classes.textField}
          value={this.state.passphrase}
          onChange={this.handleChange('name')}
          fullWidth={true}
          margin="normal"
        />
        <TextField
          id="passphrase1"
          label="Enter passphrase again"
          className={classes.textField}
          value={this.state.passphrase1}
          fullWidth={true}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <Button variant="raised" color="primary" type='submit'>Generate keys</Button>
      </form>
    );
  }
}

NewWalletFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(NewWalletFrom)