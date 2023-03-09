import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Img text"
          className="w-20"
        />
        <p className="text-5xl">30°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">32</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">45% </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <Unicons.UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">6:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">7:35 AM</span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">45° </span>
        </p>
        <p className="font-light">|</p>

        <Unicons.UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">40° </span>
        </p>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
