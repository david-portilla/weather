import React, { useState, useEffect } from "react";
// import Form from "./components/Form";
// import Header from "./components/Header";
// import Weather from "./components/Weather";
// import Error from "./components/Error";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import SearchForm from "./components/SearchForm";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons></TopButtons>
        <SearchForm />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="HOURLY FORECAST" />
        <Forecast title="DAILY FORECAST" />
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
