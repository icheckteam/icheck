import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
const styles = theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  textField: {
    marginRight: 20,
  },
  button: {

  }
});



class CreateAssetFrom extends Component {
  state = {
    id: "",
    name: "",
    quantity: 1,
    asset_type: "asset",
    type: "",
    subtype: "",
    barcode: "",
    weight: 0,
    longitude: "",
    latitude: "",
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => event => {
    event.preventDefault()
    let properties = [];
    if (this.state.name > 0) {
      properties.push({
        name: "weight",
        type: 4,
        number_value: Number(this.state.weight),
      })
    }

    if (this.state.longitude && this.state.latitude) {
      properties.push({
        name: "location",
        type: 6,
        location_value: {
          longitude: this.state.longitude,
          latitude: this.state.latitude,
        },
      })
    }

    if (this.state.type) {
      properties.push({
        name: "type",
        type: 2,
        string_value: this.state.type
      })
    }

    if (this.state.subtype) {
      properties.push({
        name: "subtype",
        type: 2,
        string_value: this.state.subtype
      })
    }

    this.props.onSubmit({
      asset_id: this.state.id,
      name: this.state.name,
      quantity: Number(this.state.quantity),
      asset_type: this.state.asset_type,
      properties: properties.length > 0 ? properties: undefined,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}  elevation={4}> 
        <form  noValidate autoComplete="off">
          <TextField
            id="id"
            label="Asset Id"
            className={classes.textField}
            value={this.state.id}
            onChange={this.handleChange('id')}
            margin="normal"
            fullWidth={true}
          /> 
          <TextField
            id="name"
            label="Name"
            fullWidth={true}
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth={true}
            className={classes.textField}
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
            margin="normal"
          /><br />
          <TextField
            id="type"
            label="Type"
            fullWidth={true}
            className={classes.textField}
            value={this.state.type}
            onChange={this.handleChange('type')}
            margin="normal"
          />
        <TextField
            id="subtype"
            label="Subtype"
            fullWidth={true}
            className={classes.textField}
            value={this.state.subtype}
            onChange={this.handleChange('subtype')}
            margin="normal"
          />
          <TextField
            id="barcode"
            label="Barcode"
            fullWidth={true}
            className={classes.textField}
            value={this.state.barcode}
            onChange={this.handleChange('barcode')}
            margin="normal"
          />

          <TextField
            id="weight"
            label="Weight (Kg)"
            type="number"
            className={classes.textField}
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            margin="normal"
            fullWidth={true}
          />
          <TextField
            id="latitude"
            label="Latitude"
            className={classes.textField}
            value={this.state.latitude}
            onChange={this.handleChange('latitude')}
            margin="normal"
            fullWidth={true}
          />

          <TextField
            id="longitude"
            label="Longitude"
            className={classes.textField}
            value={this.state.longitude}
            onChange={this.handleChange('longitude')}
            margin="normal"
            fullWidth={true}
          />
          <Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.handleSubmit()}>
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(CreateAssetFrom);