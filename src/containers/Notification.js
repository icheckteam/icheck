import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { notification, handleClose} = this.props;
    return (
      <div>
        <Dialog
          open={notification.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{notification.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {notification.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>  
      </div>
    );
  }
}
Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
}
export default Notification;