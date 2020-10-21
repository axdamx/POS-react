import { createStore } from "redux";
import cartReducer from "./cartReducers";
import orderReducer from "./orderReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
  orderReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
