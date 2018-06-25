import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddReporter from './AddReporter';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginRight: 20,
  },
});

class Reporters extends Component {



  renderRow(reporter) {
    return (
      <TableRow key={reporter.address}>
        <TableCell>{reporter.address}</TableCell>
        <TableCell>{reporter.properties.join(",")}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, reporters, onAddReporter } = this.props;
    return (
      <Paper className={classes.root}>
        <AddReporter onSubmit={onAddReporter}/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Reporter</TableCell>
              <TableCell>Properties</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reporters ? reporters.map(this.renderRow): (
              <TableRow>
                  <TableCell>No reporters found</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(
  styles,
)(Reporters);