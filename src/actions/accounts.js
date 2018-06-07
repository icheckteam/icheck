import { isEmpty } from 'lodash'
import { DEFAULT_WALLET } from '../common/constants';
import { keys } from 'ichain-js-sdk';
import { showErrorNotification, showInfoNotification } from './notification';


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
  wallet.accounts.push(new keys.Key({ address,  name, key }).export())
  setWallet(wallet)
  dispatch(showInfoNotification("Saved"))
  return wallet.accounts
}