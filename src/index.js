import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ContexProvider } from "./Components/UseContex";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ContexProvider>
    <App />

    </ContexProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
