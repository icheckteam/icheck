import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddMaterialForm from './AddMaterialForm';
import { Link } from "react-router-dom";
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

class Materials extends Component {



  renderRow(material) {
    return (
      <TableRow key={material.asset_id}>
        <TableCell><Link to={material.asset_id}>{material.asset_id}</Link></TableCell>
        <TableCell>{material.quantity}</TableCell>
      </TableRow>
    )
  }

  render() {
    const { classes, materials, onAddMaterial } = this.props;
    return (
      <div className={classes.root}>
        <AddMaterialForm onSubmit={onAddMaterial}/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Material ID</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materials ? materials.map(this.renderRow): (
              <TableRow>
                  <TableCell colSpan={2}>No material found</TableCell>
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
)(Materials);