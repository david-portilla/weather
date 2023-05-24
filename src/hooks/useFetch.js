import { useState, useEffect } from 'react';

export const useFetch = (
	url,
	searchType,
	city,
	setCity,
	apikey,
	units = 'metric'
) => {
	const [query, setQuery] = useState(false);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const abortController = new AbortController();
	const requestController = { signal: abortController.signal };

	const URL = `${url}${searchType}${city}&appid=${apikey}&units=${units}`;

	const fetchData = async function () {
		try {
			setLoading(true);
			const request = await fetch(URL, requestController);
			const response = await request.json();

			if (response.cod === '404') {
				setError(true);
				setData(response);
				setCity('');
				return;
			}

			const {
				coord: { lat, lon },
			} = response;

			const forecastRequest = await fetch(
				`${url}onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apikey}&units=${units}`,
				requestController
			);

			const forecastResponse = await forecastRequest.json();
			setError(false);
			setData({ ...response, ...forecastResponse });
		} catch (error) {
			setError(true);
			setData({ cod: 'Fetch error', message: error.message });
			throw error;
		} finally {
			setLoading(false);
			setQuery(false);
		}
	};

	useEffect(() => {
		query === true && fetchData();
		return () => {
			abortController.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const requestData = () => {
		return setQuery(true);
	};

	return { data, setData, loading, error, setError, requestData };
};
