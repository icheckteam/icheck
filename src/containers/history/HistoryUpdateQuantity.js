import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
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
  textField: {
    marginRight: 20,
  },
  button: {

  }
});

class HistoryUpdateQuantity extends Component {
  renderRow(tx) {
    let type, data, quantity;
    let msg = tx.tx.value.msg;
    switch(msg.type) {
      // create asset
      case '8E4151824E2B80':
        type = "Create Asset";
        quantity = msg.value.quantity;
        data = (
          <div>
            ID: {msg.value.asset_id},  Name: {msg.value.name}, Quantity: {msg.value.quantity}
          </div>
        );
      break;
      case '241AA14E79D880':
        type = "Add material";
        quantity = msg.value.materials[0].quantity;
        data = (
          <div>
            {msg.value.materials.map(material => {
              return (<span key={material.asset_id}> From: {material.asset_id} To: {msg.value.asset_id} </span>)
            })}
          </div>
        );
        break;
      case 'AD218BD2955E28':
      type = "Add quantity";
      quantity = msg.value.quantity
      data = (
        <div>
          Add  {msg.value.quantity}  Asset:  {msg.value.asset_id}
        </div>
      );
      break;  
      case '0B121308856DA8':
      type = "Sbutract quantity";
      quantity = msg.value.quantity
      data = (
        <div>
          Subtract  {msg.value.quantity} Asset: {msg.value.asset_id}
        </div>
      );
      break;  
      default:
      break;
    }

    return (
      <TableRow key={tx.hash}>
        <TableCell>{tx.hash}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>{data}</TableCell>
        <TableCell>{tx.time}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, txs } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Hash</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Data</TableCell>
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
      </Paper>
    );
  }
}

export default withStyles(
  styles,
)(HistoryUpdateQuantity);