import React, { useState, useEffect } from 'react';
import * as Unicons from '@iconscout/react-unicons';

const SearchForm = ({
	city,
	setCity,

	loading,
	setData,
	setError,
	requestData,
}) => {
	const handleChange = (e) => setCity(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (city.trim() === '') {
			setError(true);
			setData({ cod: 'Input error', message: 'The city field is required' });

			return;
		}

		requestData();
	};

	return (
		<>
			<form
				className='flex flex-row justify-center my-6'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
					<input
						type='text'
						name='city'
						id='city'
						value={city}
						onChange={handleChange}
						autoFocus
						autoComplete='off'
						placeholder='Search a city....'
						className='bg-white text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
					/>
					<button
						type='submit'
						className='waves-effect waves-light btn-large btn-block yellow accent-4 col s12'
					>
						<Unicons.UilSearch
							size={25}
							className='text-white cursor-pointer transition ease-out hover:scale-125'
						/>
					</button>
					<button>
						<Unicons.UilLocationPoint
							size={25}
							className='text-white cursor-pointer transition ease-out hover:scale-125'
						/>
					</button>
				</div>

				<div className='flex flex-row w-1/4 items-center justify-center'>
					<button
						name='metric'
						className='text-xl text-white font-light transition ease-out hover:scale-125'
					>
						°C
					</button>
					<p className='text-xl text-white mx-1'>|</p>
					<button
						name='imperial'
						className='text-xl text-white font-light transition ease-out hover:scale-125'
					>
						°F
					</button>
				</div>
			</form>

			<div className='input-field col s12'>
				{loading && (
					<div className='flex flex-col items-center justify-center my-8'>
						<h2 className='text-white text-xl font-extralight'>... loading </h2>
					</div>
				)}
			</div>
		</>
	);
};

export default SearchForm;
