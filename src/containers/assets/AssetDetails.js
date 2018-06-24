import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HistoryUpdate from './HistoryUpdate';
import Materials from './Materials';
import Reporters from './Reporters';
import { Link } from "react-router-dom";
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
      return (<span>{location.latitude } - {location.longitude}</span>)
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
            <b>Owner </b> : <Link to={`/assets/${asset.id}/history/transfer`}>{asset.owner}</Link>
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
            <b>Asset Quantity </b> : <Link to={`/assets/${asset.id}/history/quantity`}>{asset.quantity}</Link>
          </Typography>

          <Typography component="p">
            <b>Weight </b> : <Link to={`/assets/${asset.id}/history/weight`}>{asset.weight}</Link>
          </Typography>
          <Typography component="p">
            <b>Location </b> : <Link to={`/assets/${asset.id}/history/location`}> {this.renderLocation(asset.location)}</Link>
          </Typography>
        </Paper>

        <h2>Materials</h2> 
        <Materials 
          onAddMaterial={this.props.onAddMaterial} 
          materials={asset.materials}/>

        <h2>Reporters</h2> 
        <Reporters 
          onAddReporter={this.props.onAddReporter}
          reporters={asset.reporters}/>
      </div>
    );
  }
}

export default withStyles(
  styles,
)(AssetDetails);