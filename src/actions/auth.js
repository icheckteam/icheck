import { getAccount } from "./accounts";
import { ACTION_TYPES } from "../common/constants";
import node from '../node'

export const getKey = (name) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_KEY})
  return node.getKey(name)
    .then(key => {
      dispatch({type: ACTION_TYPES.LOAD_KEY_SUCCESS, key});
      getAccount(key.address)(dispatch)
    })
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_KEY, error}));
}

const testLogin = (data) => {
  return node.updateKey({
    name: data.name,
    new_password: data.password,
    old_password: data.password,
  })
}

export const login = (data) => (dispatch) => {
  return testLogin(data).then(() => {
    getKey(data.name)(dispatch).then(() => {
      dispatch({type: ACTION_TYPES.LOGIN_SUCCESS, payload: data});
    })
  }).catch(error => dispatch({type: ACTION_TYPES.LOGIN_SUCCESS, payload: data}));
}


export const createKey = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_KEY})
  node.storeKey(data)
    .then(asset => dispatch({type: ACTION_TYPES.CREATE_KEY_SUCCESS, asset}))
    .then(() => getKey(data.name)(dispatch))
    .catch(error => dispatch({type:ACTION_TYPES.CREATE_KEY_ERROR, error}));
}

