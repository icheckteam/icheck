import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import QRCode from 'qrcode/lib/browser'
import CopyToClipboard from '../components/CopyToClipboard';
import { Paper, TextField } from '@material-ui/core';
import { ROUTES } from '../common/constants';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),

  keyItemLabel: {
    fontWeight: "bold"
  }
});
class DownloadWallet extends Component {

  state = {
    name: ""
  }

  componentDidMount () {
    const { address, encrypted, privateKey } = this.props
    QRCode.toCanvas(this.publicCanvas, address, { version: 5 }, (err) => {
      if (err) console.log(err)
    })
    QRCode.toCanvas(this.encryptedCanvas, encrypted, { version: 5 }, (err) => {
      if (err) console.log(err)
    })
    QRCode.toCanvas(this.privateCanvas, privateKey, { version: 5 }, (err) => {
      if (err) console.log(err)
    })
  }

  handleBack = () => {
    const { resetKey, history } = this.props
    resetKey()
    history.push(ROUTES.HOME)
  }

  handlePrint = () => {
    window.print()
  }

  render() {
    const { address, encrypted, privateKey, passphrase, classes, saveAccount} = this.props;
    const { name } = this.state;
    return (
      <Paper className={classes.root}>
        <div>
          You must save and backup the keys below. If you lose them, you lose access to your assets.
          You can click "Save Key" to save the encrypted key in local application storage.
          Verify that you can log in to the account and see the correct public address before sending anything to the address below!
        </div>
        <div ref={el => (this.componentRef = el)}>
          <Grid item xs={12}>
            <Grid container  justify="center" spacing={Number(3)}>
              <Grid item className={classes.addressBox}>
                <canvas ref={(node) => { this.publicCanvas = node }} />
                <div>Public Address</div>
              </Grid>
              <Grid item className={classes.encryptedKeyBox}>
                <canvas ref={(node) => { this.encryptedCanvas = node }} />
                <div>Encrypted Key</div>
              </Grid>
              <Grid item className={classes.privateKeyBox}>
                <canvas ref={(node) => { this.privateCanvas = node }} />
                <div>Private Key</div>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.key}>
            <div className={classes.keyItem}>
              <span className={classes.keyItemLabel}>Passphrase: </span>
              <span className={classes.keyItemValue}>{passphrase}</span>
              <CopyToClipboard text={passphrase} tooltip='Copy Passphrase' />
            </div>
            <br />
            <div className={classes.keyItem}>
              <span className={classes.keyItemLabel}>Public address: </span>
              <span className={classes.keyItemValue}>{address}</span>
              <CopyToClipboard text={address} tooltip='Copy Public Address' />
            </div>
            <div className={classes.keyItem}>
              <span className={classes.keyItemLabel}>Encrypted key: </span>
              <span className={classes.keyItemValue}>{encrypted}</span>
              <CopyToClipboard text={encrypted} tooltip='Copy Encrypted Key' />
            </div>
            <div className={classes.keyItem}>
              <span className={classes.keyItemLabel}>Private key: </span>
              <span className={classes.keyItemValue}>{privateKey}</span>
              <CopyToClipboard text={privateKey} tooltip='Copy Private Key' />
            </div>
            <br />
            <div className={classes.saveAccount}>
              <TextField
                  autoFocus={true}
                  type="tex"
                  label="Name this account"
                  onChange={(e) => this.setState({name: e.target.value})}
                  value={name}
                />
              <Button  variant="contained" color="primary" onClick={() => saveAccount(name, address, encrypted)}>Save Account</Button>
            </div>
            <br />
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
            <Button variant="contained" color="secondary" onClick={this.handlePrint}>Print</Button>
          </div>
        </div>
      </Paper>
    );
  }
}

DownloadWallet.propTypes = {
  classes: PropTypes.object.isRequired,
  address: PropTypes.string,
  passphrase: PropTypes.string,
  privateKey: PropTypes.string,
  encrypted: PropTypes.string,
  resetKey: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  saveAccount: PropTypes.func.isRequired,
}

export default withStyles(
  styles,
)(DownloadWallet);