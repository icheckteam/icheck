import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { ROUTES } from '../common/constants';
import { Paper } from '@material-ui/core';
const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});
function mapStateToProps(state) {
  return {

  };
}

class WalletContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Wallet management</h1>

        <Paper className={classes.paper}>
          <Button component={Link} variant="raised" color="primary" to={ROUTES.NEW_WALLET}>
            New Wallet
          </Button> &nbsp;

          <Button component={Link} variant="raised" color="primary" to={ROUTES.OPEN_WALLET}>
            Open wallet
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
)(WalletContainer));