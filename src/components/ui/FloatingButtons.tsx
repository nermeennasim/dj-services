"use client";

import { useState } from "react";
import { Music, Phone, QrCode, DollarSign, X, Plus } from "lucide-react";

export default function FloatingButtons() {
	const [isOpen, setIsOpen] = useState(false);
	const [showQR, setShowQR] = useState(false);

	// QR Code URL for song requests
	//const songRequestUrl = `${window.location.origin}/services/request-song`;

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleSongRequest = () => {
		window.location.href = "/services/request-song";
	};

	const handleCall = () => {
		window.location.href = "tel:+19092681246";
	};

	const handleShowQR = () => {
		setShowQR(true);
		setIsOpen(false);
	};

	return (
		<>
			{/* Floating Action Buttons */}
			<div className="fixed bottom-6 right-6 z-50">
				{/* Secondary Buttons (show when main button is opened) */}
				<div
					className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${
						isOpen
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4 pointer-events-none"
					}`}>
					{/* Song Request Button */}
					<button
						onClick={handleSongRequest}
						className="bg-yellow-400 text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 group"
						title="Request a Song">
						<Music className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</button>

					{/* Show QR Code Button */}
					<button
						onClick={handleShowQR}
						className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 group"
						title="Show QR Code">
						<QrCode className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</button>

					{/* Call Button */}
					<button
						onClick={handleCall}
						className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-500 transition-all duration-300 transform hover:scale-110 group"
						title="Call DJ">
						<Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</button>
				</div>

				{/* Main Toggle Button */}
				<button
					onClick={toggleMenu}
					className={`bg-black border-2 border-yellow-400 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 ${
						isOpen ? "rotate-45" : ""
					}`}
					title={isOpen ? "Close Menu" : "Quick Actions"}>
					{isOpen ? (
						<X className="w-7 h-7 transition-transform duration-300" />
					) : (
						<Plus className="w-7 h-7 transition-transform duration-300" />
					)}
				</button>

				{/* Pulse Animation Ring */}
				<div className="absolute inset-0 -z-10">
					<div className="w-16 h-16 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
				</div>
			</div>

			{/* QR Code Modal */}
			{showQR && (
				<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-6">
					<div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative">
						{/* Close Button */}
						<button
							onClick={() => setShowQR(false)}
							className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors">
							<X className="w-6 h-6" />
						</button>

						{/* QR Code Header */}
						<div className="mb-6">
							<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
								<Music className="w-8 h-8 text-black" />
							</div>
							<h3 className="text-2xl font-bold text-black mb-2">
								Request a Song
							</h3>
							<p className="text-gray-600">
								Scan to request your favorite song with payment
							</p>
						</div>

						{/* QR Code */}
						<div className="bg-gray-100 p-6 rounded-xl mb-6">
							<div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
								{/* QR Code Placeholder - Replace with actual QR code generator */}
								<div className="text-center">
									<QrCode className="w-32 h-32 text-gray-400 mx-auto mb-2" />
									<p className="text-xs text-gray-500">QR Code</p>
								</div>
							</div>
						</div>

						{/* Manual Link */}
						<div className="text-sm text-gray-600 mb-4">
							Or visit: <br />
							<a
								href="/services/request-song"
								className="text-yellow-600 hover:text-yellow-700 font-medium break-all">
								www.blktieevents.com/request-song
							</a>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3">
							<button
								onClick={() => setShowQR(false)}
								className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
								Close
							</button>
							<button
								onClick={handleSongRequest}
								className="flex-1 bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
								Request Song
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Quick Hint (shows first time) */}
			{!isOpen && (
				<div className="fixed bottom-24 right-6 z-40">
					<div className="bg-black/90 text-white px-4 py-2 rounded-lg text-sm animate-bounce">
						💰 Request Songs!
					</div>
				</div>
			)}
		</>
	);
}
