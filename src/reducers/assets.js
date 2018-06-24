import { ACTION_TYPES } from "../common/constants";

import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ASSETS_SUCCESS:
      return {
        ...state,
        ...action.payload.reduce((obj, asset) => {
          

          
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