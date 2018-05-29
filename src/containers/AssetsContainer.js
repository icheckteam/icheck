import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Assets from './assets/Assets';
import { ROUTES } from '../common/constants';




function mapStateToProps(state) {
  return {

  };
}

class AssetsContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Button component={Link} variant="raised" color="primary" to={ROUTES.CREATE_ASSET}>
            Add new asset
          </Button>
        </div>
        <Assets/>
      </div>  
    );  
  } 
}

export default connect(
  mapStateToProps, 
)(AssetsContainer);