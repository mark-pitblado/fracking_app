import React from "react";

const Industry = () => {
	return (
		<div className='bg-white pb-12 mb-12'>
			<div className='max-w-7xl mx-auto py-12  px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl pt-12 mt-12 font-extrabold text-gray-900 sm:text-4xl'>
					Industry
				</h1>
				<ol className='mt-6 border-t border-b border-gray-200 divide-y divide-gray-200'>
					<li className='py-10'>
						<h4 className='text-lg leading-6 font-medium text-gray-900'>
							<a href='#'>Chevron</a>
						</h4>
						<p className='mt-5'>
							Chevron is engaged in hydraulic fracturing both in British
							Columbia and in Alberta. The company{" "}
							<a
								href='https://canada.chevron.com/environment/hydraulic-fracturing'
								className='text-violet-400 underline'
							>
								lists
							</a>{" "}
							the following precautions on its website
							<ul className='list-disc pl-5'>
								<li className='mt-1'>
									Operations are done more than three kilometres below any
									potable groundwater
								</li>
								<li>Multiple layers of steel and cement casing</li>
								<li>Safety teams on-site to monitor operations</li>
								<li>
									Chevron attempts to recycle the water after use if possible,
									and when not feasible disposes of the waste water responsibly
								</li>
							</ul>
						</p>
					</li>
					<li className='py-10'>
						<h4 className='text-lg leading-6 font-medium text-gray-900'>
							<a href='#'>Shell</a>
						</h4>
						<p className='mt-5'>
							Shell is involved in hydraulic fracturing in North-East British
							Columbia near Fort St.John at the Groundbirch facility. The
							company{" "}
							<a
								href='https://www.shell.com/sustainability/safety/process-safety.html'
								className='text-violet-400 underline'
							>
								lists
							</a>{" "}
							the following measures of safety on its website (note these are
							not specific to hydraulic fracturing.)
							<ul className='list-disc pl-5'>
								<li className='mt-1'>
									Prepares for emergencies by conducting joint tests with local
									regulatory agencies.
								</li>
								<li>
									Regularly performs training operations to practice what
									actions should be taken in the case of an accident or spill
								</li>
								<li>
									Uses technology such as drones and machine learning to try and
									detect accidents before they occur.
								</li>
							</ul>
						</p>
					</li>
					<li className='py-10'>
						<h4 className='text-lg leading-6 font-medium text-gray-900'>
							<a href='#'>Other Companies</a>
						</h4>
						<p className='mt-5'>
							Below are all other companies that are involved in oil and gas
							extraction in British Columbia (may or may not be involved in
							hydraulic fracturing)
							<ul className='list-disc pl-5'>
								<li className='mt-1'>Alcan Fluid Disposal Ltd.</li>
								<li>Tenaka Drilling Consortium Ltd.</li>
								<li>Canada Energy Partners Inc.</li>
								<li>Hudson's Hope Gas, Ltd.</li>
								<li>South Peace Parkland Ltd.</li>
							</ul>
						</p>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Industry;
