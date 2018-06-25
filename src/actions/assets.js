
import node from '../node'
import { ACTION_TYPES } from '../common/constants';



export const createAsset = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_ASSET})
  return node.createAsset(data)
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_ASSET_SUCCESS, payload}))
}


export const updateProperties = (assetid, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES})
  return node.updateProperties(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES_SUCCESS, payload}))
    .then(() => getAsset(assetid)(dispatch))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.UPDATE_PROPERTIES_ERROR, payload}));
}

export const addQuantity = (assetid, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_QUANTITY})
  return node.addQuantity(data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_QUANTITY_SUCCESS, payload}))
    .then(() => getAsset(assetid)(dispatch))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_QUANTITY_ERROR, payload}));
}

export const subtractQuantity = (assetid,data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY})
  return node.subtractQuantity(data)
    .then(payload => dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY_SUCCESS, payload}))
    .then(() => getAsset(assetid)(dispatch))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.SUBTRACT_QUANTITY_ERROR, payload}));
}

export const queryHistoryUpdate = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_HISTORY_UPDATE})
  return node.queryHistoryUpdate(data)
    .then(history => dispatch({type: ACTION_TYPES.LOAD_HISTORY_UPDATE_SUCCESS, history}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_HISTORY_UPDATE_ERROR, error}));
}


export const transferAsset = (recipient, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.TRANSFER_ASSET})
  return node.transferAsset(recipient, data)
    .then(payload => dispatch({type: ACTION_TYPES.TRANSFER_ASSET_SUCCESS, payload}))
    .then(() => getAsset(data.assets[0])(dispatch))
    .then(() => queryHistoryUpdate(data.assets[0])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.TRANSFER_ASSET_ERROR, payload}));
}

export const addMaterials = (assetId, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_MATERIALS})
  return node.addMaterials(assetId, data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_MATERIALS_SUCCESS, payload}))
    .then(() => getAsset(assetId)(dispatch))
    .then(() => queryHistoryUpdate(assetId)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_MATERIALS_ERROR, payload}));
}

export const createReporter = (assetid,data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_REPORTER})
  return node.createReporter(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_REPORTER_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => getAsset(assetid)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.CREATE_REPORTER_ERROR, payload}));
}



export const revokeReporter = (assetid, reporter, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.REVOKE_REPORTER})
  return node.revokeReporter(assetid, reporter, data)
    .then(payload => dispatch({type: ACTION_TYPES.REVOKE_REPORTER_SUCCESS, payload}))
    .then(() => getAsset(assetid)(dispatch))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.REVOKE_REPORTER_ERROR, payload}));
}


export const queryAccountAssets = (account) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_ASSETS})
  return node.getAccountAssets(account)
    .then(payload => dispatch({type: ACTION_TYPES.LOAD_ASSETS_SUCCESS, payload: payload}))
    
    .catch(payload => dispatch({type:ACTION_TYPES.LOAD_ASSET_ERROR, payload}));
}


export const getAsset = (assetId) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_ASSET})
  return node.getAsset(assetId)
    .then(asset => dispatch({type: ACTION_TYPES.LOAD_ASSET_SUCCESS, asset}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_ASSET_ERROR, error}));
}