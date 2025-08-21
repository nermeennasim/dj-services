import React from "react";

const Events = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">Events</h1>
			<p className="text-lg text-gray-700">
				Explore our premium event entertainment services tailored for weddings,
				private parties, and community gatherings.
			</p>
			{/* Add more content or components related to events here */}
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">Our Services</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Professional DJ services for all types of events</li>
					<li>Photo booth rentals with customizable options</li>
					<li>High-quality sound and lighting equipment rental</li>
					<li>Event planning and coordination assistance</li>
				</ul>
			</div>
		</div>
	);
};

export default Events;
