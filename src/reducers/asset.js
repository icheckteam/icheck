import { ACTION_TYPES } from "../common/constants";

const initialState =  {
  asset: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_ASSET_SUCCESS: {
      var asset = action.asset;
      asset.weight = 0;
      asset.location = {
        latitude: 0,
        longitude: 0,
      }

      if (asset.properties) {
        for (let prop of asset.properties) {
          if (prop.name == "type") {
            asset.type = prop.string_value;
          }
          if (prop.name == "subtype") {
            asset.subtype = prop.string_value;
          }
          if (prop.name == "weight") {
            asset.weight = prop.number_value;
          }

          if (prop.name == "location") {
            asset.location = {
              latitude: Number(prop.location_value.latitude),
              longitude: Number(prop.location_value.longitude),
            };
          }
        }
      }

      return {
        ...state,
        asset,
      }
    }
    default:
      return state
  }
}