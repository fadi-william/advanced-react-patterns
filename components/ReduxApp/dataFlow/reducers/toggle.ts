import { Map } from "immutable";
import { CLEAR_STATE, TOGGLE_SWITCH } from "../constants";

// The initial state of the toggle.
const initMap = Map({
    isToggleChecked: false,
});

export function toggle(state = initMap.toJS(), action) {
  switch (action.type) {
    case CLEAR_STATE:
      return initMap.toJS();
    case TOGGLE_SWITCH:
      return Map(state).withMutations((map) => {
        map.set("isToggleChecked", action.payload);
      }).toJS();
    default:
      if (state instanceof Map) {
        return state.toJS();
      }
      return state;
  }
}
