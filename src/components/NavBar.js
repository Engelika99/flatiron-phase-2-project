/** @format */

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Calendar</Link>
        </li>
        <li>
          <Link to="/weather/2023-06-22">Weather Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
