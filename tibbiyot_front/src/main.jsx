import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./locales/i18n/i18n.jsx";
// import { LoginProvider } from "./context/AuthLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <LoginProvider>
  <App />
  // </LoginProvider>
  // </React.StrictMode>
);
