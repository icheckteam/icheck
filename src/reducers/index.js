
import { combineReducers } from 'redux'
import notification from './notification';
import wallet from './wallet';
import assets from './assets';
import auth from './auth';
import txs from './txs';
import asset from './asset';
import history from './history';
import unlockDialog from './unlockdialog';
import claims from './claims';
const rootReducer = combineReducers({
  notification,
  wallet,
  assets,
  auth,
  txs,
  asset,
  history,
  unlockDialog,
  claims
})

export default rootReducer