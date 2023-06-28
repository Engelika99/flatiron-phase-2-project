/** @format */
//Switch to react router 5 to fix app render bug "Switch error"
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./Calendar";
import WeatherDetails from "./WeatherDetails";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route path="/weather/:date" component={WeatherDetails} />
      </Switch>
    </Router>
  );
}

export default App;
