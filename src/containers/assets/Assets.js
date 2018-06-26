import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
});

function Assets(props) {
  const { classes, items } = props;

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items && items.length > 0 ? items.map(item => {
            return (
              <TableRow key={item.id}>
                <TableCell><Link to={"/assets/" + item.id}>{item.id}</Link></TableCell>
                <TableCell>{item.height}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.created}</TableCell>
              </TableRow>
            )
          }): (
             <TableRow>
                <TableCell colSpan={5}>No assets found</TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

Assets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Assets);
