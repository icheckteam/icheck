import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
class IdentitiesList extends Component {

  renderContent(claim) {
    if (claim.content) {
      switch (claim.context) {
        case 'realname_authentication':
        case 'vietgap_authentication':
        return (
          <div>
            ID: {claim.content.id}  <br/>
            Name: {claim.content.name} <br/>
          </div>
        )
        case 'company_authentication':
        return (
          <div>
            ID: {claim.content.id} <br/>
            Name: {claim.content.name} <br/>
            Email: {claim.content.email} <br/>
            Website: {claim.content.website} <br/>
            Taxcode: {claim.content.taxcode} <br/>
          </div>
        )
        default:
        break;
      }
    }
  }

  render() {
    const { claims, classes  } = this.props
    return (
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Context</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Issuer</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Expires</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {claims ? claims.map(claim => {
              return (
                <TableRow key={claim.id}>
                  <TableCell>{claim.id}</TableCell>
                  <TableCell>{claim.context}</TableCell>
                  <TableCell>{this.renderContent(claim)}</TableCell>
                  <TableCell>{claim.issuer}</TableCell>
                  <TableCell>{claim.create_time}</TableCell>
                  <TableCell>{claim.expires}</TableCell>
                </TableRow>
              )
            }): (
              <TableRow>
                  <TableCell colSpan={6}>No claims found</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}


export default withStyles(styles)(IdentitiesList)