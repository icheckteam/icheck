import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});


class TextOverflow extends Component {
  render() {
    const { classes} = this.props;
    return (
      <p className={classes.root}>
        {this.props.children}
      </p>
    );
  }
}

export default withStyles(
  styles,
)(TextOverflow);

