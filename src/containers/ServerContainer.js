import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import node from '../node'
function mapStateToProps(state) {
  return {

  };
}

class ServerContainer extends Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          fullWidth={true}
            id="server"
            label="Rest Server"
            value={node.server}
            disabled={true}
            margin="normal"
          />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
)(ServerContainer);