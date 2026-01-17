import React from "react";

export const SearchBar = ({ setLocation, getWeather, location }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter the city..."
      />
      <button
        className="search-btn"
        onClick={() => {
          getWeather(location);
        }}
      >
        Search
      </button>
    </div>
  );
};
