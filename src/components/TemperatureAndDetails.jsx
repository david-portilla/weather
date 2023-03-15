import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const TemperatureAndDetails = ({
  details = "sunny",
  icon = "01d",
  temp = "30",
  feels_like = "28",
  humidity = "42",
  speed = "18",
  sunrise = "5:50am",
  sunset = "6:08pm",
  temp_min = "10",
  temp_max = "30",
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={details}
          className="w-20"
        />
        <p className="text-5xl">{temp}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">{feels_like}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}% </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed}km/h </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <Unicons.UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{sunset}</span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">{temp_max}° </span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min}° </span>
        </p>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
