import { ACTION_TYPES } from "../common/constants";


const initialState = {
  wallet: {accounts: []},
  defaultIndex: 0,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_WALLET: {
      return state
    }
    case ACTION_TYPES.SAVE_WALLET_ACCOUNT: {
      state.wallet.addAccount(action.payload);
      return {
        wallet: state.wallet,
      }
    }
    case ACTION_TYPES.SET_DEFAULT_ACCOUNT: {
      return state
    }
    case ACTION_TYPES.DECRYPT: {
      return {
        ...state,
        privateKey: action.payload.privateKey,
      }
    }
    default:
      return state
  }
}