import { ACTION_TYPES } from "../common/constants";
import { showErrorNotification } from "./notification";

// Actions

export function newWalletAccount (account) {
  return {
    type: ACTION_TYPES.NEW_WALLET_ACCOUNT,
    payload: {
      address: account.address,
      passphrase: account.passphrase,
      encrypted: account.encrypted
    }
  }
}

export function resetKey () {
  return {
    type: ACTION_TYPES.RESET_WALLET_ACCOUNT
  }
}


export const generateNewWalletAccount = (passphrase, passphrase1) => (dispatch) => {
  const dispatchError = (message) => {
    dispatch(showErrorNotification(message))
    return false
  }
  dispatchError("error");
}