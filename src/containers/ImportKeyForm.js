import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
const styles = theme => ({
  container: {
  },
  textField: {
    minWidth: 250
  },
  button: {

  }
});

class NewKeyForm extends Component {
  state = {
    name: "",
    password: "",
    seed: "",
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  };


  render() {
    const { classes  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Username"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <br />

        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />

        <br />

        <TextField
          id="seed"
          label="Seed"
          rows={6}
          multiline={true}
          className={classes.textField}
          value={this.state.seed}
          onChange={this.handleChange('seed')}
          margin="normal"
        />


         <br />

        <Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.handleSubmit()}>
          Import
        </Button>

        <br/>
        <Link to="/login">Login?</Link>  <Link to="/register">Create new key?</Link>
      </form>
    );
  }
}

export default withStyles(styles)(NewKeyForm)