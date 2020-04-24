import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// eslint-disable no-underscore-dangle
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const store = configureStore();

export default store;
