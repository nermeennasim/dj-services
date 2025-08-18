"use client";

import { useState, useEffect } from "react";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	MessageCircle,
	Calendar,
	Music,
	Settings,
} from "lucide-react";

// Add Calendly type declaration
declare global {
	interface Window {
		Calendly: any;
	}
}

// Import the disabled banner component
const ContactFormDisabledBanner = () => {
	const openCalendly = () => {
		if (typeof window !== "undefined" && (window as any).Calendly) {
			(window as any).Calendly.initPopupWidget({
				url: "https://calendly.com/blktieevent/welcome-to-black-tie-events",
			});
		} else {
			window.open(
				"https://calendly.com/blktieevent/welcome-to-black-tie-events",
				"_blank"
			);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			<div className="bg-white/10 border border-white/20 rounded-2xl p-8">
				{/* Header with Icon */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
						<Settings className="w-8 h-8 text-yellow-400 animate-spin" />
					</div>
					<h2 className="text-3xl font-bold mb-4">
						Contact Form Temporarily Unavailable
					</h2>
					<div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mb-6">
						<div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
							<Mail className="w-5 h-5" />
							<span className="font-semibold">
								Email Integration in Progress
							</span>
						</div>
						<p className="text-yellow-200 text-sm">
							We're setting up our email system for better service. We'll be
							back soon!
						</p>
					</div>
				</div>

				{/* Alternative Contact Methods */}
				<div className="space-y-6">
					<div className="text-center mb-6">
						<h3 className="text-xl font-semibold text-white mb-2">
							Meanwhile, feel free to reach out via:
						</h3>
						<p className="text-gray-300 text-sm">
							Choose your preferred way to connect with Black Tie Events
						</p>
					</div>

					{/* Contact Options Grid */}
					<div className="grid md:grid-cols-2 gap-4">
						{/* Schedule Call */}
						<button
							onClick={openCalendly}
							className="bg-yellow-400 hover:bg-yellow-300 text-black p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Calendar className="w-6 h-6" />
								</div>
								<div className="text-left">
									<h4 className="font-bold text-lg">Schedule Free Call</h4>
									<p className="text-sm opacity-80">30-minute consultation</p>
								</div>
							</div>
						</button>

						{/* Call Direct */}
						<a
							href="tel:+19092681246"
							className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Phone className="w-6 h-6" />
								</div>
								<div className="text-left">
									<h4 className="font-bold text-lg">Call Directly</h4>
									<p className="text-sm opacity-80">909-268-1246</p>
								</div>
							</div>
						</a>

						{/* WhatsApp */}
						<a
							href="https://wa.me/19092681246?text=Hi!%20I'm%20interested%20in%20your%20DJ%20services"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<MessageCircle className="w-6 h-6" />
								</div>
								<div className="text-left">
									<h4 className="font-bold text-lg">WhatsApp</h4>
									<p className="text-sm opacity-80">Instant messaging</p>
								</div>
							</div>
						</a>

						{/* Email Direct */}
						<a
							href="mailto:blktieevent@gmail.com?subject=DJ Services Inquiry&body=Hi! I'm interested in your DJ services for my event."
							className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Mail className="w-6 h-6" />
								</div>
								<div className="text-left">
									<h4 className="font-bold text-lg">Email Us</h4>
									<p className="text-sm opacity-80">blktieevent@gmail.com</p>
								</div>
							</div>
						</a>
					</div>

					{/* Footer Message */}
					<div className="text-center pt-6 border-t border-gray-700">
						<div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
							<Clock className="w-4 h-4" />
							<span className="text-sm">
								We typically respond within 2-4 hours
							</span>
						</div>
						<p className="text-gray-400 text-sm">
							Thank you for your patience while we upgrade our contact system!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function ContactPage() {
	const [calendlyLoaded, setCalendlyLoaded] = useState(false);

	// Load Calendly scripts and initialize
	useEffect(() => {
		// Load CSS
		const link = document.createElement("link");
		link.href = "https://assets.calendly.com/assets/external/widget.css";
		link.rel = "stylesheet";
		document.head.appendChild(link);

		// Load Script
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		script.onload = () => {
			setCalendlyLoaded(true);

			// Initialize badge widget (floating button)
			if (window.Calendly) {
				window.Calendly.initBadgeWidget({
					url: "https://calendly.com/blktieevent/welcome-to-black-tie-events",
					text: "📅 Book Free Consultation",
					color: "#eab308", // Yellow color to match your theme
					textColor: "#000000", // Black text
					branding: false,
				});
			}
		};
		document.head.appendChild(script);

		return () => {
			// Cleanup
			const existingScript = document.querySelector(
				'script[src="https://assets.calendly.com/assets/external/widget.js"]'
			);
			const existingLink = document.querySelector(
				'link[href="https://assets.calendly.com/assets/external/widget.css"]'
			);
			if (existingScript) document.head.removeChild(existingScript);
			if (existingLink) document.head.removeChild(existingLink);

			// Remove badge widget
			const badgeWidget = document.querySelector(".calendly-badge-widget");
			if (badgeWidget) badgeWidget.remove();
		};
	}, []);

	// Function to open Calendly popup
	const openCalendlyPopup = () => {
		if (window.Calendly) {
			window.Calendly.initPopupWidget({
				url: "https://calendly.com/blktieevent/welcome-to-black-tie-events",
			});
		} else {
			// Fallback to opening in new tab if widget isn't loaded
			window.open(
				"https://calendly.com/blktieevent/welcome-to-black-tie-events",
				"_blank"
			);
		}
	};

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<section className="relative py-20 px-6">
				<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"></div>

				<div className="relative z-10 max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-black mb-6">
						GET IN
						<span className="block text-yellow-400">TOUCH</span>
					</h1>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Ready to make your event extraordinary? We'd love to hear from you!
					</p>

					{/* Primary CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						{/* Schedule Consultation Button */}
						<button
							onClick={openCalendlyPopup}
							className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-black text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-400/25 flex items-center justify-center gap-3">
							<Calendar className="w-6 h-6" />
							Schedule Free Consultation
						</button>

						{/* Call Now Button */}
						<a
							href="tel:+19092681246"
							className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-black text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
							<Phone className="w-6 h-6" />
							Call Now: 909-268-1246
						</a>
					</div>

					{/* Floating Button Tip */}
					<div className="mb-4">
						<div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-sm text-yellow-200">
							<Music className="w-4 h-4 mr-2" />
							<span>
								{calendlyLoaded
									? "💡 Look for the floating 'Book Free Consultation' button!"
									: "Loading booking system..."}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Information Cards */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Contact Information
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
						{/* Schedule Consultation Card */}
						<button
							onClick={openCalendlyPopup}
							className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Calendar className="w-8 h-8 text-black" />
							</div>
							<h3 className="text-lg font-bold mb-2">Book Consultation</h3>
							<p className="text-yellow-400 font-semibold">Free 30-Min Call</p>
							<p className="text-gray-400 text-sm mt-2">
								Discuss your event details
							</p>
						</button>

						{/* Phone */}
						<a
							href="tel:+19092681246"
							className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2">Call Us</h3>
							<p className="text-yellow-400 font-semibold text-lg">
								909-268-1246
							</p>
							<p className="text-gray-400 text-sm mt-2">
								Click to call instantly
							</p>
						</a>

						{/* Email */}
						<a
							href="mailto:blktieevent@gmail.com"
							className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2">Email Us</h3>
							<p className="text-yellow-400 font-semibold">
								blktieevent@gmail.com
							</p>
							<p className="text-gray-400 text-sm mt-2">Send us an email</p>
						</a>

						{/* WhatsApp */}
						<a
							href="https://wa.me/19092681246?text=Hi!%20I'm%20interested%20in%20your%20DJ%20services"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<MessageCircle className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2">WhatsApp</h3>
							<p className="text-yellow-400 font-semibold">Chat Now</p>
							<p className="text-gray-400 text-sm mt-2">Instant messaging</p>
						</a>

						{/* Website */}
						<a
							href="https://www.blktieevents.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<MapPin className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2">Visit Website</h3>
							<p className="text-yellow-400 font-semibold">blktieevents.com</p>
							<p className="text-gray-400 text-sm mt-2">Our main website</p>
						</a>
					</div>
				</div>
			</section>

			{/* DISABLED CONTACT FORM - Replaced with Banner */}
			<section className="py-16 px-6 bg-white/5">
				<ContactFormDisabledBanner />
			</section>

			{/* Business Hours & Info */}
			<section className="py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-8">Business Information</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Hours */}
						<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
							<div className="flex items-center justify-center gap-3 mb-4">
								<Clock className="w-6 h-6 text-yellow-400" />
								<h3 className="text-xl font-bold">Business Hours</h3>
							</div>
							<div className="space-y-2 text-gray-300">
								<div className="flex justify-between">
									<span>Monday - Friday:</span>
									<span>9:00 AM - 8:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span>Saturday:</span>
									<span>10:00 AM - 6:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span>Sunday:</span>
									<span>12:00 PM - 6:00 PM</span>
								</div>
								<div className="mt-4 pt-4 border-t border-white/10">
									<p className="text-yellow-400 font-semibold mb-2">
										Emergency Events: 24/7 Available
									</p>
									<button
										onClick={openCalendlyPopup}
										className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
										📅 Book consultation during these hours
									</button>
								</div>
							</div>
						</div>

						{/* Service Area */}
						<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
							<div className="flex items-center justify-center gap-3 mb-4">
								<MapPin className="w-6 h-6 text-yellow-400" />
								<h3 className="text-xl font-bold">Service Area</h3>
							</div>
							<div className="space-y-2 text-gray-300">
								<p>• Los Angeles County</p>
								<p>• Orange County</p>
								<p>• Riverside County</p>
								<p>• San Bernardino County</p>
								<div className="mt-4 pt-4 border-t border-white/10">
									<p className="text-yellow-400 font-semibold mb-2">
										Travel outside area available
									</p>
									<button
										onClick={openCalendlyPopup}
										className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
										📞 Discuss travel options in consultation
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
