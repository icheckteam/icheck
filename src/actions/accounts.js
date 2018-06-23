
import { DEFAULT_WALLET, ACTION_TYPES } from '../common/constants';
import node from '../node'

const STORAGE_KEY = 'userWallet'



const getWallet = ()=> {
  let wallet = localStorage.getItem(STORAGE_KEY);
  if (wallet) {
    wallet = JSON.parse(wallet)
  }
  return wallet || DEFAULT_WALLET
}




export const updateAccounts = (accounts) => {
  const wallet = getWallet()
  const newWallet = { ...wallet, accounts }
  localStorage.setItem(STORAGE_KEY, newWallet)
  return accounts
}


export const loadWallet = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOAD_WALLET,
    payload: getWallet(),
  })
}


export const saveAccount = (name, address, key) => (dispatch) => {
}



export const saveWallet = (wallet) => {
}

export const setDefaultAccount = (index)=> (dispatch) => {
}


export const decrypt = (index, wallet, passphrase)=> (dispatch) => {
}

export const handleLogin = (key, password) => (dispatch) => {
}


export const getAccount = (address) => (dispatch) => {
  dispatch({type: ACTION_TYPES.LOAD_ACCOUNT})
  node.queryAccount(address).then(acc => acc.value.BaseAccount.value)
    .then(payload => dispatch({type: ACTION_TYPES.LOAD_ACCOUNT_SUCCESS, payload}))
    .catch(payload => dispatch({type: ACTION_TYPES.LOAD_ACCOUNT_ERROR, payload}))
};



export const send = (recipient, data) => (dispatch) => {
  dispatch({type: ACTION_TYPES.SEND})
  node.send(recipient, data)
    .then(payload => dispatch({type: ACTION_TYPES.SEND_SUCCESS, payload}))
    .catch(payload => dispatch({type: ACTION_TYPES.SEND_ERROR, payload}))
};