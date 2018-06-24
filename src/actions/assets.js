
import node from '../node'
import { ACTION_TYPES } from '../common/constants';



export const createAsset = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_ASSET})
  node.createAsset(data)
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_ASSET_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.CREATE_ASSET_ERROR, payload}));
}


export const updateProperties = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES})
  node.updateProperties(data)
    .then(payload => dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.UPDATE_PROPERTIES_ERROR, payload}));
}

export const addQuantity = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_QUANTITY})
  node.addQuantity(data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_QUANTITY_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_QUANTITY_ERROR, payload}));
}

export const subtractQuantity = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY})
  node.subtractQuantity(data)
    .then(payload => dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.SUBTRACT_QUANTITY_ERROR, payload}));
}

export const queryHistoryUpdate = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_HISTORY_UPDATE})
  node.queryHistoryUpdate(data)
    .then(history => dispatch({type: ACTION_TYPES.LOAD_HISTORY_UPDATE_SUCCESS, history}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_HISTORY_UPDATE_ERROR, error}));
}


export const transferAsset = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.TRANSFER_ASSET})
  node.transferAsset(data)
    .then(payload => dispatch({type: ACTION_TYPES.TRANSFER_ASSET_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.TRANSFER_ASSET_ERROR, payload}));
}

export const addMaterials = (assetId, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_MATERIALS})
  node.addMaterials(assetId, data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_MATERIALS_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_MATERIALS_ERROR, payload}));
}

export const createReporter = (assetid,data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_REPORTER})
  node.createReporter(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_REPORTER_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.CREATE_REPORTER_ERROR, payload}));
}



export const revokeReporter = (assetid, reporter, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.REVOKE_REPORTER})
  node.revokeReporter(assetid, reporter, data)
    .then(payload => dispatch({type: ACTION_TYPES.REVOKE_REPORTER_SUCCESS, payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.REVOKE_REPORTER_ERROR, payload}));
}


export const queryAccountAssets = (account) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_ASSETS})
  node.getAccountAssets(account)
    .then(payload => dispatch({type: ACTION_TYPES.LOAD_ASSETS_SUCCESS, payload: payload}))
    .catch(payload => dispatch({type:ACTION_TYPES.LOAD_ASSET_ERROR, payload}));
}


export const getAsset = (assetId) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_ASSET})
  node.getAsset(assetId)
    .then(asset => dispatch({type: ACTION_TYPES.LOAD_ASSET_SUCCESS, asset}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_ASSET_ERROR, error}));
}