import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Amy Creasy and is  <a href="https://github.com/amy-creasy/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

