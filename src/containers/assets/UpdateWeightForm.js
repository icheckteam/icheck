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

class UpdateWeightFrom extends Component {
  state = {
    weight: 0,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit({
      properties: [
        {
          name: "weight",
          type: 4,
          number_value: Number(this.state.weight),
        }
      ]
    })
  };



  render() {
    const { classes  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="weight"
          label="Weight (Kg)"
          type="number"
          className={classes.textField}
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          margin="normal"
        />
        <Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.handleSubmit()}>
          Update
        </Button>
      </form>
    );
  }
}

export default withStyles(
  styles,
)(UpdateWeightFrom);