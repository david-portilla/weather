import React from 'react';

const Error = ({ data }) => {
	const { cod, message } = data;

	return (
		<div className='red darken-4 error'>
			<div className='flex flex-col items-center justify-center my-8'>
				<p className='text-white text-3xl font-medium'>{cod}</p>
				<p className='text-white text-xl font-extralight capitalize'>
					{message}
				</p>
			</div>
		</div>
	);
};

export default Error;
