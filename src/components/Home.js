/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome To Fashionable In Any Weather!</h2>
      <p>
        This app provides weather information in order to plan your fashionable outfits for you or your child in
        advance.
      </p>
      <p>
        <Link to="/calendar">View Weather Calendar</Link>
      </p>
    </div>
  );
}

export default Home;
