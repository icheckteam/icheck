import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAssetFrom from './assets/CreateAssetFrom';
import { withStyles } from '@material-ui/core/styles';
import { createAsset, queryAccountAssets } from '../actions/assets';
import { Redirect } from 'react-router-dom'
import { showUnlockDialogIfNotPassword } from '../actions/unlockDialog';
function mapStateToProps(state) {
  return {
    authConfig: state.auth.config,
    addr: state.auth.addr,
  };
}

const styles = theme => ({
  container: {

  },

});


class CreateAssetContainer extends Component {
  state = {
    redirect: false,
  }
  handleSubmit =(asset) => {
    this.props.showUnlockDialogIfNotPassword(this.props.authConfig, () => {
      this.props.createAsset({
        ...this.props.authConfig,
        asset,
      }).then(() => {
        this.props.queryAccountAssets(this.props.addr);
        this.setState({
          redirect: true,
        })
      })
    });
  }

  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return (
        <Redirect to='/assets'/>
      )
    }
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
  { createAsset, queryAccountAssets, showUnlockDialogIfNotPassword }
)(CreateAssetContainer));