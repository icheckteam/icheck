import { ACTION_TYPES} from "../common/constants";

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


export const generateNewWalletAccount = () => (dispatch) => {
}