import { ACTION_TYPES } from "../common/constants";

import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ASSETS_SUCCESS:
      return {
        ...state,
        ...action.payload.reduce((obj, asset) => {
          
          asset.weight = 0;
          asset.location = {
            latitude: 0,
            longitude: 0,
          }
    
          if (asset.properties) {
            for (let prop of asset.properties) {
              if (prop.name === "type") {
                asset.type = prop.string_value;
              }
              if (prop.name === "subtype") {
                asset.subtype = prop.string_value;
              }
              if (prop.name === "weight") {
                asset.weight = prop.number_value;
              }
    
              if (prop.name === "location") {
                asset.location = {
                  latitude: Number(prop.location_value.latitude),
                  longitude: Number(prop.location_value.longitude),
                };
              }
            }
          }
          
          obj[asset.id] = asset
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ASSETS_SUCCESS:
      return action.payload.map(asset => asset.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})


export const getAsset = (state, id) =>
  state.byId[id]

export const getVisibleAssets = state =>
  state.visibleIds.map(id => getAsset(state, id))