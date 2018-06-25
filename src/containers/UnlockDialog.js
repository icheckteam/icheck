import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { unlock } from '../actions/auth'
import { closeUnlockDialog } from '../actions/unlockDialog'
function mapStateToProps(state) {
  return {
    name: state.auth.config.name,
    open: state.unlockDialog.open,
    callback: state.unlockDialog.callback,
  };
}

class UnlockDialog extends React.Component {
  state = {
    password: "",
    errorMsg: "",
  };


  handleClose = () => {
    this.props.closeUnlockDialog()
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  
  handleUnlock = () => {
    this.props.unlock({
      name: this.props.name,
      password: this.state.password,
    }).then(() => {
      this.props.callback();
      this.handleClose();
    }).catch(err => {
      this.setState({
        errorMsg: "Mật khẩu không chính xác"
      })
    });
  }


  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Password</DialogTitle>
          <DialogContent>
            {this.state.errorMsg ? (<div>{this.state.errorMsg}</div>): null}
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.handleChange('password')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUnlock} color="primary">
              Unlock
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { unlock, closeUnlockDialog }
)(UnlockDialog);