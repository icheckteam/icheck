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
  render() {
    const { identities, classes  } = this.props
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
            {identities ? identities.map(identity => {
              return (
                <TableRow key={identity.id}>
                  <TableCell>{identity.context}</TableCell>
                  <TableCell>{identity.name}</TableCell>
                  <TableCell>{identity.metadata.issuer}</TableCell>
                  <TableCell>{identity.metadata.create_time}</TableCell>
                  <TableCell>{identity.metadata.expires}</TableCell>
                </TableRow>
              )
            }): (
              <TableRow>
                  <TableCell colSpan={6}>No identities found</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}


export default withStyles(styles)(IdentitiesList)