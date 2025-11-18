import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/core/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Check if user is logged in (you can enhance this with actual auth logic)
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);