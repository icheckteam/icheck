import { ACTION_TYPES, WALLET, ROUTES } from "../common/constants";
import { showErrorNotification, showInfoNotification, hideNotification } from "./notification";
import { keys } from "ichain-js-sdk";

// Actions

export function newWalletAccount (account) {
  return {
    type: ACTION_TYPES.NEW_WALLET_ACCOUNT,
    payload: {
      address: account.address,
      passphrase: account.passphrase,
      encrypted: account.encrypted,
      privateKey: account.privateKey,
    }
  }
}

export function resetKey () {
  return {
    type: ACTION_TYPES.RESET_WALLET_ACCOUNT
  }
}


export const generateNewWalletAccount = (passphrase, passphrase1, history) => (dispatch) => {
  const dispatchError = (message) => {
    dispatch(showErrorNotification(message))
    return false
  }
  if (passphrase !== passphrase1) {
    return dispatchError('Passphrases do not match')
  }

  if (passphrase.length < WALLET.MIN_PASSPHRASE_LEN) {
    return dispatchError('Please choose a longer passphrase')
  }
  const account = new keys.Key()
  dispatch(showInfoNotification('Generating encoded key...'))
  return account.encrypt(passphrase).then(() => {
    dispatch(hideNotification())
    const { address, encrypted, privateKey } = account
    dispatch(newWalletAccount({
      address,
      passphrase,
      encrypted,
      privateKey,
    }))
    history.push(ROUTES.DOWLOAD_WALLET_ACCOUNT)
  }).catch(() => {
    return dispatchError('An error occured while trying to generate a new wallet')
  });
}