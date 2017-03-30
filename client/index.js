import React from "react";
import DOM from "react-dom";
import { Provider } from "react-redux";
import App from "./src/App.jsx";
import createStore from "../data";
import { requestRepos } from "../data/actions";
import { BrowserRouter } from "react-router-dom";

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);


DOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
