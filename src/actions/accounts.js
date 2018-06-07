import { isEmpty } from 'lodash'
import { DEFAULT_WALLET, ACTION_TYPES } from '../common/constants';
import { keys } from 'ichain-js-sdk';
import { showErrorNotification, showInfoNotification, hideNotification } from './notification';


const STORAGE_KEY = 'userWallet'



const getWallet = ()=> {
  let wallet = localStorage.getItem(STORAGE_KEY);
  if (wallet) {
    wallet = JSON.parse(wallet)
  }
  return wallet || DEFAULT_WALLET
}

const walletHasName = (wallet, name) => {
  return wallet.accounts.some(account => account.name === name)
}

const walletHasKey = (wallet, key) => {
  return wallet.accounts.some(account => account.key === key)
}



const setWallet = async (wallet) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wallet))
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
  const dispatchError = (message) => {
    dispatch(showErrorNotification(message))
    return false
  }
  if (isEmpty(name)) {
    return dispatchError('A valid name is required.')
  }

  if (isEmpty(address)) {
    return dispatchError('A valid address is required.')
  }

  if (isEmpty(key)) {
    return dispatchError('A valid key is required.')
  }

  const wallet = getWallet()

  if (walletHasKey(wallet, key)) {
    return dispatchError(`Address '${address}' already exists.`)
  }

  if (walletHasName(wallet, name)) {
    return dispatchError(`Account '${name}' already exists.`)
  }
  const newKey = new keys.Key({ address,  name, key });
  wallet.accounts.push(newKey.export())
  setWallet(wallet)
  dispatch(showInfoNotification("Saved"))
  dispatch({
    type: ACTION_TYPES.SAVE_WALLET_ACCOUNT,
    payload: newKey
  })
  return wallet.accounts
}



export const saveWallet = (wallet) => {
  setWallet(wallet.export())
}

export const setDefaultAccount = (index)=> (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_DEFAULT_ACCOUNT,
    payload: index,
  })
}


export const decrypt = (index, wallet, passphrase)=> (dispatch) => {
  dispatch(showInfoNotification('Generating private key...'))
  return wallet.decrypt(index, passphrase).then(() => {
    dispatch(hideNotification())
    dispatch({
      type: ACTION_TYPES.DECRYPT,
      payload: {
        privateKey: wallet.accounts[index].privateKey,
      }
    })
  });
}