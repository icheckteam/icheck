import { ACTION_TYPES } from "../common/constants";



export const showUnlockDialogIfNotPassword = (data, cb) => (dispatch) => {
  if (!data.password) {
    return dispatch({
      type: ACTION_TYPES.SHOW_UNLOCK_DIALOG,
      callback: cb,
    })
  }
  cb();
}


export const closeUnlockDialog = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.CLOSE_UNLOCK_DIALOG,
  })
}
