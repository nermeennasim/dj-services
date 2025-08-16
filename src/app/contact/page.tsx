"use client";

import { useState } from "react";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	MessageCircle,
	Send,
	CheckCircle,
	AlertCircle,
} from "lucide-react";
import { useEmailMutation } from "@/hooks/useEmailMutation";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});

	const [showConfirmation, setShowConfirmation] = useState(false);
	const emailMutation = useEmailMutation();

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (emailMutation.error) {
			emailMutation.reset();
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		if (
			!formData.name ||
			!formData.phone ||
			!formData.email ||
			!formData.message
		) {
			return;
		}

		try {
			console.log("🚀 Submitting form data:", formData);

			const result = await emailMutation.sendEmail(formData);
			console.log("✅ Email sent successfully:", result);

			// Show confirmation and reset form
			setShowConfirmation(true);
			setFormData({ name: "", phone: "", email: "", message: "" });
		} catch (error) {
			console.error("❌ Email submission failed:", error);
			// Error is already handled by the mutation hook
		}
	};

	const resetForm = () => {
		setShowConfirmation(false);
		emailMutation.reset();
	};

	const isFormValid =
		formData.name && formData.phone && formData.email && formData.message;

	// Success confirmation screen
	if (showConfirmation) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
				<div className="text-center max-w-2xl mx-auto">
					<div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
						<CheckCircle className="w-10 h-10 text-white" />
					</div>
					<h1 className="text-4xl font-black mb-4">Message Sent!</h1>
					<p className="text-xl text-gray-300 mb-8">
						Thank you for reaching out! We'll get back to you within 24 hours.
					</p>

					{emailMutation.data?.id && (
						<p className="text-sm mb-4 text-gray-400">
							Reference ID: {emailMutation.data.id}
						</p>
					)}

					<div className="space-y-4 mb-6">
						<p className="text-gray-300">
							📧 Check your email for a confirmation message
						</p>
						<p className="text-gray-300">
							Need immediate assistance? Call us at{" "}
							<a
								href="tel:+19092681246"
								className="text-yellow-400 underline font-medium">
								909-268-1246
							</a>
						</p>
					</div>

					<button
						onClick={resetForm}
						className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
						Send Another Message
					</button>
				</div>
			</div>
		);
	}

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
				</div>
			</section>

			{/* Contact Information Cards */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Contact Information
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
							href="mailto:blacktieevent@gmail.com"
							className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:scale-105">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-lg font-bold mb-2">Email Us</h3>
							<p className="text-yellow-400 font-semibold">
								blacktieevent@gmail.com
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

			{/* Contact Form */}
			<section className="py-16 px-6 bg-white/5">
				<div className="max-w-2xl mx-auto">
					<div className="bg-white/10 border border-white/20 rounded-2xl p-8">
						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
							<p className="text-gray-300">
								Fill out the form below and we'll get back to you within 24
								hours.
							</p>
						</div>

						<div className="space-y-6">
							{/* Name Field */}
							<div>
								<label className="block text-sm font-medium mb-2 text-gray-300">
									Full Name *
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
									placeholder="Enter your full name"
								/>
							</div>

							{/* Phone and Email Row */}
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-2 text-gray-300">
										Phone Number *
									</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										required
										className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
										placeholder="(555) 123-4567"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2 text-gray-300">
										Email Address *
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							{/* Message Field */}
							<div>
								<label className="block text-sm font-medium mb-2 text-gray-300">
									Message *
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									required
									rows={5}
									className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none"
									placeholder="Tell us about your event, questions, or how we can help you..."
								/>
							</div>

							{/* Submit Button */}
							<button
								onClick={handleSubmit}
								disabled={emailMutation.isLoading || !isFormValid}
								className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3">
								{emailMutation.isLoading ? (
									<>
										<div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
										Sending Message...
									</>
								) : emailMutation.isError ? (
									<>
										<AlertCircle className="w-5 h-5" />
										Try Again
									</>
								) : (
									<>
										<Send className="w-5 h-5" />
										Send Message
									</>
								)}
							</button>

							{/* Form Status Messages */}
							{emailMutation.isError && (
								<div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
									<p className="text-red-400 text-sm text-center">
										{emailMutation.error ||
											"Failed to send message. Please try calling us directly."}
									</p>
								</div>
							)}

							{emailMutation.data && !showConfirmation && (
								<div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
									<p className="text-green-400 text-sm text-center flex items-center justify-center gap-2">
										<CheckCircle className="w-4 h-4" />
										Message sent successfully! We'll get back to you within 24
										hours.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
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
									<p className="text-yellow-400 font-semibold">
										Emergency Events: 24/7 Available
									</p>
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
									<p className="text-yellow-400 font-semibold">
										Travel outside area available
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
