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

class AddMaterialForm extends Component {
  state = {
    asset_id: "",
    quantity: 0
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  handleSubmit = () => (e) => {
    e.preventDefault()
    this.props.onSubmit([{
      asset_id: this.state.asset_id,
      quantity: Number(this.state.quantity),
    }])
  };



  render() {
    const { classes  } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="asset_id"
          label="Asset ID"
          className={classes.textField}
          value={this.state.asset_id}
          onChange={this.handleChange('asset_id')}
          margin="normal"
        />

        <TextField
          id="quantity"
          label="Quantity"
          type="number"
          className={classes.textField}
          value={this.state.quantity}
          onChange={this.handleChange('quantity')}
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
)(AddMaterialForm);