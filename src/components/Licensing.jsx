import React from "react";

const Licensing = () => {
	return (
		<div className='bg-white'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-600'>
				<h1 className='text-3xl mt-12 font-extrabold text-gray-900 sm:text-4xl py-5'>
					Licensing
				</h1>

				<h4 className='text-lg leading-6 font-medium text-gray-900'>
					Favicon:{" "}
					<a
						href='https://www.flaticon.com/free-icons/oil'
						title='oil icons'
					>
						Oil icons created by Freepik - Flaticon
					</a>
				</h4>
				<h4 className='text-lg leading-6 font-medium text-gray-900'>
					Main Logo:{" "}
					<a
						href='https://www.flaticon.com/free-icons/fracking'
						title='fracking icons'
					>
						{" "}
						Fracking icons created by Freepik - Flaticon
					</a>
				</h4>
			</div>
		</div>
	);
};

export default Licensing;
