import React, { Component } from 'react';

import { Paper, RadioGroup, FormControlLabel, Radio, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  createAssetForm: {
    maxWidth: "300px"
  }
});
class OpenWalletForm extends Component {
  state = {
    type: "privateKey",
    passphrase: "",
    encryptedKey: "",
    privateKey: "",
  }

  handleChange = (name) => (e) => {
    if (name === "type") {
      return this.setState({
        passphrase: "",
        encryptedKey: "",
        privateKey: "",
        type: e.target.value
      })
    }

    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit = () =>{
    const { encryptedKey, privateKey, passphrase  } = this.state;
    this.props.handleLogin(encryptedKey || privateKey, passphrase)
  }

  render() {
    const { type, encryptedKey, privateKey, passphrase  } = this.state;
    const { classes } = this.props;

    let loginForm, title;
    let disabledButton = true

    if (encryptedKey !== "" && passphrase !== "") {
      disabledButton = false
    } else if (privateKey !== "" && passphrase !== "") {
      disabledButton = false
    }

    if (type === "encryptedKey") {
      title = "Login using an encrypted key:"
      loginForm = (
        <div>
          <TextField
            type="password"
            value={passphrase}
            fullWidth={true}
            label="Enter password here"
            onChange={this.handleChange("passphrase")}
            />
          
          <br />

          <TextField
            type="text"
            fullWidth={true}
            value={encryptedKey}
            label="Enter encrypted key here"
            onChange={this.handleChange("encryptedKey")}
            />
        </div>
      )
    } else {
      title = "Login using a private key:"
      loginForm = (
        <div>
          <TextField
            type="password"
            value={passphrase}
            fullWidth={true}
            label="Enter password to generate encrypted key"
            onChange={this.handleChange("passphrase")}
            />
          
          <br />
          <TextField
            type="text"
            fullWidth={true}
            label="Enter private key here"
            value={privateKey}
            onChange={this.handleChange("privateKey")}
            />
        </div>
      )
    }

    return (
      <Paper className={classes.paper}>
        <RadioGroup
            aria-label="type"
            name="type"
            className={classes.group}
            value={type}
            onChange={this.handleChange("type")}
          >
          <FormControlLabel value="encryptedKey" control={<Radio />} label="Login using encrypted key " />
          <FormControlLabel value="privateKey" control={<Radio />} label="Login using a private key " />
        </RadioGroup>
        <h2>{title}</h2>
        {loginForm}

        <br />
        <Button variant="raised" color="primary" type='submit' disabled={disabledButton} onClick={this.handleSubmit}>Login</Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(OpenWalletForm)