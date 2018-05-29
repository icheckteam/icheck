import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAssetFrom from './assets/CreateAssetFrom';
import { withStyles } from '@material-ui/core/styles';
function mapStateToProps(state) {
  return {
    
  };
}

const styles = theme => ({
  container: {

  },
  createAssetForm: {
    maxWidth: "300px"
  }
});


class CreateAssetContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h3>Add new asset</h3>
        <div className={classes.createAssetForm}>
          <CreateAssetFrom/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
)(CreateAssetContainer));