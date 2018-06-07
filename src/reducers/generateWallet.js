import { ACTION_TYPES } from "../common/constants";

const initialState = {
  address: null,
  passphrase: null,
  encrypted: null,
  privateKey: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NEW_WALLET_ACCOUNT: {
      const { passphrase, address, encrypted, privateKey} = action.payload
      return {
        ...state,
        address,
        passphrase,
        encrypted,
        privateKey,
      }
    }
    case ACTION_TYPES.RESET_WALLET_ACCOUNT: {
      return { ...initialState }
    }
    default:
      return state
  }
}