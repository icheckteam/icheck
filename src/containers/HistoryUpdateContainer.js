import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryHistoryUpdate, updateProperties, transferAsset} from '../actions/assets'
import { getHistoryUpdateQuantity, getHistoryTransfer, getHistoryUpdatePropertyName } from '../reducers/history'
import HistoryUpdateQuantity from './history/HistoryUpdateQuantity';
import HistoryTransfer from './history/HistoryTransfer';
import HistoryUpdateWeight from './history/HistoryUpdateWeight';
import HistoryUpdateLocation from './history/HistoryUpdateLocation';
import { showUnlockDialogIfNotPassword } from '../actions/unlockDialog';
function mapStateToProps(state) {
  return {
    history: state.history,
    authConfig: state.auth.config,
  };
}


class HistoryUpdateContainer extends Component {

  

  componentDidMount() {
    if (this.props.history.history.length === 0){
      this.props.queryHistoryUpdate(this.props.match.params.id);
    }
  }

  handleTransfer = (data) => {
    this.props.showUnlockDialogIfNotPassword(this.props.authConfig, ()=>{
      this.props.transferAsset(data.recipient, {
        ...this.props.authConfig,
        assets: [this.props.match.params.id],
      })
    });
  }

  handleUpdateProperties = (data) => {
    this.props.showUnlockDialogIfNotPassword(this.props.authConfig, ()=>{
      this.props.updateProperties(this.props.match.params.id, {
        ...this.props.authConfig,
        properties: data.properties,
      })
    });
  }

  

  renderHistory() {
    const { match, history} = this.props;
    var txs;
    switch (match.params.name) {
      case 'quantity':
        txs = getHistoryUpdateQuantity(history)
        return (
          <HistoryUpdateQuantity txs={txs} />
        )
      case 'transfer':
        txs = getHistoryTransfer(history)
        return (
          <HistoryTransfer onTransfer={this.handleTransfer} txs={txs} />
        )
      case 'weight':
        txs = getHistoryUpdatePropertyName(history, "weight")
        return (
          <HistoryUpdateWeight onUpdateProperties={this.handleUpdateProperties} txs={txs} />
        )
      case 'location':
        txs = getHistoryUpdatePropertyName(history, "location")
        return (
          <HistoryUpdateLocation onUpdateProperties={this.handleUpdateProperties} txs={txs} />
        )
      default:
      break;
    }
    return null
  }

  render() {
    return (
      <div>
        <h1>History Update - {this.props.match.params.name}</h1>
        {this.renderHistory()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { queryHistoryUpdate, updateProperties, transferAsset, showUnlockDialogIfNotPassword }
)(HistoryUpdateContainer);