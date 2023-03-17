import { useState, useEffect } from "react";

export const useFetch = (url, searchType, city, apikey, units = "metric") => {
  const [query, setQuery] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortController = new AbortController();
  const requestController = { signal: abortController.signal };

  const cityURL = `${url}${searchType}${city}&appid=${apikey}&units=${units}`;

  const fetchData = async function () {
    try {
      setLoading(true);
      const cityResquest = await fetch(cityURL, requestController);
      const cityResponse = await cityResquest.json();

      const {
        coord: { lat, lon },
      } = cityResponse;

      const forecastRequest = await fetch(
        `${url}onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apikey}&units=${units}`,
        requestController
      );

      const forecastResponse = await forecastRequest.json();
      setData({ ...cityResponse, ...forecastResponse });
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
      setQuery(false);
      setError(false);
    }
  };

  useEffect(() => {
    query && fetchData();
    return () => {
      abortController.abort();
      setData(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const requestData = () => {
    return setQuery(true);
  };

  return { data, loading, error, requestData };
};
