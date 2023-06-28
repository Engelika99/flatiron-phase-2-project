/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/weather/2023-06-22">Weather Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
