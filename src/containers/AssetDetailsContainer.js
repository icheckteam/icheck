import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetDetails from './assets/AssetDetails';
import { getAsset, queryHistoryUpdate, updateProperties } from '../actions/assets'
function mapStateToProps(state) {
  return {
    asset: state.asset.asset,
    history: state.history.history,
  };
}

class AssetDetailsContainer extends Component {

  componentDidMount() {
    this.props.getAsset(this.props.match.params.id)
    this.props.queryHistoryUpdate(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        {this.props.asset ? (
          <div>
            <AssetDetails
              history={this.props.history}
              asset={this.props.asset}
            />
          </div>
        ): "Asset not found"}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getAsset, queryHistoryUpdate, updateProperties},
)(AssetDetailsContainer);