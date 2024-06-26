import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/tailwind.css";
import "./styles/styles.min.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Analytics from "./pages/Analytics/Analytics.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <App /> */}
        <Analytics />
      </Router>
    </Provider>
  </React.StrictMode>,
);
