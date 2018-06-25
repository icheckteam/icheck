
import { combineReducers } from 'redux'
import generateWallet from './generateWallet'
import notification from './notification';
import wallet from './wallet';
import assets from './assets';
import auth from './auth';
import txs from './txs';
import asset from './asset';
import history from './history';
import unlockDialog from './unlockdialog';
const rootReducer = combineReducers({
  generateWallet,
  notification,
  wallet,
  assets,
  auth,
  txs,
  asset,
  history,
  unlockDialog,
})

export default rootReducer