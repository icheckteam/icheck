import { ACTION_TYPES } from "../common/constants";

export const showErrorNotification = (content) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SHOW_NOTIFICATION,
    payload: {
      title: "Error",
      content: content,
    }
  })
}

export const hideNotification = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.HIDE_NOTIFICATION,
  })
}