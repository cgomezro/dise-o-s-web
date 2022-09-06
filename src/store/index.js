import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/app";
import AssetsReducer from "./reducers/assets";
import BalanceReducer from "./reducers/balance";

const CustomMiddleware = (store) => (next) => (action) => {
  next(action);
};

const rootReducer = combineReducers({
  app: AppReducer,
  assets: AssetsReducer,
  balance: BalanceReducer,
});

let Store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  Store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, CustomMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  Store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, CustomMiddleware))
  );
}

export default Store;
