import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  content: null,
  title: null,
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_NOTIFICATION: {
      return {
        content: action.payload.content,
        title: action.payload.title,
        open: true,
      }
    }
    case ACTION_TYPES.HIDE_NOTIFICATION: {
      return { ...state, open: false }
    }

    case ACTION_TYPES.UNLOCK_ERROR:
      return {
        content: "Your password is incorrect",
        title: "Unlock error",
        open: true,
      }

    default:
      return state
  }
}