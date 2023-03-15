import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [query, setQuery] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  const abortController = new AbortController();

  const getData = async () => {
    try {
      setController(abortController);
      setLoading(true);
      const resquest = await fetch(url, { signal: abortController.signal });
      const response = await resquest.json();
      setData(response);
      setQuery(false);
    } catch (error) {
      setLoading(false);
      setQuery(false);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
      setQuery(false);
    }
  };

  useEffect(() => {
    if (query) {
      getData();
    }
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setData(null);
      setQuery(false);
      setError("Request cancelled");
    }
  };

  const handleRequest = () => {
    return setQuery(true);
  };

  return { data, loading, error, handleRequest, handleCancelRequest };
};
