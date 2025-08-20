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

// Contact Form Component with Maintenance Notice and Validation
const ContactFormWithMaintenance = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		eventType: "",
		eventDate: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
	});

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

	// Validation functions
	const validateName = (name: string) => {
		if (!name.trim()) return "Full name is required";
		if (name.trim().length < 2) return "Name must be at least 2 characters";
		if (name.trim().length > 50) return "Name must be less than 50 characters";
		if (!/^[a-zA-Z\s'-]+$/.test(name.trim()))
			return "Name can only contain letters, spaces, hyphens, and apostrophes";
		return "";
	};

	const validateEmail = (email: string) => {
		if (!email.trim()) return "Email address is required";
		if (email.length > 100) return "Email must be less than 100 characters";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) return "Please enter a valid email address";
		return "";
	};

	const validatePhone = (phone: string) => {
		if (!phone.trim()) return ""; // Phone is optional
		// Remove all non-digit characters for validation
		const digitsOnly = phone.replace(/\D/g, "");
		if (digitsOnly.length < 10)
			return "Phone number must be at least 10 digits";
		if (digitsOnly.length > 15)
			return "Phone number must be less than 15 digits";
		return "";
	};

	const validateMessage = (message: string) => {
		if (message.length > 500) return "Message must be less than 500 characters";
		return "";
	};

	const formatPhoneNumber = (value: string) => {
		// Remove all non-digit characters
		const digitsOnly = value.replace(/\D/g, "");

		// Format as (XXX) XXX-XXXX for US numbers
		if (digitsOnly.length >= 10) {
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
				3,
				6
			)}-${digitsOnly.slice(6, 10)}`;
		} else if (digitsOnly.length >= 6) {
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
				3,
				6
			)}-${digitsOnly.slice(6)}`;
		} else if (digitsOnly.length >= 3) {
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
		}
		return digitsOnly;
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;

		let processedValue = value;

		// Special handling for phone number formatting
		if (name === "phone") {
			processedValue = formatPhoneNumber(value);
		}

		// Character limits
		if (name === "name" && value.length > 50) return;
		if (name === "email" && value.length > 100) return;
		if (name === "message" && value.length > 500) return;

		setFormData((prev) => ({
			...prev,
			[name]: processedValue,
		}));

		// Real-time validation
		if (touched[name as keyof typeof touched]) {
			let error = "";
			switch (name) {
				case "name":
					error = validateName(processedValue);
					break;
				case "email":
					error = validateEmail(processedValue);
					break;
				case "phone":
					error = validatePhone(processedValue);
					break;
				case "message":
					error = validateMessage(processedValue);
					break;
			}
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const handleBlur = (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));

		// Validate on blur
		let error = "";
		switch (name) {
			case "name":
				error = validateName(formData.name);
				break;
			case "email":
				error = validateEmail(formData.email);
				break;
			case "phone":
				error = validatePhone(formData.phone);
				break;
			case "message":
				error = validateMessage(formData.message);
				break;
		}
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate all fields
		const nameError = validateName(formData.name);
		const emailError = validateEmail(formData.email);
		const phoneError = validatePhone(formData.phone);
		const messageError = validateMessage(formData.message);

		setErrors({
			name: nameError,
			email: emailError,
			phone: phoneError,
			message: messageError,
		});

		setTouched({
			name: true,
			email: true,
			phone: true,
			message: true,
		});

		if (nameError || emailError || phoneError || messageError) {
			alert("Please fix the form errors before submitting.");
			return;
		}

		// Form is disabled, so this won't actually submit
		alert(
			"Form is currently disabled due to maintenance. Please use alternative contact methods."
		);
	};

	const isFieldValid = (fieldName: keyof typeof errors) => {
		return (
			touched[fieldName] &&
			!errors[fieldName] &&
			formData[fieldName].trim() !== ""
		);
	};

	const isFieldInvalid = (fieldName: keyof typeof errors) => {
		return touched[fieldName] && errors[fieldName] !== "";
	};

	return (
		<div className="max-w-2xl mx-auto">
			{/* Maintenance Notice */}
			<div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4 mb-6">
				<p className="text-[#6C757D] text-sm font-medium text-center">
					⚠️ Form temporarily disabled due to maintenance. Please{" "}
					<a
						href="tel:+19092681246"
						className="text-[#343434] hover:underline font-semibold">
						call us
					</a>
					,{" "}
					<button
						onClick={openCalendly}
						className="text-[#343434] hover:underline font-semibold bg-transparent border-none p-0 cursor-pointer">
						book a consultation
					</button>
					, or email us at{" "}
					<a
						href="mailto:blktieevent@gmail.com"
						className="text-[#343434] hover:underline font-semibold">
						blktieevent@gmail.com
					</a>
				</p>
			</div>

			{/* Contact Form */}
			<div className="bg-white border border-[#E9ECEF] rounded-2xl p-8">
				<h2 className="text-3xl font-black text-black font-['var(--font-tangerine)'] mb-6 text-center">
					Contact Form
				</h2>

				<form onSubmit={handleSubmit} className="space-y-6" noValidate>
					{/* Name Field */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-[#343434] mb-2">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							onBlur={handleBlur}
							className={`w-full px-4 py-3 border rounded-lg bg-white text-[#343434] transition-all duration-300 ${
								isFieldValid("name")
									? "border-green-500 focus:border-green-600 focus:ring-1 focus:ring-green-500"
									: isFieldInvalid("name")
									? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
									: "border-[#E9ECEF] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D]"
							}`}
							placeholder="Enter your full name"
							maxLength={50}
							required
						/>
						{errors.name && touched.name && (
							<p className="text-red-500 text-xs mt-1 flex items-center gap-1">
								<span>⚠️</span> {errors.name}
							</p>
						)}
						<p className="text-[#8E8B82] text-xs mt-1">
							{formData.name.length}/50 characters
						</p>
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-[#343434] mb-2">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							onBlur={handleBlur}
							className={`w-full px-4 py-3 border rounded-lg bg-white text-[#343434] transition-all duration-300 ${
								isFieldValid("email")
									? "border-green-500 focus:border-green-600 focus:ring-1 focus:ring-green-500"
									: isFieldInvalid("email")
									? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
									: "border-[#E9ECEF] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D]"
							}`}
							placeholder="Enter your email address"
							maxLength={100}
							required
						/>
						{errors.email && touched.email && (
							<p className="text-red-500 text-xs mt-1 flex items-center gap-1">
								<span>⚠️</span> {errors.email}
							</p>
						)}
						<p className="text-[#8E8B82] text-xs mt-1">
							{formData.email.length}/100 characters
						</p>
					</div>

					{/* Phone Field */}
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-[#343434] mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							onBlur={handleBlur}
							className={`w-full px-4 py-3 border rounded-lg bg-white text-[#343434] transition-all duration-300 ${
								formData.phone && isFieldValid("phone")
									? "border-green-500 focus:border-green-600 focus:ring-1 focus:ring-green-500"
									: isFieldInvalid("phone")
									? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
									: "border-[#E9ECEF] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D]"
							}`}
							placeholder="(555) 123-4567"
						/>
						{errors.phone && touched.phone && (
							<p className="text-red-500 text-xs mt-1 flex items-center gap-1">
								<span>⚠️</span> {errors.phone}
							</p>
						)}
						<p className="text-[#8E8B82] text-xs mt-1">
							Optional - Auto-formatted US phone number
						</p>
					</div>

					{/* Event Type Field */}
					<div>
						<label
							htmlFor="eventType"
							className="block text-sm font-medium text-[#343434] mb-2">
							Event Type
						</label>
						<select
							id="eventType"
							name="eventType"
							value={formData.eventType}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-[#E9ECEF] rounded-lg bg-white text-[#343434] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D] transition-colors duration-300">
							<option value="">Select event type</option>
							<option value="wedding">Wedding</option>
							<option value="birthday">Birthday Party</option>
							<option value="corporate">Corporate Event</option>
							<option value="anniversary">Anniversary</option>
							<option value="graduation">Graduation</option>
							<option value="other">Other</option>
						</select>
					</div>

					{/* Event Date Field */}
					<div>
						<label
							htmlFor="eventDate"
							className="block text-sm font-medium text-[#343434] mb-2">
							Event Date
						</label>
						<input
							type="date"
							id="eventDate"
							name="eventDate"
							value={formData.eventDate}
							onChange={handleInputChange}
							min={new Date().toISOString().split("T")[0]} // Prevent past dates
							className="w-full px-4 py-3 border border-[#E9ECEF] rounded-lg bg-white text-[#343434] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D] transition-colors duration-300"
						/>
					</div>

					{/* Message Field */}
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-[#343434] mb-2">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							onBlur={handleBlur}
							rows={4}
							className={`w-full px-4 py-3 border rounded-lg bg-white text-[#343434] transition-all duration-300 resize-vertical ${
								formData.message && isFieldValid("message")
									? "border-green-500 focus:border-green-600 focus:ring-1 focus:ring-green-500"
									: isFieldInvalid("message")
									? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
									: "border-[#E9ECEF] focus:border-[#6C757D] focus:ring-1 focus:ring-[#6C757D]"
							}`}
							placeholder="Tell us about your event requirements, venue, guest count, music preferences, special requests, etc..."
							maxLength={500}></textarea>
						{errors.message && touched.message && (
							<p className="text-red-500 text-xs mt-1 flex items-center gap-1">
								<span>⚠️</span> {errors.message}
							</p>
						)}
						<p className="text-[#8E8B82] text-xs mt-1">
							{formData.message.length}/500 characters
						</p>
					</div>

					{/* Submit Button - Disabled */}
					<div className="pt-4">
						<button
							type="submit"
							disabled={true}
							className="w-full bg-[#F8F9FA] text-[#8E8B82] border border-[#E9ECEF] px-8 py-4 rounded-lg font-bold text-lg opacity-50 cursor-not-allowed transition-all duration-300">
							Submit (Currently Disabled)
						</button>

						{/* Alternative Action Buttons */}
						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<button
								type="button"
								onClick={openCalendly}
								className="bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] px-6 py-3 rounded-lg font-medium hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
								<Calendar className="w-5 h-5" />
								Book Call Instead
							</button>

							<a
								href="tel:+19092681246"
								className="bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] px-6 py-3 rounded-lg font-medium hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
								<Phone className="w-5 h-5" />
								Call Now
							</a>
						</div>
					</div>
				</form>
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
					color: "#6C757D", // Gray color for white theme
					textColor: "#FFFFFF", // White text
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
		<div className="min-h-screen bg-white text-[#343434]">
			{/* Hero Section */}
			<section className="relative py-20 px-6">
				<div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-transparent to-[#F8F9FA]"></div>

				<div className="relative z-10 max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-black mb-6 font-['var(--font-tangerine)'] text-black">
						GET IN
						<span className="block text-[#343434]">TOUCH</span>
					</h1>
					<p className="text-xl text-[#6C757D] mb-8 max-w-2xl mx-auto">
						Ready to make your event extraordinary? We'd love to hear from you!
					</p>

					{/* Primary CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						{/* Schedule Consultation Button */}
						<button
							onClick={openCalendlyPopup}
							className="px-8 py-4 bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] rounded-full font-black text-lg hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
							<Calendar className="w-6 h-6" />
							Schedule Free Consultation
						</button>

						{/* Call Now Button */}
						<a
							href="tel:+19092681246"
							className="px-8 py-4 border-2 border-[#6C757D] text-[#6C757D] rounded-full font-black text-lg hover:bg-[#6C757D] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
							<Phone className="w-6 h-6" />
							Call Now: 909-268-1246
						</a>
					</div>

					{/* Floating Button Tip */}
					<div className="mb-4">
						<div className="inline-flex items-center px-4 py-2 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full text-sm text-[#6C757D]">
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
					<h2 className="text-3xl font-bold text-center mb-12 text-black">
						Contact Information
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
						{/* Schedule Consultation Card */}
						<button
							onClick={openCalendlyPopup}
							className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 text-center hover:border-[#6C757D] hover:bg-[#E9ECEF] transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Calendar className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-lg font-bold mb-2 text-black">
								Book Consultation
							</h3>
							<p className="text-[#6C757D] font-semibold">Free 30-Min Call</p>
							<p className="text-[#8E8B82] text-sm mt-2">
								Discuss your event details
							</p>
						</button>

						{/* Phone */}
						<a
							href="tel:+19092681246"
							className="bg-white border border-[#E9ECEF] rounded-2xl p-6 text-center hover:border-[#6C757D] hover:bg-[#F8F9FA] transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Phone className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-lg font-bold mb-2 text-black">Call Us</h3>
							<p className="text-[#6C757D] font-semibold text-lg">
								909-268-1246
							</p>
							<p className="text-[#8E8B82] text-sm mt-2">
								Click to call instantly
							</p>
						</a>

						{/* Email */}
						<a
							href="mailto:blktieevent@gmail.com"
							className="bg-white border border-[#E9ECEF] rounded-2xl p-6 text-center hover:border-[#6C757D] hover:bg-[#F8F9FA] transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Mail className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-lg font-bold mb-2 text-black">Email Us</h3>
							<p className="text-[#6C757D] font-semibold">
								blktieevent@gmail.com
							</p>
							<p className="text-[#8E8B82] text-sm mt-2">Send us an email</p>
						</a>

						{/* WhatsApp */}
						<a
							href="https://wa.me/19092681246?text=Hi!%20I'm%20interested%20in%20your%20DJ%20services"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white border border-[#E9ECEF] rounded-2xl p-6 text-center hover:border-[#6C757D] hover:bg-[#F8F9FA] transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<MessageCircle className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-lg font-bold mb-2 text-black">WhatsApp</h3>
							<p className="text-[#6C757D] font-semibold">Chat Now</p>
							<p className="text-[#8E8B82] text-sm mt-2">Instant messaging</p>
						</a>

						{/* Website */}
						<a
							href="https://www.blktieevents.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white border border-[#E9ECEF] rounded-2xl p-6 text-center hover:border-[#6C757D] hover:bg-[#F8F9FA] transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-[#E9ECEF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<MapPin className="w-8 h-8 text-[#6C757D]" />
							</div>
							<h3 className="text-lg font-bold mb-2 text-black">
								Visit Website
							</h3>
							<p className="text-[#6C757D] font-semibold">blktieevents.com</p>
							<p className="text-[#8E8B82] text-sm mt-2">Our main website</p>
						</a>
					</div>
				</div>
			</section>

			{/* CONTACT FORM with Maintenance Notice */}
			<section className="py-16 px-6 bg-[#F8F9FA]">
				<ContactFormWithMaintenance />
			</section>

			{/* Business Hours & Info */}
			<section className="py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-8 text-black">
						Business Information
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Hours */}
						<div className="bg-white border border-[#E9ECEF] rounded-2xl p-6">
							<div className="flex items-center justify-center gap-3 mb-4">
								<Clock className="w-6 h-6 text-[#6C757D]" />
								<h3 className="text-xl font-bold text-black">Business Hours</h3>
							</div>
							<div className="space-y-2 text-[#6C757D]">
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
								<div className="mt-4 pt-4 border-t border-[#E9ECEF]">
									<p className="text-[#343434] font-semibold mb-2">
										Emergency Events: 24/7 Available
									</p>
									<button
										onClick={openCalendlyPopup}
										className="text-sm text-[#6C757D] hover:text-[#343434] transition-colors">
										📅 Book consultation during these hours
									</button>
								</div>
							</div>
						</div>

						{/* Service Area */}
						<div className="bg-white border border-[#E9ECEF] rounded-2xl p-6">
							<div className="flex items-center justify-center gap-3 mb-4">
								<MapPin className="w-6 h-6 text-[#6C757D]" />
								<h3 className="text-xl font-bold text-black">Service Area</h3>
							</div>
							<div className="space-y-2 text-[#6C757D]">
								<p>• Los Angeles County</p>
								<p>• Orange County</p>
								<p>• Riverside County</p>
								<p>• San Bernardino County</p>
								<div className="mt-4 pt-4 border-t border-[#E9ECEF]">
									<p className="text-[#343434] font-semibold mb-2">
										Travel outside area available
									</p>
									<button
										onClick={openCalendlyPopup}
										className="text-sm text-[#6C757D] hover:text-[#343434] transition-colors">
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
