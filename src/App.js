import React, { useState, useEffect } from "react";
import TopButtons from "./components/TopButtons";
import SearchForm from "./components/SearchForm";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
// import { time } from "console";
import { useFetch } from "./hooks/useFetch";
import { formatWeather } from "./services/utils";

function App() {
  const [city, setCity] = useState("");
  const [apiResult, setApiResult] = useState({});

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SEARCH_TYPE = {
    weather: "weather?q=",
    onecall: "onecall?",
    forecast: "forecast?",
  };

  const { data, loading, error, requestData } = useFetch(
    BASE_URL,
    SEARCH_TYPE.weather,
    city,
    API_KEY
  );

  useEffect(() => {
    if (data) {
      // console.log(data);
      // {cod: 429, message: 'Your account is temporary blocked due to exceeding…per subscription https://openweathermap.org/price'}
      if (data.cod === "404") {
        // setInputError(true);
      } else {
        setApiResult(formatWeather(data));
        setCity("");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const {
    timezone,
    name,
    dt,
    country,
    lat,
    lon,
    daily,
    hourly,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  } = apiResult;

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons></TopButtons>
        <SearchForm
          city={city}
          setCity={setCity}
          setApiResult={setApiResult}
          loading={loading}
          error={error}
          requestData={requestData}
        />

        {!loading && (
          <>
            <TimeAndLocation
              dt={dt}
              timezone={timezone}
              name={name}
              country={country}
              loading={loading}
            />

            {/* <TemperatureAndDetails
              details={details}
              icon={icon}
              temp={temp}
              feels_like={feels_like}
              humidity={humidity}
              speed={speed}
              sunrise={sunrise}
              sunset={sunset}
              temp_min={temp_min}
              temp_max={temp_max}
            />
            <Forecast
              title="HOURLY FORECAST"
              lat={lat}
              lon={lon}
              hourly={hourly}
              setApiResult={setApiResult}
            />
            <Forecast
              title="DAILY FORECAST"
              lat={lat}
              lon={lon}
              daily={daily}
              setApiResult={setApiResult}
            /> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
