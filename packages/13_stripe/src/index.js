import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvidor } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvidor>
      <App />
    </AppProvidor>
  </React.StrictMode>,
  document.getElementById("root")
);
