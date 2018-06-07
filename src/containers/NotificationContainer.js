import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from './Notification';
import { hideNotification } from '../actions/notification'
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    notification: state.notification,
  };
}

class NotificationsContainer extends Component {
  render() {
    return (
      <Notification 
        handleClose={this.props.hideNotification}
        notification={this.props.notification}/>
    );
  }
}

NotificationsContainer.propTypes = {
  hideNotification: PropTypes.func.isRequired,
  notification: PropTypes.object,
}


export default connect(
  mapStateToProps,
  { hideNotification }
)(NotificationsContainer);