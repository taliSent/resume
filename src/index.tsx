import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeWrapper from "./context/context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

