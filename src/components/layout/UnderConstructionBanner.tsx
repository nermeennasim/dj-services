"use client";
import React, { useState } from "react";
import { X, Phone, Calendar, Mail, Construction, Music } from "lucide-react";

const UnderConstructionBanner = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
		<div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black">
			{/* Main Banner */}
			<div className="px-4 py-3 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between flex-wrap">
					<div className="w-0 flex-1 flex items-center">
						{/* Construction Icon */}
						<span className="flex p-2 rounded-lg bg-black/10">
							<Construction className="h-6 w-6 text-black animate-pulse" />
						</span>

						{/* Banner Message */}
						<div className="ml-3 font-medium">
							<div className="flex flex-col sm:flex-row sm:items-center">
								<span className="text-sm sm:text-base font-bold">
									🚧 Website Under Construction
								</span>
								<span className="text-xs sm:text-sm sm:ml-2 opacity-90">
									Our new site is getting a fresh look! Contact us for bookings.
								</span>
							</div>
						</div>
					</div>

					{/* Contact Actions */}
					<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
						<div className="flex items-center space-x-2 sm:space-x-3">
							{/* Call Button */}
							<a
								href="tel:+19092681246"
								className="flex items-center px-3 py-1.5 rounded-full bg-black text-yellow-400 hover:bg-gray-800 transition-colors text-xs font-medium">
								<Phone className="w-3 h-3 mr-1" />
								Call Now
							</a>

							{/* Schedule Button */}
							<button
								onClick={() => {
									if (window.Calendly) {
										window.Calendly.initPopupWidget({
											url: "https://calendly.com/blktieevent/welcome-to-black-tie-events",
										});
									} else {
										window.open(
											"https://calendly.com/blktieevent/welcome-to-black-tie-events",
											"_blank"
										);
									}
								}}
								className="flex items-center px-3 py-1.5 rounded-full bg-black text-yellow-400 hover:bg-gray-800 transition-colors text-xs font-medium">
								<Calendar className="w-3 h-3 mr-1" />
								Book Now
							</button>
						</div>
					</div>

					{/* Close Button */}
					<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
						<button
							type="button"
							onClick={() => setIsVisible(false)}
							className="-mr-1 flex p-2 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors"
							aria-label="Dismiss banner">
							<X className="h-4 w-4 text-black" />
						</button>
					</div>
				</div>
			</div>

			{/* Bottom Accent Strip */}
			<div className="h-1 bg-gradient-to-r from-black via-gray-800 to-black"></div>
		</div>
	);
};

export default UnderConstructionBanner;
