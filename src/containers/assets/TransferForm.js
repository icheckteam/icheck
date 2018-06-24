import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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

class TransferForm extends Component {
  render() {
    return (
      <div>
        TransferForm
      </div>
    );
  }
}

export default withStyles(
  styles,
)(TransferForm);