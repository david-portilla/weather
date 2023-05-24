import React from 'react';

const Error = ({ data }) => {
	console.log('error data: ', data);
	const { cod, message } = data;
	console.log(cod, message);

	return (
		<p className='red darken-4 error'>
			<div className='flex flex-col items-center justify-center my-8'>
				<p className='text-white text-3xl font-medium'>{cod}</p>
				<p className='text-white text-xl font-extralight capitalize'>
					{message}
				</p>
			</div>
		</p>
	);
};

export default Error;
