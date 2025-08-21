"use client";

import { useState } from "react";
import { Phone, QrCode, X, Plus } from "lucide-react";

export default function FloatingButtons() {
	const [isOpen, setIsOpen] = useState(false);
	const [showQR, setShowQR] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
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
			{/* Floating Action Buttons - Centered vertically on right side */}
			<div className="fixed top-1/2 transform -translate-y-1/2 right-6 z-50">
				{/* Secondary Buttons (show when main button is opened) */}
				<div
					className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${
						isOpen
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4 pointer-events-none"
					}`}>
					{/* Show QR Code Button */}
					<button
						onClick={handleShowQR}
						className="bg-[#F8F9FA] border border-[#E9ECEF] text-[#6C757D] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 transform hover:scale-110 group"
						title="Show QR Code">
						<QrCode className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</button>

					{/* Call Button */}
					<button
						onClick={handleCall}
						className="bg-[#F8F9FA] border border-[#E9ECEF] text-[#6C757D] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 transform hover:scale-110 group"
						title="Call DJ">
						<Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</button>
				</div>

				{/* Main Toggle Button */}
				<button
					onClick={toggleMenu}
					className={`bg-white border-2 border-[#6C757D] text-[#343434] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#6C757D] hover:text-white transition-all duration-300 transform hover:scale-110 ${
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
					<div className="w-16 h-16 bg-[#E9ECEF] rounded-full animate-ping opacity-30"></div>
				</div>
			</div>

			{/* QR Code Modal */}
			{showQR && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-6">
					<div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative border border-[#E9ECEF]">
						{/* Close Button */}
						<button
							onClick={() => setShowQR(false)}
							className="absolute top-4 right-4 text-[#6C757D] hover:text-[#343434] transition-colors">
							<X className="w-6 h-6" />
						</button>

						{/* Maintenance Notice */}
						<div className="mb-6">
							<div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4 mb-4">
								<p className="text-[#6C757D] text-sm font-medium">
									⚠️ QR Code temporarily disabled due to maintenance
								</p>
								<p className="text-[#8E8B82] text-xs mt-1">
									Please use the contact methods below
								</p>
							</div>

							<div className="w-16 h-16 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4">
								<QrCode className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-2xl font-bold text-black mb-2">
								Contact Information
							</h3>
							<p className="text-[#6C757D]">
								Get in touch with Black Tie Events
							</p>
						</div>

						{/* Contact Options */}
						<div className="space-y-3 mb-6">
							{/* Call Option */}
							<a
								href="tel:+19092681246"
								className="block bg-[#F8F9FA] border border-[#E9ECEF] p-4 rounded-lg hover:bg-[#E9ECEF] transition-colors">
								<div className="flex items-center gap-3">
									<Phone className="w-5 h-5 text-[#6C757D]" />
									<div className="text-left">
										<p className="font-semibold text-[#343434]">Call Us</p>
										<p className="text-sm text-[#6C757D]">909-268-1246</p>
									</div>
								</div>
							</a>

							{/* Website Link */}
							<a
								href="/contact"
								className="block bg-[#F8F9FA] border border-[#E9ECEF] p-4 rounded-lg hover:bg-[#E9ECEF] transition-colors">
								<div className="text-left">
									<p className="font-semibold text-[#343434]">
										Visit Contact Page
									</p>
									<p className="text-sm text-[#6C757D]">
										More contact options available
									</p>
								</div>
							</a>
						</div>

						{/* Action Button */}
						<button
							onClick={() => setShowQR(false)}
							className="w-full bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] py-3 rounded-lg font-medium hover:bg-[#E9ECEF] hover:text-white transition-colors">
							Close
						</button>
					</div>
				</div>
			)}

			{/* Quick Hint - Positioned relative to centered buttons
			{!isOpen && (
				<div className="fixed top-1/2 transform -translate-y-1/2 right-16 z-40">
					<div className="bg-[#343434] text-white px-4 py-2 rounded-lg text-sm animate-bounce shadow-lg">
						📞 Quick Contact
					</div>
				</div>
			)} */}
		</>
	);
}
