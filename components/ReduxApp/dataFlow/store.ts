import { createStore } from "redux";

// Import the combined reducer.
import reducer from "./rootReducer";

const store = createStore(reducer);

export default store;
