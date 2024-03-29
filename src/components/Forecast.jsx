import React from 'react';

const Forecast = ({ title, data }) => {
	return (
		<div>
			<div className='flex items-center justify-start mt-6'>
				<p className='text-white font-medium uppercase'>{title}</p>
			</div>
			<hr className='my-2' />
			<div className='flex flex-row items-center justify-between text-white'>
				{data.map((item) => (
					<div
						className='flex flex-col items-center justify-center'
						key={item.title}
					>
						<p className='font-medium text-sm'>{item.title}</p>
						<img
							src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
							alt={item.title}
							className='w-12 my-1'
						/>
						<p className='font-medium'>{item.temp}°</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Forecast;
