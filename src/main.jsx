import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Helmet>
      <title>Hydraulic Fracturing in British Columbia</title>
      <meta
        name="description"
        content="An educational website to learn React"
      />
      <script
        defer
        data-domain="understandingafracking.site"
        src="https://analytics.markpitblado.me/js/script.js"
      ></script>
    </Helmet>
    <App />
  </BrowserRouter>
);
