import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  container: {
  },
  textField: {

  },
  button: {

  }
});



class CreateAssetFrom extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    quantity: 0,
    company: "",
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => event => {
    // handle submit
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="id"
          label="Asset Id"
          fullWidth={true}
          className={classes.textField}
          value={this.state.id}
          onChange={this.handleChange('id')}
          margin="normal"
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
        />
        <TextField
          id="company"
          label="Company"
          fullWidth={true}
          className={classes.textField}
          value={this.state.company}
          onChange={this.handleChange('company')}
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          fullWidth={true}
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />

        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(CreateAssetFrom);