import React, { useState } from "react";
import TopButtons from "./components/TopButtons";
import SearchForm from "./components/SearchForm";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("");
  const [apiResult, setApiResult] = useState({});

  const {
    lat,
    lon,
    timezone,
    daily,
    hourly,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
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
          apiResult={apiResult}
          setApiResult={setApiResult}
        />

        {/* {apiResult && <code>{JSON.stringify(apiResult)}</code>} */}

        {/* <TimeAndLocation
          dt={dt}
          lat={lat}
          lon={lon}
          name={name}
          timezone={timezone}
          country={country}
          apiResult={apiResult}
          setApiResult={setApiResult}
        /> */}

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
      </div>
      {/* <Header title="React Weather App" />
      <UilReact />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <p>Type the city you would like to get the weather.</p>
            <div className="col m6 s12">
              <Form city={city} setCity={setCity} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">
              {error && <Error message="No result found for this city." />}
              <Weather apiResult={apiResult} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
