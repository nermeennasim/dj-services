"use client";
import { useState } from "react";
import {
	Calendar,
	Clock,
	MapPin,
	Users,
	Music,
	Camera,
	Upload,
	Phone,
	Mail,
	Star,
	ArrowRight,
	CheckCircle,
} from "lucide-react";
import Link from "next/link";

interface FormData {
	// Personal Info
	firstName: string;
	lastName: string;
	email: string;
	phone: string;

	// Event Details
	eventType: string;
	eventDate: string;
	startTime: string;
	endTime: string;
	guestCount: string;
	venue: string;
	venueAddress: string;

	// Services
	djService: boolean;
	equipmentRental: boolean;
	photoBooth: boolean;
	songRequests: boolean;

	// Additional Details
	musicPreferences: string;
	specialRequests: string;
	budget: string;
	hearAboutUs: string;

	// File uploads
	venuePhotos: File[];
	inspirationPhotos: File[];
}

const ReserveDatePage = () => {
	const [formData, setFormData] = useState<FormData>({
		// Personal Info
		firstName: "",
		lastName: "",
		email: "",
		phone: "",

		// Event Details
		eventType: "",
		eventDate: "",
		startTime: "",
		endTime: "",
		guestCount: "",
		venue: "",
		venueAddress: "",

		// Services
		djService: false,
		equipmentRental: false,
		photoBooth: false,
		songRequests: false,

		// Additional Details
		musicPreferences: "",
		specialRequests: "",
		budget: "",
		hearAboutUs: "",

		// File uploads
		venuePhotos: [],
		inspirationPhotos: [],
	});

	const [currentStep, setCurrentStep] = useState<number>(1);
	const totalSteps: number = 4;

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	): void => {
		const { name, value, type } = e.target;

		if (type === "checkbox") {
			const checked = (e.target as HTMLInputElement).checked;
			setFormData((prev) => ({ ...prev, [name]: checked }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleFileUpload = (
		e: React.ChangeEvent<HTMLInputElement>,
		fieldName: keyof FormData
	): void => {
		const files = Array.from(e.target.files || []);
		setFormData((prev) => ({ ...prev, [fieldName]: files }));
	};

	const nextStep = (): void => {
		if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
	};

	const prevStep = (): void => {
		if (currentStep > 1) setCurrentStep(currentStep - 1);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		alert(
			"Thank you! We'll contact you within 24 hours to confirm your booking."
		);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-4xl mx-auto text-center">
					<Calendar className="w-16 h-16 text-[#343434] mx-auto mb-6" />
					<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
						RESERVE YOUR
						<span className="block text-[#343434]">DATE</span>
					</h1>
					<p className="text-xl text-[#6C757D] max-w-2xl mx-auto mb-8">
						Let's start planning your perfect event. Fill out the details below
						and we'll create a custom package just for you.
					</p>

					{/* Progress Indicator */}
					<div className="flex justify-center mb-8">
						<div className="flex items-center space-x-4">
							{[1, 2, 3, 4].map((step) => (
								<div key={step} className="flex items-center">
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
											currentStep >= step
												? "bg-[#343434] text-white"
												: "bg-[#E9ECEF] text-[#6C757D]"
										}`}>
										{currentStep > step ? (
											<CheckCircle className="w-5 h-5" />
										) : (
											step
										)}
									</div>
									{step < 4 && (
										<div
											className={`w-8 h-1 ${
												currentStep > step ? "bg-[#343434]" : "bg-[#E9ECEF]"
											}`}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Form Section */}
			<section className="py-16 px-6">
				<div className="max-w-4xl mx-auto">
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Step 1: Personal Information */}
						{currentStep === 1 && (
							<div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E9ECEF]">
								<h2 className="text-3xl font-bold text-[#343434] mb-6">
									Personal Information
								</h2>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											First Name *
										</label>
										<input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required
										/>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Last Name *
										</label>
										<input
											type="text"
											name="lastName"
											value={formData.lastName}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required
										/>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Email Address *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required
										/>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Phone Number *
										</label>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required
										/>
									</div>
								</div>
							</div>
						)}

						{/* Step 2: Event Details */}
						{currentStep === 2 && (
							<div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E9ECEF]">
								<h2 className="text-3xl font-bold text-[#343434] mb-6">
									Event Details
								</h2>

								<div className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Event Type *
											</label>
											<select
												name="eventType"
												value={formData.eventType}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
												required>
												<option value="">Select Event Type</option>
												<option value="wedding">Wedding</option>
												<option value="birthday">Birthday Party</option>
												<option value="corporate">Corporate Event</option>
												<option value="anniversary">Anniversary</option>
												<option value="graduation">Graduation</option>
												<option value="quinceañera">Quinceañera</option>
												<option value="other">Other</option>
											</select>
										</div>

										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Expected Guest Count *
											</label>
											<input
												type="number"
												name="guestCount"
												value={formData.guestCount}
												onChange={handleInputChange}
												placeholder="e.g., 50"
												className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
												required
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-3 gap-6">
										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Event Date *
											</label>
											<input
												type="date"
												name="eventDate"
												value={formData.eventDate}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
												required
											/>
										</div>

										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Start Time *
											</label>
											<input
												type="time"
												name="startTime"
												value={formData.startTime}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
												required
											/>
										</div>

										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												End Time *
											</label>
											<input
												type="time"
												name="endTime"
												value={formData.endTime}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
												required
											/>
										</div>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Venue Name
										</label>
										<input
											type="text"
											name="venue"
											value={formData.venue}
											onChange={handleInputChange}
											placeholder="e.g., Grand Ballroom, Backyard, etc."
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
										/>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Venue Address *
										</label>
										<textarea
											name="venueAddress"
											value={formData.venueAddress}
											onChange={handleInputChange}
											rows={3}
											placeholder="Full address of the event location"
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required
										/>
									</div>
								</div>
							</div>
						)}

						{/* Step 3: Services & Budget */}
						{currentStep === 3 && (
							<div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E9ECEF]">
								<h2 className="text-3xl font-bold text-[#343434] mb-6">
									Services & Budget
								</h2>

								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-semibold text-[#343434] mb-4">
											Select Services *
										</h3>
										<div className="grid md:grid-cols-2 gap-4">
											{[
												{
													name: "djService",
													label: "DJ Services",
													icon: <Music className="w-5 h-5" />,
												},
												{
													name: "equipmentRental",
													label: "Equipment Rental",
													icon: <Users className="w-5 h-5" />,
												},
												{
													name: "photoBooth",
													label: "Photo Booth",
													icon: <Camera className="w-5 h-5" />,
												},
												{
													name: "songRequests",
													label: "Live Song Requests",
													icon: <Star className="w-5 h-5" />,
												},
											].map((service) => (
												<label
													key={service.name}
													className="flex items-center p-4 border border-[#E9ECEF] rounded-xl hover:bg-[#F8F9FA] cursor-pointer">
													<input
														type="checkbox"
														name={service.name}
														checked={
															formData[
																service.name as keyof typeof formData
															] as boolean
														}
														onChange={handleInputChange}
														className="mr-3 w-5 h-5 text-[#343434] rounded focus:ring-[#343434]"
													/>
													{service.icon}
													<span className="ml-2 text-[#343434] font-medium">
														{service.label}
													</span>
												</label>
											))}
										</div>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Budget Range *
										</label>
										<select
											name="budget"
											value={formData.budget}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
											required>
											<option value="">Select Budget Range</option>
											<option value="500-1000">$500 - $1,000</option>
											<option value="1000-2000">$1,000 - $2,000</option>
											<option value="2000-3000">$2,000 - $3,000</option>
											<option value="3000-5000">$3,000 - $5,000</option>
											<option value="5000+">$5,000+</option>
										</select>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Music Preferences
										</label>
										<textarea
											name="musicPreferences"
											value={formData.musicPreferences}
											onChange={handleInputChange}
											rows={3}
											placeholder="Tell us about your music preferences, genres, specific songs, etc."
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Step 4: Additional Details & Photos */}
						{currentStep === 4 && (
							<div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E9ECEF]">
								<h2 className="text-3xl font-bold text-[#343434] mb-6">
									Final Details
								</h2>

								<div className="space-y-6">
									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											Special Requests or Additional Information
										</label>
										<textarea
											name="specialRequests"
											value={formData.specialRequests}
											onChange={handleInputChange}
											rows={4}
											placeholder="Any special requests, accessibility needs, or additional information we should know..."
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent"
										/>
									</div>

									<div>
										<label className="block text-[#343434] font-semibold mb-2">
											How did you hear about us?
										</label>
										<select
											name="hearAboutUs"
											value={formData.hearAboutUs}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-[#E9ECEF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#343434] focus:border-transparent">
											<option value="">Select an option</option>
											<option value="google">Google Search</option>
											<option value="social">Social Media</option>
											<option value="referral">Friend/Family Referral</option>
											<option value="previous">Previous Event</option>
											<option value="website">Your Website</option>
											<option value="other">Other</option>
										</select>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Venue Photos (Optional)
											</label>
											<div className="border-2 border-dashed border-[#E9ECEF] rounded-xl p-6 text-center hover:border-[#343434] transition-colors">
												<Upload className="w-8 h-8 text-[#6C757D] mx-auto mb-2" />
												<p className="text-[#6C757D] mb-2">
													Upload venue photos
												</p>
												<input
													type="file"
													multiple
													accept="image/*"
													onChange={(e) => handleFileUpload(e, "venuePhotos")}
													className="hidden"
													id="venuePhotos"
												/>
												<label
													htmlFor="venuePhotos"
													className="inline-block bg-[#F8F9FA] text-[#343434] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#E9ECEF] transition-colors">
													Choose Files
												</label>
											</div>
										</div>

										<div>
											<label className="block text-[#343434] font-semibold mb-2">
												Inspiration Photos (Optional)
											</label>
											<div className="border-2 border-dashed border-[#E9ECEF] rounded-xl p-6 text-center hover:border-[#343434] transition-colors">
												<Upload className="w-8 h-8 text-[#6C757D] mx-auto mb-2" />
												<p className="text-[#6C757D] mb-2">
													Upload inspiration photos
												</p>
												<input
													type="file"
													multiple
													accept="image/*"
													onChange={(e) =>
														handleFileUpload(e, "inspirationPhotos")
													}
													className="hidden"
													id="inspirationPhotos"
												/>
												<label
													htmlFor="inspirationPhotos"
													className="inline-block bg-[#F8F9FA] text-[#343434] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#E9ECEF] transition-colors">
													Choose Files
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Navigation Buttons */}
						<div className="flex justify-between items-center pt-8">
							<button
								type="button"
								onClick={prevStep}
								disabled={currentStep === 1}
								className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
									currentStep === 1
										? "bg-[#F8F9FA] text-[#6C757D] cursor-not-allowed"
										: "bg-[#E9ECEF] text-[#343434] hover:bg-[#6C757D] hover:text-white"
								}`}>
								Previous
							</button>

							<div className="text-center">
								<span className="text-[#6C757D]">
									Step {currentStep} of {totalSteps}
								</span>
							</div>

							{currentStep < totalSteps ? (
								<button
									type="button"
									onClick={nextStep}
									className="px-6 py-3 bg-[#343434] text-white rounded-xl font-semibold hover:bg-[#2c2c2c] transition-all duration-300">
									Next
								</button>
							) : (
								<button
									type="submit"
									className="inline-flex items-center gap-2 px-8 py-3 bg-[#343434] text-white rounded-xl font-semibold hover:bg-[#2c2c2c] transition-all duration-300 transform hover:scale-105">
									Submit Booking Request
									<ArrowRight className="w-4 h-4" />
								</button>
							)}
						</div>
					</form>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 px-6 bg-[#F8F9FA]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-[#343434] mb-6">Need Help?</h2>
					<p className="text-[#6C757D] mb-8">
						Have questions about your booking? Our team is here to help.
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Phone className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">Call Us</h3>
							<p className="text-[#6C757D]">(909) 268 1246</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Mail className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">Email Us</h3>
							<p className="text-[#6C757D]">blktieevent@gmail.com</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ReserveDatePage;
