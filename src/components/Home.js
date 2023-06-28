/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome To Fashionable In Any Weather Baby App!</h2>
      <p>This app provides weather information for your baby's outdoor activities.</p>
      <p>
        <Link to="/calendar">View Weather Calander</Link>
      </p>
    </div>
  );
}

export default Home;
