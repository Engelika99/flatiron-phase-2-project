/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Calendar() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch("http://localhost:3001/weather");
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weather</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>{day.weather}</td>
              <td>
                <Link to={`/weather/${day.date}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
