import { ACTION_TYPES } from "../common/constants";

const initialState = {
  address: null,
  passphrase: null,
  encrypted: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NEW_WALLET_ACCOUNT: {
      const { passphrase, address, encrypted } = action.payload
      return {
        ...state,
        address,
        passphrase,
        encrypted
      }
    }
    case ACTION_TYPES.RESET_WALLET_ACCOUNT: {
      return { ...initialState }
    }
    default:
      return state
  }
}