import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Assets from './assets/Assets';
import { ROUTES } from '../common/constants';
import { queryAccountAssets } from '../actions/assets';
import { getVisibleAssets } from '../reducers/assets'




function mapStateToProps(state) {
  return {
    assets: getVisibleAssets(state.assets),
    addr: state.auth.addr
  };
}

class AssetsContainer extends Component {

  componentDidMount() {
    this.props.queryAccountAssets(this.props.addr)
  }

  render() {
    const { assets } = this.props
    return (
      <div>
        <h1>List all assets</h1>
        <div>
          <Button component={Link} variant="raised" color="primary" to={ROUTES.CREATE_ASSET}>
            Add new asset
          </Button>
        </div>
        <Assets items={assets}/>
      </div>  
    );  
  } 
}

export default connect(
  mapStateToProps, 
  { queryAccountAssets }
)(AssetsContainer);