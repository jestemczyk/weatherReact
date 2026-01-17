import React from "react";

export const UnitSelect = ({ tempUnit, setTempUnit }) => {
  return (
    <div className="unit-toggle">
      <button
        className={tempUnit === "C" ? "active" : ""}
        onClick={() => setTempUnit("C")}
      >
        °C
      </button>
      <button
        className={tempUnit === "F" ? "active" : ""}
        onClick={() => setTempUnit("F")}
      >
        °F
      </button>
    </div>
  );
};
