import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  claims: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_CLAIMS_SUCCESS: {
      return {
        ...state,
        claims: action.claims,
      }
    }
    default:
      return state
  }
}