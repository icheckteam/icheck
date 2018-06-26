import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
class NewAssetFromParentDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: "",
      name: props.asset.name,
      quantity: 0,
    }
  }
  handleSubmit  = () => {
    this.props.onSubmit({
      ...this.state,
      quantity: Number(this.state.quantity),
    });
    this.props.onClose();
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New asset"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Asset Id"
            value={this.state.asset_id}
            onChange={this.handleChange('asset_id')}
            fullWidth
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('quantity')}
              fullWidth
            />
          
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
            fullWidth
          />
          <p><em>Maximum: {this.props.asset.quantity}</em></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default NewAssetFromParentDialog;