import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HistoryUpdate from './HistoryUpdate';
const styles = theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  textField: {
    marginRight: 20,
  },
  button: {

  }
});

class AssetDetails extends Component {

  renderLocation(location) {
    if (location) {
      return (<span>{location.latitude - location.longitude }</span>)
    }
  }

  render() {
    const { classes, asset, history } = this.props;
    return (
      <div>
        <h1>{asset.name} - {asset.id}</h1>
        <Paper className={classes.container} elevation={4}>
          <Typography component="p">
            <b>Asset ID </b> : {asset.id}
          </Typography>

          <Typography component="p">
            <b>Asset Name </b> : {asset.name}
          </Typography>

           <Typography component="p">
            <b>Type </b> : {asset.type}
          </Typography>

           <Typography component="p">
            <b>Sub Type </b> : {asset.subtype}
          </Typography>

          <Typography component="p">
            <b>Asset Quantity </b> : {asset.quantity}
          </Typography>

          <Typography component="p">
            <b>Weight </b> : {asset.weight}
          </Typography>
          <Typography component="p">
            <b>Location </b> : {this.renderLocation(asset.location)}
          </Typography>
        </Paper>
        <h2>History update</h2>
        <HistoryUpdate items={history}/>
      </div>
    );
  }
}

export default withStyles(
  styles,
)(AssetDetails);