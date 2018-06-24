import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TransferForm from '../assets/TransferForm';

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

class HistoryTransfer  extends Component {
  renderRow(tx) {
    let msg = tx.tx.value.msg;
    return (
      <TableRow key={tx.hash}>
        <TableCell>{tx.hash}</TableCell>
        <TableCell>{msg.value.sender}</TableCell>
         <TableCell>{msg.value.recipient}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, txs, onTransfer } = this.props;
    return (
      <Paper className={classes.root}>
        <TransferForm onSubmit={onTransfer}/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Hash</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
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
)(HistoryTransfer);