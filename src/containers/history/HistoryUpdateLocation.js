import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UpdateLocationFrom from '../assets/UpdateLocationFrom';

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

class HistoryUpdateWeight  extends Component {
  renderRow(tx) {
    let msg = tx.tx.value.msg;
    return (
      <TableRow key={tx.hash}>
        <TableCell> {msg.value.properties[0].location_value.latitude}- {msg.value.properties[0].location_value.longitude}</TableCell>
        <TableCell>{msg.value.sender}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, txs } = this.props;
    return (
      <Paper className={classes.root}>
      <UpdateLocationFrom onSubmit={this.props.onUpdateProperties}/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell>Reporter</TableCell>
              <TableCell>Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {txs ? txs.map(this.renderRow): (
              <TableRow>
                  <TableCell>No txs found</TableCell>
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
)(HistoryUpdateWeight);