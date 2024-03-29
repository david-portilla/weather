import React from 'react';

const TopButtons = ({ setCity, requestData }) => {
	const cities = [
		{
			id: 1,
			title: 'London',
		},
		{
			id: 2,
			title: 'Sydney',
		},
		{
			id: 3,
			title: 'Tokyo',
		},
		{
			id: 4,
			title: 'Toronto',
		},
		{
			id: 5,
			title: 'Paris',
		},
	];

	const handleClic = (e) => {
		setCity(e.target.value);
		requestData();
	};

	return (
		<div className='flex items-center justify-around my-6'>
			{cities.map((city) => (
				<button
					key={city.id}
					value={city.title}
					className='text-white text-lg font-medium'
					onClick={handleClic}
				>
					{city.title}
				</button>
			))}
		</div>
	);
};

export default TopButtons;
