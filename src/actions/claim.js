import { ACTION_TYPES } from "../common/constants";

import node from '../node'

export const createClaim = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_CLAIM})
  return node.createClaim(data)
    .then(tx => dispatch({type: ACTION_TYPES.CREATE_CLAIM_SUCCESS, tx}))
    .catch(error => dispatch({type:ACTION_TYPES.CREATE_CLAIM_ERROR, error}));
}


export const getAccountClaims = (address) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_CLAIMS})
  return node.getAccountIdentities(address)
    .then(tx => dispatch({type: ACTION_TYPES.LOAD_CLAIMS_SUCCESS, tx}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_CLAIMS_ERROR, error}));
}