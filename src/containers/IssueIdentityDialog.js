import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
const templates = {
  realname_authentication: {
    id: {
      type: "string",
      doc: "Unique number of certificate"
    },
    name: {
      type: "string",
      doc: "The full name of certificate owner",
    }
  },
  company_authentication: {
    id: {
      type: "string",
      doc: "Unique number of certificate"
    },
    name: {
      type: "string",
      doc: "The full name of certificate company",
    },
    email: {
      type: "string",
      doc: "The email of certificate company",
    },
    website: {
      type: "string",
      doc: "The website of certificate company",
    },
    taxcode: {
      type: "string",
      doc: "The taxcode of certificate company",
    }
  },
  vietgap_authentication: {
    id: {
      type: "string",
      doc: "Unique number of certificate"
    },
    name: {
      type: "string",
      doc: "The full name of certificate owner",
    }
  }
}

class IssueIdentityDialog extends React.Component {
  state = {
    claim_id: "",
    context: "",
    content: {},
    expires: "",
    create_time: "",
    recipient: "",
  }

  handleSubmit  = () => {
    this.props.onSubmit({
      claim_id: this.state.claim_id,
      context: this.state.context,
      content: this.state.content,
      recipient: this.state.recipient,
      expires: moment(this.state.expires).unix(),
    });
    this.props.onClose();
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  renderTemplate() {
    const template = templates[this.state.context];
    if (template) {
      return (
        <div>
          {Object.keys(template).map(key => {
            return (
              <TextField
                key={key}
                autoFocus
                margin="dense"
                id={key}
                label={template[key].doc}
                value={this.state.context[key]}
                onChange={(e) => {
                  this.setState({
                    content: {
                      ...this.state.content,
                      [key]: e.target.value,
                    }
                  });
                }}
                fullWidth
              />
            )
          })}
        </div>
      )
    }
  }


  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Issue Claim"}</DialogTitle>
        <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="claim_id"
              label="Claim ID"
              value={this.state.claim_id}
              onChange={this.handleChange('claim_id')}
              fullWidth
            />
          
          <TextField
            autoFocus
            margin="dense"
            id="context"
            label="Context"
            value={this.state.context}
            onChange={this.handleChange('context')}
            fullWidth
          />
          <p><em>eg: realname_authentication, company_authentication, vietgap_authentication</em></p>
          <TextField
            autoFocus
            margin="dense"
            id="recipient"
            label="Owner"
            value={this.state.recipient}
            onChange={this.handleChange('recipient')}
            fullWidth
          />
          {this.renderTemplate()}
          <TextField
            autoFocus
            margin="dense"
            id="expires"
            label="Expires"
            type="date"
            value={this.state.expires}
            onChange={this.handleChange('expires')}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default IssueIdentityDialog;