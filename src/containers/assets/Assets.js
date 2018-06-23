import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  const { classes, assets } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets ? assets.map(asset => {
            return (
              <TableRow>
                <TableCell>{asset.id}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.quantity}</TableCell>
                <TableCell>{asset.height}</TableCell>
              </TableRow>
            )
          }): (
             <TableRow>
                <TableCell>Create asset</TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

Assets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Assets);
