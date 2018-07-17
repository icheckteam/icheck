import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  txs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_TXS_SUCCESS: {
      return {
        ...state,
        txs: action.payload.sort((a, b) => {
          return b.time - a.time;
        }),
      }
    }
    default:
      return state
  }
}