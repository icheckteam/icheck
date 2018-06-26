
import node from '../node'
import { ACTION_TYPES } from '../common/constants';



export const createAsset = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_ASSET})
  return node.createAsset(data)
    .then(() => {
      if(data.asset.parent) {
        queryHistoryUpdate(data.asset.parent)(dispatch)
        waitForBlockHeight([getAsset(data.asset.parent)])(dispatch)
      }
    })
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_ASSET_SUCCESS, payload}))
}


export const updateProperties = (assetid, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES})
  return node.updateProperties(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.UPDATE_PROPERTIES_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.UPDATE_PROPERTIES_ERROR, payload}));
}


const waitForBlockHeight = (functions) => (dispatch) => {
  setTimeout(() => {
    functions.map(fn => fn(dispatch));
  }, 2000);
}

export const addQuantity = (assetid, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_QUANTITY})
  return node.addQuantity(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_QUANTITY_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_QUANTITY_ERROR, payload}));
}

export const subtractQuantity = (assetid,data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY})
  return node.subtractQuantity(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.SUBTRACT_QUANTITY_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
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
    .then(() => queryHistoryUpdate(data.assets[0])(dispatch))
    .then(() => waitForBlockHeight([getAsset(data.assets[0])])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.TRANSFER_ASSET_ERROR, payload}));
}

export const addMaterials = (assetid, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.ADD_MATERIALS})
  return node.addMaterials(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.ADD_MATERIALS_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.ADD_MATERIALS_ERROR, payload}));
}

export const createReporter = (assetid,data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_REPORTER})
  return node.createReporter(assetid, data)
    .then(payload => dispatch({type: ACTION_TYPES.CREATE_REPORTER_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
    .catch(payload => dispatch({type:ACTION_TYPES.CREATE_REPORTER_ERROR, payload}));
}



export const revokeReporter = (assetid, reporter, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.REVOKE_REPORTER})
  return node.revokeReporter(assetid, reporter, data)
    .then(payload => dispatch({type: ACTION_TYPES.REVOKE_REPORTER_SUCCESS, payload}))
    .then(() => queryHistoryUpdate(assetid)(dispatch))
    .then(() => waitForBlockHeight([getAsset(assetid)])(dispatch))
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
    .then(asset => {
      return node.getAssetChildrens(assetId).then(children => {
        asset.children  = children;
        return asset;
      });
    })
    .then(asset => dispatch({type: ACTION_TYPES.LOAD_ASSET_SUCCESS, asset}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_ASSET_ERROR, error}));
}