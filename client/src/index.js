import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startGetUser } from "./action/User";

const store = configureStore();

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

if (localStorage.getItem("authToken")) {
  store.dispatch(startGetUser());
}

const xcel = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(xcel, document.getElementById("root"));
