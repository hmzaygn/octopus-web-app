import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { OctModeProvider } from "./contexts/OctModeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OctModeProvider>
      <App />
    </OctModeProvider>
  </React.StrictMode>
);
