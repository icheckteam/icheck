import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetDetails from './assets/AssetDetails';
import { queryHistoryUpdate, addMaterials, queryAccountAssets, createReporter, revokeReporter, getAsset} from '../actions/assets'
function mapStateToProps(state) {
  return {
    auth: state.auth,
    asset: state.asset.asset,
    history: state.history.history,
  };
}

class AssetDetailsContainer extends Component {

  componentDidMount() {
    this.props.getAsset(this.props.match.params.id)
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
    const { asset} = this.props;

    // update asset
    if (asset && asset.id !== this.props.match.params.id) {
      this.props.getAsset(this.props.match.params.id)
    }

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
  {queryHistoryUpdate, queryAccountAssets, addMaterials, createReporter, revokeReporter, getAsset},
)(AssetDetailsContainer);