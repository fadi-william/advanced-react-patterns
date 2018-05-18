import { TOGGLE_SWITCH } from "../constants";

export function toggleState(status: boolean) {
  return {
    type: TOGGLE_SWITCH,
    payload: status
  };
}
