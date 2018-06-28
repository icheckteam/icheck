import { ACTION_TYPES } from "../common/constants";

import node from '../node'

export const createClaim = ({issuer, ...data}) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_CLAIM})
  return node.createClaim(data)
    .then(tx => dispatch({type: ACTION_TYPES.CREATE_CLAIM_SUCCESS, tx}))
    .then(() => setTimeout(() => getAccountClaims(issuer)(dispatch), 2000))
    .catch(error => dispatch({type:ACTION_TYPES.CREATE_CLAIM_ERROR, error}));
}


export const getAccountClaims = (address) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_CLAIMS})
  return node.getAccountClaims(address)
    .then(claims => dispatch({type: ACTION_TYPES.LOAD_CLAIMS_SUCCESS, claims}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_CLAIMS_ERROR, error}));
}