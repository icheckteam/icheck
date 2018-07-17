import { ACTION_TYPES } from "../common/constants";

import node from '../node'

export const createClaim = ({issuer, ...data}) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_CLAIM})
  return node.createIdentity(data)
    .then(tx => dispatch({type: ACTION_TYPES.CREATE_CLAIM_SUCCESS, tx}))
    .then(() => setTimeout(() => getIdentitiesByAccount(issuer)(dispatch), 2000))
    .catch(error => dispatch({type:ACTION_TYPES.CREATE_CLAIM_ERROR, error}));
}


export const getIdentitiesByAccount = (address) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_CLAIMS})
  return node.getIdentitiesByAccount(address)
    .then(claims => dispatch({type: ACTION_TYPES.LOAD_CLAIMS_SUCCESS, claims}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_CLAIMS_ERROR, error}));
}