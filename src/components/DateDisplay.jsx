import React from "react";

export const DateDisplay = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return now.toLocaleDateString("en-EN", options);
  };
  return <div className="date-display">{getCurrentDate()}</div>;
};
