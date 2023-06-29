/** @format */

import React, { useEffect, useState } from "react";
import "./WeatherDetails.css";
import Form from "./Form";

function WeatherDetails() {
  const [weatherData, setWeatherData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fetches backend db file
  useEffect(() => {
    fetch(`http://localhost:3001/weather`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [formSubmitted]);
  const handleFormSubmit = () => {
    setFormSubmitted(!formSubmitted);
  };

  return (
    <div className="weather-details">
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
      <Form onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default WeatherDetails;
