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


export const getHistoryUpdateQuantity = state =>
  state.history.filter(item => {
    return ["241AA14E79D880", "8E4151824E2B80"].indexOf(item.tx.value.msg.type) > -1;
  });


export const getHistoryTransfer = state =>
  state.history.filter(item => {
    return ["304553E545EF80"].indexOf(item.tx.value.msg.type) > -1;
  });



export const getHistoryUpdatePropertyName = (state, name) =>
  state.history.filter(tx => {
    return ["06F6C30F9E7CF0"].indexOf(tx.tx.value.msg.type) > -1 && hasPropertyName(tx, name);
  });


function hasPropertyName(tx, name) {
  return tx.tx.value.msg.value.properties.filter(prop => {
    return prop.name === name;
  }).length > 0;
}