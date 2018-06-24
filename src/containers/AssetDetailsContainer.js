import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetDetails from './assets/AssetDetails';
import { queryHistoryUpdate, updateProperties, addMaterials, queryAccountAssets, createReporter, revokeReporter } from '../actions/assets'
import { getAsset } from '../reducers/assets'
function mapStateToProps(state) {
  return {
    auth: state.auth,
    assets: state.assets,
    history: state.history.history,
  };
}

class AssetDetailsContainer extends Component {

  componentDidMount() {
    this.props.queryAccountAssets(this.props.auth.addr)
  }

  onAddMaterial = (materials) =>  {
    this.props.addMaterials(this.props.match.params.id, {
      ...this.props.auth.config,
      materials: materials,
    })
  }

  onCreateReporter = (data) =>  {
    this.props.createReporter(this.props.match.params.id, {
      ...this.props.auth.config,
      ...data,
    })
  }

  onRevokeReporter = (reporter) =>  {
    this.props.revokeReporter(this.props.match.params.id, reporter, {
      ...this.props.auth.config,
    })
  }

  render() {
    const { assets, match} = this.props;
    const asset = getAsset(assets, match.params.id)

    return (
      <div>
        {asset ? (
          <div>
            <AssetDetails
              onAddReporter={this.onCreateReporter}
              onRevokeReporter={this.onRevokeReporter}
              onAddMaterial={this.onAddMaterial}
              history={this.props.history}
              asset={asset}
            />
          </div>
        ): "Asset not found"}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {queryHistoryUpdate, queryAccountAssets, addMaterials, createReporter, revokeReporter},
)(AssetDetailsContainer);