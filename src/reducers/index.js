
import { combineReducers } from 'redux'
import generateWallet from './generateWallet'
import notification from './notification';
const rootReducer = combineReducers({
  generateWallet,
  notification
})

export default rootReducer