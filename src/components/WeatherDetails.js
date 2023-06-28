/** @format */

import React, { useEffect, useState } from "react";

function WeatherDetails() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch("https://api.oceandrivers.com/static/resources.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data.weather);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Weather Details</h2>
      {weatherData ? (
        <ul>
          {weatherData.map((weather) => (
            <li key={weather.id}>
              <h3>Date: {weather.date}</h3>
              <p>Weather: {weather.weather}</p>
              <p>Clothing: {weather.clothing}</p>
              <img src={weather.image} alt={weather.weather} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherDetails;
