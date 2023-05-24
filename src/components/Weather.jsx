import React from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";

const Weather = ({ apiResult }) => {
  const { name, main, weather } = apiResult;
  if (!name || !main || !weather) return null;
  // Transform Kelvin into Celsius
  if (apiResult) {
    console.log("w: ", apiResult);
  }
  const kelvinToCelsius = (temperature) => {
    const _KELVIN = 273.15;
    return parseFloat(temperature - _KELVIN, 10).toFixed(0);
  };

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name} is: </h2>
        <p className="temperatura">
          {kelvinToCelsius(main.temp)}
          <span> &#x2103; </span>
        </p>
        <img className="icon" src={Icons(weather[0].main)} alt="Icon weather" />
        <p>
          Max. temperature: &nbsp;
          {kelvinToCelsius(main.temp_max)}
          <span> &#x2103; </span>
        </p>
        <p>
          Min. temperature: &nbsp;
          {kelvinToCelsius(main.temp_min)}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  apiResult: PropTypes.object.isRequired,
};

export default Weather;
