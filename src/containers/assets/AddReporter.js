import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
const styles = theme => ({
  container: {
    padding: 20,
  },
  textField: {
    marginRight: 10
  },
  button: {

  }
});

class AddReporter extends Component {
  state = {
    reporter: "",
    properties: ""
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit({
      reporter: this.state.reporter,
      properties: this.state.properties.split(","),
    })
  };



  render() {
    const { classes  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="reporter"
          label="Reporter"
          className={classes.textField}
          value={this.state.reporter}
          onChange={this.handleChange('reporter')}
          margin="normal"
        />

        <TextField
          id="properties"
          label="properties"
          className={classes.textField}
          value={this.state.properties}
          onChange={this.handleChange('properties')}
          margin="normal"
        />
        <Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.handleSubmit()}>
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(
  styles,
)(AddReporter);