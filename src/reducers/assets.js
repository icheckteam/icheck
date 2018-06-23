import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  assets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ASSETS_SUCCESS: {
      return {
        ...state,
        assets: state.assets.concat(action.payload),
      }
    }
    default:
      return state
  }
}