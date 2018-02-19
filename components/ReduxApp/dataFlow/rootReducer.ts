import { CLEAR_STATE } from "./constants";

import appReducer from "./reducers/appReducer";

const rootReducer = (state, action) => {
  let passedState = state;
  if (action.type === CLEAR_STATE) {
    passedState = {};
  }
  return appReducer(passedState, action);
};

export default rootReducer;
