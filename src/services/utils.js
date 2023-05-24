import { DateTime } from 'luxon';

export const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
	return DateTime.fromSeconds(secs).setZone(zone).toFormat(format).toString();
};

export const formatWeather = (data) => {
	const {
		coord: { lat, lon },
		main: { temp, feels_like, temp_min, temp_max, humidity },
		name,
		dt,
		sys: { country },
		weather,
		wind: { speed },
	} = data;

	const { description: details, icon } = weather[0];

	let {
		timezone,
		daily,
		hourly,
		sys: { sunrise, sunset },
	} = data;

	daily = daily.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'ccc, dd'),
			temp: d.temp.day,
			icon: d.weather[0].icon,
		};
	});

	hourly = hourly.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
			temp: d.temp,
			icon: d.weather[0].icon,
		};
	});

	sunrise = formatToLocalTime(sunrise, timezone, 'hh:mm a');
	sunset = formatToLocalTime(sunset, timezone, 'hh:mm a');

	return {
		lat,
		lon,
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
		timezone,
		daily,
		hourly,
	};
};
