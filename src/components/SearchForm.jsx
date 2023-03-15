import React, { useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useFetch } from "../hooks/useFetch";
import { formatCurrentWeather } from "../services/utils";

const SearchForm = ({ city, setCity, setApiResult }) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => setCity(e.target.value);
  const { data, loading, error, handleRequest, handleCancelRequest } =
    useFetch(URL);

  const handleSubmit = (e) => {
    console.log("submit city:", city);
    e.preventDefault();
    if (city.trim() === "") {
      setInputError(true);
      setApiResult({});
      return;
    }

    setInputError(false);
    handleRequest();
  };

  useEffect(() => {
    if (data) {
      if (data.cod === "404") {
        setInputError(true);
      }
      if (data.cod !== "404") {
        console.log("data: ", formatCurrentWeather(data));
        setApiResult(formatCurrentWeather(data));
      }
      setCity("");
    }

    return () => handleCancelRequest;
  }, [data]);

  return (
    <>
      <form
        className="flex flex-row justify-center my-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
            autoFocus
            autoComplete="off"
            placeholder="Search for city...."
            className="bg-white text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          />
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
          >
            <Unicons.UilSearch
              size={25}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          </button>
          <button>
            <Unicons.UilLocationPoint
              size={25}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          </button>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
          >
            °F
          </button>
        </div>
      </form>

      <div className="input-field col s12">
        {loading && <h2>... loading</h2>}

        {/* TODO: create error component */}
        {inputError ? (
          <p className="red darken-4 error">The city field is required</p>
        ) : null}
        {inputError ? (
          <p className="red darken-4 error">City not found</p>
        ) : null}
        {error ? (
          <p className="red darken-4 error">Error from useFetch</p>
        ) : null}
      </div>
    </>
  );
};

export default SearchForm;
