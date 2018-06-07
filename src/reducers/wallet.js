import { ACTION_TYPES } from "../common/constants";
import { keys } from "ichain-js-sdk";



const initialState = {
  wallet: null,
  defaultIndex: 0,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_WALLET: {
      const wallet = new keys.Wallet(action.payload)
      return {
        wallet: wallet,
        defaultIndex: wallet.accounts.indexOf(wallet.defaultAccount)
      }
    }
    case ACTION_TYPES.SAVE_WALLET_ACCOUNT: {
      state.wallet.addAccount(action.payload);
      return {
        wallet: state.wallet,
      }
    }
    case ACTION_TYPES.SET_DEFAULT_ACCOUNT: {
      state.wallet.setDefault(action.payload);
      return {
        wallet: state.wallet,
        defaultIndex: action.payload,
        privateKey: state.wallet.accounts[action.payload]._privateKey
      }
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