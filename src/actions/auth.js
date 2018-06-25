import { getAccount, getTxs } from "./accounts";
import { ACTION_TYPES } from "../common/constants";
import node from '../node'
import { queryAccountAssets } from "./assets";

export const getKey = (name) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_KEY})
  return node.getKey(name)
    .then(key => {
      dispatch({type: ACTION_TYPES.LOAD_KEY_SUCCESS, key});
      restore(key)(dispatch)
      localStorage.setItem("auth", JSON.stringify(key))
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
  }).catch(error => dispatch({type: ACTION_TYPES.LOGIN_ERROR, payload: data}));
}


export const unlock = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.UNLOCK});
  return testLogin(data).then(() => {
    dispatch({type: ACTION_TYPES.UNLOCK_SUCCESS, payload: data});
  });
}

export const createKey = (data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.CREATE_KEY})
  return node.storeKey(data)
    .then(asset => dispatch({type: ACTION_TYPES.CREATE_KEY_SUCCESS, asset}))
    .then(() => login(data)(dispatch))
    .catch(error => dispatch({type:ACTION_TYPES.CREATE_KEY_ERROR, error}));
}



export const restoreAccount = () => (dispatch) => {
  var key = localStorage.getItem("auth")
  if (key) {
    key = JSON.parse(key);
    restore(key)(dispatch)
  }
}

const restore = (key) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_KEY_SUCCESS, key})
  getAccount(key.address)(dispatch);
  queryAccountAssets(key.address)(dispatch)
  getTxs(key.address)(dispatch)
}



export const logout = () => (dispatch) => {
  localStorage.removeItem("auth")
  dispatch({type: ACTION_TYPES.LOGOUT_SUCCESS})
}


export const getSeed = () => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_SEED})
  return node.generateSeed()
    .then(seed => dispatch({type: ACTION_TYPES.LOAD_SEED_SUCCESS, seed}))
    .catch(error => dispatch({type:ACTION_TYPES.LOAD_SEED_ERROR, error}));
}


export const getFreeToken = (addr) => (dispatch) => {
  const from = "cosmosaccaddr1cd6lr0nq3n24lu3mmw3mtk46m65huqgkfga5a6"
  return node.queryAccount(from)
  .then(acc => acc.value.BaseAccount.value)
  .then(account => {
    return node.send(addr, {
      chain_id: "ichain",
      gas: 50000,
      account_number: account.account_number,
      sequence: account.sequence,
      name: "freetoken",
      password: "12345678",
      amount: [
        {denom: "tomato", amount: 10}
      ]
    });
  }).then(() => {
    getAccount(addr)(dispatch);
    getTxs(addr)(dispatch);
  });
};
