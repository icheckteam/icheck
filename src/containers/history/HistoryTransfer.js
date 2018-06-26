import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TransferForm from '../assets/TransferForm';

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
        <TableCell>{tx.time}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, txs, onTransfer } = this.props;
    return (
      <div className={classes.root}>
        <TransferForm onSubmit={onTransfer}/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Hash</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Time</TableCell>
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
      </div>
    );
  }
}

export default withStyles(
  styles,
)(HistoryTransfer);