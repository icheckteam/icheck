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
    default:
      return state
  }
}