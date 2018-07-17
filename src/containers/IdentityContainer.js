import React, { Component } from 'react';
import { connect } from 'react-redux';
import IdentitiesList from './IdentitiesList';
import { Button } from '@material-ui/core';
import IssueIdentityDialog from './IssueIdentityDialog';
import { createClaim, getIdentitiesByAccount } from '../actions/claim';
import { showUnlockDialogIfNotPassword } from '../actions/unlockDialog'
function mapStateToProps(state) {
  return {
    auth: state.auth,
    claims: state.claims.claims,
    addr: state.auth.addr,
  };
}

class IdentityContainer extends Component {
  state = {
    openDialogIssueClaim: false,
  }

  componentDidMount() {
    this.props.getIdentitiesByAccount(this.props.addr)
  }

  handlerIssueClaim  = (data) => {
    this.props.showUnlockDialogIfNotPassword(this.props.auth.config, () => {
      this.props.createClaim({
        issuer: this.props.auth.addr,
        ...this.props.auth.config,
        ...data
      });
    });
  }


  handleCloseDialog = (dialog) => () => {
    this.setState({
      [dialog]: false,
    })
   }
 
   handleOpenDialog = (dialog) => ()=> {
     this.setState({
       [dialog]: true,
     })
    }

  render() {
    const { claims } = this.props;
    return (
      <div>
        <IssueIdentityDialog 
          onSubmit={this.handlerIssueClaim}
          open={this.state.openDialogIssueClaim}
          onClose={this.handleCloseDialog("openDialogIssueClaim")}
          />
          
        <h1>List all identities</h1>
        <div>
          <Button variant="raised" color="primary" onClick={this.handleOpenDialog("openDialogIssueClaim")}>
            Issue an identity
          </Button>
        </div>
        <IdentitiesList claims={claims}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { createClaim, showUnlockDialogIfNotPassword, getIdentitiesByAccount }
)(IdentityContainer);