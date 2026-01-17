import React from "react";

export const WeatherCard = ({ toCelsius, tempUnit, weatherData }) => {
  return (
    <>
      <div className="main-info">
        <h2 className="city-name">{weatherData.city}</h2>
        <div className="temp-display">
          <span className="temp-number">
            {tempUnit === "C" ? toCelsius(weatherData.temp) : weatherData.temp}
          </span>
          <span className="temp-unit">°{tempUnit}</span>
        </div>
        <div className="weather-condition">
          <img src={weatherData.icon} alt="icon" />
          <span className="condition-text">{weatherData.condition}</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-card">
          <h3>Feels Like</h3>
          <p className="detail-value">
            {tempUnit === "C"
              ? toCelsius(weatherData.feelsLike)
              : weatherData.feelsLike}
            °{tempUnit}
          </p>
        </div>

        <div className="detail-card">
          <h3>Humidity</h3>
          <p className="detail-value">{weatherData.humidity}%</p>
        </div>

        <div className="detail-card">
          <h3>Max Temp</h3>
          <p className="detail-value">
            {tempUnit === "C"
              ? toCelsius(weatherData.maxTemp)
              : weatherData.maxTemp}
            °{tempUnit}
          </p>
        </div>

        <div className="detail-card">
          <h3>Wind Speed</h3>
          <p className="detail-value">{weatherData.windSpeed} m/s</p>
        </div>
      </div>
    </>
  );
};
