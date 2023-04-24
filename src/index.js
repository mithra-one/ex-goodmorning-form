import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import cardbg from "./img/cardbg.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      id="screen"
      style={
        {
          // height: "100%",
          // height: "auto",
          // height: "inherit",
          // padding: "25px",
          // backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${cardbg})`,
          // backgroundSize: "cover",
        }
      }
    >
      <App />
    </div>
  </React.StrictMode>
);
