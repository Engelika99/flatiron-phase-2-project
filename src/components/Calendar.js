/** @format */

import React, { useState, useEffect } from "react";
import { WiRain, WiSnow, WiCloudy, WiThermometer, WiDaySunny } from "react-icons/wi";
import "./Calendar.css";

function Calendar({ onFormSubmit }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState([]);

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const getMonthName = (date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,cloudcover,cloudcover_high&daily=precipitation_hours&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=16&models=best_match`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getWeatherIcon = (precipitationProbability) => {
    if (precipitationProbability >= 70) {
      return <WiRain />;
    } else if (precipitationProbability >= 40) {
      return <WiSnow />;
    } else if (precipitationProbability > 0) {
      return <WiCloudy />;
    } else {
      return <WiDaySunny />;
    }
  };

  useEffect(() => {
    const renderCalendar = async () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const startingDay = firstDayOfMonth.getDay();
      const numDays = new Date(year, month + 1, 0).getDate();

      const calendarRows = [];
      let calendarCells = [];

      for (let i = 0; i < startingDay; i++) {
        calendarCells.push(<td key={`empty-${i}`} className="empty-cell" />);
      }

      for (let day = 1; day <= numDays; day++) {
        const weather = await fetchWeatherData(40.7143, -74.006); // New York coordinates

        // Check if the weather data is available and contains temperature information
        if (weather && weather.hourly && weather.hourly.temperature_2m) {
          // Extract the temperature and precipitation probability for the current day
          const hourlyData = weather.hourly;
          const startIndex = day - 1;
          const endIndex = day * 24;
          const temperatureData = hourlyData.temperature_2m.slice(startIndex, endIndex);
          const precipitationProbabilityData = hourlyData.precipitation_probability.slice(startIndex, endIndex);

          // Check if temperature data is available
          if (temperatureData && temperatureData.length > 0) {
            // Calculate the average temperature and maximum precipitation probability for the day
            const averageTemperatureFahrenheit =
              temperatureData.reduce((sum, temperature) => sum + temperature, 0) / 24;
            const maxPrecipitationProbability = Math.max(...precipitationProbabilityData);

            calendarCells.push(
              <td key={day} className="date-cell">
                <div className="date">{day}</div>
                <div className="temperature">
                  <WiThermometer /> {averageTemperatureFahrenheit.toFixed(1)}°F
                </div>
                <div className="precipitation-probability">
                  {maxPrecipitationProbability}% {getWeatherIcon(maxPrecipitationProbability)}
                </div>
              </td>
            );
          } else {
            // Temperature data is not available
            // Handle the case when temperature data is missing
            calendarCells.push(
              <td key={day} className="date-cell">
                <div className="date">{day}</div>
                <div className="temperature">N/A</div>
                <div className="precipitation-probability">N/A {getWeatherIcon(0)}</div>
              </td>
            );
          }
        } else {
          // Weather data is not available
          // Handle the case when weather data is missing
          calendarCells.push(
            <td key={day} className="date-cell">
              <div className="date">{day}</div>
              <div className="temperature">N/A</div>
              <div className="precipitation-probability">N/A {getWeatherIcon(0)}</div>
            </td>
          );
        }

        if (calendarCells.length === 7) {
          calendarRows.push(<tr key={`row-${calendarRows.length}`}>{calendarCells}</tr>);
          calendarCells = [];
        }
      }

      if (calendarCells.length > 0) {
        while (calendarCells.length < 7) {
          calendarCells.push(<td key={`empty-${calendarCells.length}`} className="empty-cell" />);
        }
        calendarRows.push(<tr key={`row-${calendarRows.length}`}>{calendarCells}</tr>);
      }

      setWeatherData(calendarRows);
    };

    renderCalendar();
  }, [currentDate, onFormSubmit]);

  return (
    <div className="calendar">
      <div className="header">
        <button className="prev-month" onClick={handlePrevMonth}>
          &lt;
        </button>
        <div className="month">{getMonthName(currentDate)}</div>
        <button className="next-month" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{weatherData}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
