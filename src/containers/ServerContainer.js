import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
function mapStateToProps(state) {
  return {

  };
}

class ServerContainer extends Component {
  state = {
    api: "http://125.212.225.51:4396/"
  }
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          fullWidth={true}
            id="server"
            label="Rest Server"
            value={this.state.api}
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