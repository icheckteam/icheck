import React, {Component} from 'react'
import copy from 'copy-to-clipboard';
import ContentCopy from '@material-ui/icons/ContentCopy'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TIME } from '../../common/constants';
const styles = theme => ({
  container: {
    marginLeft: "5px",
    color: "#000",
    cursor: "pointer"
  },
});


class CopyToClipboard extends Component {
  state = {
    copyIconShown: true
  }

  copyText = (text) => {
    // Copy with options
    copy(text, {
      debug: true,
      message: '',
    });

    this.setState({
      copyIconShown: false
    })

    setTimeout(() => {
      this.setState({
        copyIconShown: true
      })
    }, TIME.ONE_SECOND_MS)
  }

  render() {
    const { text, tooltip = '', classes } = this.props
    const { copyIconShown } = this.state
    return (
      <span
        onClick={() => this.copyText(text)}
        className={classes.container}
      >
        {tooltip ? <Tooltip title={tooltip}>{copyIconShown ? <ContentCopy /> : <CheckCircleIcon />}</Tooltip> : <ContentCopy />}
      </span>
    );
  }
}

CopyToClipboard.propTypes = {
  text: PropTypes.string,
  tooltip: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(CopyToClipboard)