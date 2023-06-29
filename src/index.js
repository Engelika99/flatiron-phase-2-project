import React from 'react';
//Changed from ReactDom.render to createRoot
import { createRoot } from "react-dom/client";
//Moved App.js created by create react app to components
import App from "./components/App";
import "./components/WeatherDetails.css";
import "./components/NavBar.css";
import "./components/home.css";
import "./components/Form.css";
import "./components/Calendar.css";


createRoot(document.getElementById("root")).render(<App />);
