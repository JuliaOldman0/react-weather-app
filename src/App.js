import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://gleeful-cuchufli-b3c8bf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julia Oldman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/JuliaOldman0/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

