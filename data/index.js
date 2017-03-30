import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import store from "./store";

export default function createStore(preloaded = {}) {
  return reduxCreateStore(store, preloaded, applyMiddleware(thunk));
}
