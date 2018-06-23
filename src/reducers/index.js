
import { combineReducers } from 'redux'
import generateWallet from './generateWallet'
import notification from './notification';
import wallet from './wallet';
import assets from './assets';
import auth from './auth';
const rootReducer = combineReducers({
  generateWallet,
  notification,
  wallet,
  assets,
  auth,
})

export default rootReducer