import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvidor } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvidor>
      <App />
    </AppProvidor>
  </React.StrictMode>,
  document.getElementById("root")
);
