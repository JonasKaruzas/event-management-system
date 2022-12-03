import React from "react";
import ReactDOM from "react-dom/client";
import { LoginState } from "./Components/LoginState";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginState>
    <App />
  </LoginState>
);
