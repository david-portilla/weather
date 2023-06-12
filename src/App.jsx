import React, { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import SearchForm from './components/SearchForm';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { useFetch } from './hooks/useFetch';
import { formatWeather } from './services/utils';
import Error from './components/Error';

function App() {
	const [city, setCity] = useState('');
	const [apiResult, setApiResult] = useState({});

	const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
	const API_KEY = process.env.REACT_APP_API_KEY;
	const SEARCH_TYPE = {
		weather: 'weather?q=',
		onecall: 'onecall?',
		forecast: 'forecast?',
	};

	const { data, setData, loading, error, setError, requestData } = useFetch(
		BASE_URL,
		SEARCH_TYPE.weather,
		city,
		setCity,
		API_KEY
	);

	useEffect(() => {
		// console.log(data);
		if (data && data.cod === 200) {
			setApiResult(formatWeather(data));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const {
		timezone,
		name,
		dt,
		country,
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
			<div className='mx-auto max-w-screen-md my-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
<<<<<<< HEAD
				<TopButtons setCity={setCity} requestData={requestData} />
=======
				<TopButtons
					setCity={setCity}
					loading={loading}
					requestData={requestData}
				/>
>>>>>>> 107b9d0 (enable Top Buttons feature)
				<SearchForm
					city={city}
					setCity={setCity}
					loading={loading}
					setData={setData}
					setError={setError}
					requestData={requestData}
				/>

				{!loading && (
					<>
						{error && <Error data={data} />}
						{!error && data !== null && apiResult !== null && (
							<>
								<TimeAndLocation
									dt={dt}
									timezone={timezone}
									name={name}
									country={country}
								/>
								<TemperatureAndDetails
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
								<Forecast title='HOURLY FORECAST' data={hourly} />
								<Forecast title='DAILY FORECAST' data={daily} />
							</>
						)}
					</>
				)}
			</div>
		</>
	);
}

export default App;
