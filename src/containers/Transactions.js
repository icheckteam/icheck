import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
const styles = theme => ({

});
class Transactions extends Component {

  renderRow(tx) {
    let type, data;
    let msg = tx.tx.value.msg;
    switch(msg.type) {
      // sendCoin 
      case 'EAFDE32A2C87F8':
        type = "send";
        data = (
          <div>
            {msg.value.outputs.map(output => {
              return (
                <div key={output.address}>
                  <p><em>To</em>: {output.address}</p>
                  <p><em>Amount</em>: 
                    {output.coins.map(coin => {
                      return (<span key={coin.denom}>{coin.amount} <em>{coin.denom}</em>, </span>)
                    })}
                  </p>
                </div>
              )
            })}
          </div>
        );
      break;
    }

    return (
      <TableRow key={tx.hash}>
        <TableCell>{tx.hash}</TableCell>
        <TableCell>{tx.height}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{data}</TableCell>
        <TableCell>{tx.result.gasUsed} gas</TableCell>
        <TableCell>0 tomato</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, txs} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Hash</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Gas</TableCell>
              <TableCell>Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {txs ? txs.map(tx => this.renderRow(tx)): (
              <TableRow>
                  <TableCell>No transactions</TableCell>
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
)(Transactions);