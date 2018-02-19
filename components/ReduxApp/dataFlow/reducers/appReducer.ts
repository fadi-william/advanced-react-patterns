import { combineReducers } from "redux";

import * as reducers from "./";

const appReducer = combineReducers({
  ...reducers,
});

export default appReducer;
