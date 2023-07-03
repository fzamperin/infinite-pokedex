import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bulma/css/bulma.css";
import { configure } from "mobx";

// disable warning about actions from mobx
configure({
  enforceActions: "never",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
