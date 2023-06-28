/** @format */

import React, { useState } from "react";

function Form() {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [clothing, setClothing] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      weather,
      clothing,
    };

    try {
      //Post backend API
      const response = await fetch("http://localhost:3001/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Weather Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="weather">Weather:</label>
        <input type="text" id="weather" value={weather} onChange={(e) => setWeather(e.target.value)} />

        <label htmlFor="clothing">Clothing Recommendation:</label>
        <input type="text" id="clothing" value={clothing} onChange={(e) => setClothing(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
