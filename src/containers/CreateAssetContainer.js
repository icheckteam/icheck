import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAssetFrom from './assets/CreateAssetFrom';
import { withStyles } from '@material-ui/core/styles';
import { createAsset } from '../actions/assets';


function mapStateToProps(state) {
  return {
    authConfig: state.auth.config
  };
}

const styles = theme => ({
  container: {

  },

});


class CreateAssetContainer extends Component {

  handleSubmit =(asset) => {
    this.props.createAsset({
      ...this.props.authConfig,
      asset,
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h1>Add new asset</h1>
        <div className={classes.createAssetForm}>
          <CreateAssetFrom
              onSubmit={this.handleSubmit}
            />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
  { createAsset }
)(CreateAssetContainer));