import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_HISTORY_UPDATE_SUCCESS: {
      return {
        ...state,
        history: action.history,
      }
    }
    default:
      return state
  }
}