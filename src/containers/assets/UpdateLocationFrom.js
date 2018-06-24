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

class UpdateLocationFrom extends Component {
  state = {
    longitude: "",
    latitude: "",
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit({
      properties: [
        {
          name: "location",
          type: 6,
          location_value: {
            longitude: this.state.longitude,
            latitude: this.state.latitude,
          },
        }
      ]
    })
  };



  render() {
    const { classes  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="longitude"
          label="Longitude"

          className={classes.textField}
          value={this.state.longitude}
          onChange={this.handleChange('longitude')}
          margin="normal"
        />
        <TextField
          id="latitude"
          label="latitude"

          className={classes.textField}
          value={this.state.latitude}
          onChange={this.handleChange('latitude')}
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
)(UpdateLocationFrom);