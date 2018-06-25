import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  callback: undefined,
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_UNLOCK_DIALOG: {
      return {
        callback: action.callback,
        open: true,
      }
    }
    case ACTION_TYPES.CLOSE_UNLOCK_DIALOG: {
      return {
        open: false,
      }
    }
    default:
      return state
  }
}