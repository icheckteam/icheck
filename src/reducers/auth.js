import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  addr: "cosmosaccaddr189nvnm272dsh9tx6z8gjlpl2lxmy8x4jft6yjp",
  coins: [],
  config: {
    name: "a2",
    password: "12345678",
    chain_id: "ichain",
    gas: 50000,
    account_number: 1,
    sequence: 0,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ACCOUNT_SUCCESS:
      return {
        ...state,
        coins: action.payload.coins,
        config: {
          ...state.config,
          account_number: action.payload.account_number,
          sequence: action.payload.sequence,
        }
      }
    default:
      return state
  }
}