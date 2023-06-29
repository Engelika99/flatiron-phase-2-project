import React from 'react';
//Changed from ReactDom.render to createRoot
import { createRoot } from "react-dom/client";
//Moved App.js created by create react app to components
import App from "./components/App";
import "./components/weather-details.css";
import "./components/navbar.css";
import "./components/home.css";
import "./components/form.css";
import "./components/calendar.css";


createRoot(document.getElementById("root")).render(<App />);
