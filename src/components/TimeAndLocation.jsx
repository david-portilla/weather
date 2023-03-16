import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { formatToLocalTime } from "../services/utils";
import { DateTime } from "luxon";
import { formatForecastWeather } from "../services/utils";

const TimeAndLocation = ({
  dt,
  lat,
  lon,
  timezone,
  name = "Santiago de Cali",
  country = "CO",
  apiResult,
  setApiResult,
}) => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  const now = DateTime.now();
  const { data, loading, handleRequest, handleCancelRequest } = useFetch(URL);

  useEffect(() => {
    if (lat && lon) {
      handleRequest();
      data && setApiResult({ ...apiResult, ...formatForecastWeather(data) });
    }
    return () => handleCancelRequest;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon, data]);

  return (
    <>
      <div className="flex items-center justify-center my-6">
        {now && dt === undefined && !loading && (
          <p className="text-white text-xl font-extralight">
            {now
              .toFormat("cccc, dd LLL yyyy' | Local time: 'hh:mm a")
              .toString()}
          </p>
        )}

        {timezone && !loading && (
          <p className="text-white text-xl font-extralight">
            {formatToLocalTime(dt, timezone)}
          </p>
        )}
      </div>

      {!loading && (
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-medium">
            {name}, {country}
          </p>
        </div>
      )}
    </>
  );
};

export default TimeAndLocation;
