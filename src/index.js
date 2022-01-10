import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Routes } from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <Routes>
    <Provider store={store}>
      <App />
    </Provider>
  </Routes>,
  document.getElementById("root")
);
