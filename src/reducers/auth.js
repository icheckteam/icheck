import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  addr: "",
  coins: [],
  config: {
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
    case ACTION_TYPES.LOAD_KEY_SUCCESS:
      return {
        ...state,
        addr: action.key.address,
        pub_key: action.key.pub_key,
        config: {
          ...state.config,
          name: action.key.name,
          account_number: 0,
          sequence: 0,
        }
      }
    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.UNLOCK_SUCCESS:
      return {
        ...state,
        config: {
          ...state.config,
          password: action.payload.password
        }
      }
    case ACTION_TYPES.UPDATE_PROPERTIES_SUCCESS:
    case ACTION_TYPES.TRANSFER_ASSET_SUCCESS:
      return {
        ...state,
        config: {
          ...state.config,
          sequence: state.config.sequence+1,
        }
      }
    case ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        addr: "",
        pub_key: "",
        seed: "",
        config: {
          ...state.config,
          name: "",
          password: "",
          account_number: 0,
          sequence: 0,
        }
      }
    case ACTION_TYPES.LOAD_SEED_SUCCESS:
      return {
        ...state,
        seed: action.seed,
      }
    default:
      return state
  }
}