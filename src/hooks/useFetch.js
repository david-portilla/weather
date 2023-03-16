import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [query, setQuery] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

  const fetchData = async function () {
    try {
      setLoading(true);
      const resquest = await fetch(url, { signal: abortController.signal });
      const response = await resquest.json();
      setData(response);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
      setQuery(false);
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

  const handleRequest = () => {
    return setQuery(true);
  };

  return { data, loading, error, handleRequest };
};
