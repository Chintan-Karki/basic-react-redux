import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReactProvider } from "react-redux";

const store = configureStore();
render(
  <ReactProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReactProvider>,
  document.getElementById("app")
);
