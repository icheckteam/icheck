
import { combineReducers } from 'redux'
import generateWallet from './generateWallet'
import notification from './notification';
import wallet from './wallet';
const rootReducer = combineReducers({
  generateWallet,
  notification,
  wallet,
})

export default rootReducer