import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { UnitSelect } from "./components/UnitSelect";
import { DateDisplay } from "./components/DateDisplay";
import { WeatherCard } from "./components/WeatherCard";
import { Footer } from "./components/Footer";

function App() {
  const [location, setLocation] = useState("Minsk");
  const [tempUnit, setTempUnit] = useState("C");
  const [weatherData, setWeatherData] = useState({});

  const toCelsius = (temp) => {
    return Math.round(((temp - 32) * 5) / 9);
  };

  async function getWeather(city) {
    try {
      const appId = "21571e236ae1e7500c50aabca16ad13c";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${appId}`,
      );
      if (!response.ok) {
        throw new error("something went wrong with the server response");
      }
      const data = await response.json();
      setWeatherData({
        city: data.city.name,
        temp: Math.round(data.list[0].main.temp),
        feelsLike: Math.round(data.list[0].main.feels_like),
        humidity: data.list[0].main.humidity,
        maxTemp: Math.round(data.list[0].main.temp_max),
        windSpeed: data.list[0].wind.speed,
        condition: data.list[0].weather[0].main,
        icon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="weather-app">
      <header>
        <h1>Weather App</h1>
      </header>

      <main>
        <div className="search-section">
          <SearchBar
            setLocation={setLocation}
            getWeather={getWeather}
            location={location}
          />

          <UnitSelect tempUnit={tempUnit} setTempUnit={setTempUnit} />
        </div>

        <DateDisplay />
        <WeatherCard
          toCelsius={toCelsius}
          tempUnit={tempUnit}
          weatherData={weatherData}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
