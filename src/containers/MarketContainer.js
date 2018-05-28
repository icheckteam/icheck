import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class MarketContainer extends Component {
  render() {
    return (
      <div>
        MarketContainer
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MarketContainer);