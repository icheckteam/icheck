import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { ROUTES } from '../common/constants';
const styles = theme => ({
  container: {

  }
});

function mapStateToProps(state) {
  return {

  };
}

class WalletContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Button component={Link} variant="raised" color="primary" to={ROUTES.NEW_WALLET}>
            New Wallet
          </Button>
          <Button component={Link} variant="raised" color="primary" to={ROUTES.OPEN_WALLET}>
            Open wallet
          </Button>
        </div>

        <div>Your assets</div>
        List of assets
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
)(WalletContainer));