/** @format */
//Switch to react router 5 to fix app render bug "Switch error"
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calander from "./Calendar";
import WeatherDetails from "./WeatherDetails";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calander" component={Calander} />
        <Route path="/weather/:date" component={WeatherDetails} />
      </Switch>
    </Router>
  );
}

export default App;
