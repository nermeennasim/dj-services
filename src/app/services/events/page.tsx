"use client";
import { useState } from "react";
import {
	Heart,
	Users,
	Building,
	Calendar,
	Music,
	Camera,
	Lightbulb,
	Star,
	ArrowRight,
	CheckCircle,
	Phone,
	Mail,
} from "lucide-react";
import Link from "next/link";

interface EventType {
	id: string;
	name: string;
	title: string;
	description: string;
	features: string[];
	packages: Package[];
	image: string;
	icon: any;
	popular?: boolean;
}

interface Package {
	name: string;
	price: string;
	duration: string;
	includes: string[];
}

const EventServicesPage = () => {
	const [selectedEvent, setSelectedEvent] = useState<string>("");

	const eventTypes: EventType[] = [
		{
			id: "weddings",
			name: "Weddings",
			title: "Wedding Celebrations",
			description:
				"Make your special day unforgettable with our comprehensive wedding entertainment services. From ceremony to reception, we create magical moments.",
			features: [
				"Professional DJ services for ceremony & reception",
				"Photo booth with wedding-themed props",
				"Premium sound and lighting equipment",
				"Event planning and coordination assistance",
				"Custom playlist creation",
				"Wireless microphones for vows",
				"Dance floor lighting",
				"Same-day photo delivery",
			],
			packages: [
				{
					name: "Essential Wedding",
					price: "$799",
					duration: "6 hours",
					includes: [
						"DJ Service",
						"Basic Sound System",
						"Ceremony Microphones",
						"Reception Music",
					],
				},
				{
					name: "Complete Wedding",
					price: "$1,299",
					duration: "8 hours",
					includes: [
						"DJ Service",
						"Photo Booth",
						"Premium Sound & Lighting",
						"Event Coordination",
						"Custom Playlist",
					],
				},
				{
					name: "Luxury Wedding",
					price: "$1,899",
					duration: "10 hours",
					includes: [
						"Premium DJ Service",
						"Deluxe Photo Booth",
						"Full Lighting Package",
						"Event Planning",
						"Live Song Requests",
						"Videography",
					],
				},
			],
			image:
				"https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
			icon: <Heart className="w-8 h-8" />,
			popular: true,
		},
		{
			id: "private-parties",
			name: "Private Parties",
			title: "Private Party Entertainment",
			description:
				"Celebrate life's special moments with friends and family. Birthday parties, anniversaries, graduations - we make every private celebration memorable.",
			features: [
				"Professional DJ services for all party types",
				"Interactive photo booth entertainment",
				"High-quality sound and lighting equipment",
				"Event planning and setup assistance",
				"Age-appropriate music selection",
				"Party games and activities",
				"Customizable lighting themes",
				"Digital photo sharing",
			],
			packages: [
				{
					name: "Party Starter",
					price: "$399",
					duration: "4 hours",
					includes: [
						"DJ Service",
						"Basic Sound System",
						"Party Playlist",
						"Basic Lighting",
					],
				},
				{
					name: "Party Plus",
					price: "$699",
					duration: "6 hours",
					includes: [
						"DJ Service",
						"Photo Booth",
						"Enhanced Sound System",
						"Interactive Games",
						"Custom Lighting",
					],
				},
				{
					name: "Ultimate Party",
					price: "$999",
					duration: "8 hours",
					includes: [
						"Premium DJ Service",
						"Deluxe Photo Booth",
						"Full Equipment Package",
						"Event Coordination",
						"Special Effects",
					],
				},
			],
			image:
				"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
			icon: <Users className="w-8 h-8" />,
		},
		{
			id: "community-gatherings",
			name: "Community Gatherings",
			title: "Community & Corporate Events",
			description:
				"Professional entertainment for corporate events, community festivals, fundraisers, and public gatherings. We bring people together through music and entertainment.",
			features: [
				"Professional DJ services for large gatherings",
				"Photo booth for community engagement",
				"Scalable sound and lighting solutions",
				"Event planning and logistics support",
				"Family-friendly entertainment options",
				"Public address system capabilities",
				"Stage and venue lighting",
				"Live announcements and hosting",
			],
			packages: [
				{
					name: "Community Basic",
					price: "$599",
					duration: "4 hours",
					includes: [
						"DJ Service",
						"PA System",
						"Basic Lighting",
						"Microphone Setup",
					],
				},
				{
					name: "Community Pro",
					price: "$999",
					duration: "6 hours",
					includes: [
						"DJ Service",
						"Photo Booth",
						"Premium Sound System",
						"Stage Lighting",
						"Event Hosting",
					],
				},
				{
					name: "Community Premium",
					price: "$1,499",
					duration: "8 hours",
					includes: [
						"Full DJ Setup",
						"Multiple Photo Booths",
						"Complete AV Package",
						"Event Management",
						"Live Streaming Support",
					],
				},
			],
			image:
				"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
			icon: <Building className="w-8 h-8" />,
		},
	];

	const handleEventSelect = (eventId: string): void => {
		setSelectedEvent(eventId);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto text-center">
					<Calendar className="w-16 h-16 text-[#343434] mx-auto mb-6" />
					<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
						EVENT
						<span className="block text-[#343434]">SERVICES</span>
					</h1>
					<p className="text-xl text-[#6C757D] max-w-4xl mx-auto mb-8">
						Explore our premium event entertainment services tailored for
						weddings, private parties, and community gatherings.
					</p>

					{/* Service Overview */}
					<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 max-w-4xl mx-auto mb-8">
						<h2 className="text-2xl font-bold text-[#343434] mb-6">
							Our Services
						</h2>
						<div className="grid md:grid-cols-2 gap-6 text-left">
							<ul className="space-y-3">
								<li className="flex items-center gap-3 text-[#6C757D]">
									<Music className="w-5 h-5 text-[#343434]" />
									Professional DJ services for all types of events
								</li>
								<li className="flex items-center gap-3 text-[#6C757D]">
									<Camera className="w-5 h-5 text-[#343434]" />
									Photo booth rentals with customizable options
								</li>
							</ul>
							<ul className="space-y-3">
								<li className="flex items-center gap-3 text-[#6C757D]">
									<Lightbulb className="w-5 h-5 text-[#343434]" />
									High-quality sound and lighting equipment rental
								</li>
								<li className="flex items-center gap-3 text-[#6C757D]">
									<Calendar className="w-5 h-5 text-[#343434]" />
									Event planning and coordination assistance
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Event Types Section */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Choose Your Event Type
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Select the type of event you're planning to see our specialized
							packages and services
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{eventTypes.map((event) => (
							<div key={event.id} className="group relative">
								{/* Event Type Card */}
								<div
									className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 cursor-pointer ${
										selectedEvent === event.id
											? "border-[#343434] scale-105"
											: "border-[#E9ECEF] hover:border-[#343434]/30"
									}`}
									onClick={() => handleEventSelect(event.id)}>
									{/* Popular Badge */}
									{event.popular && (
										<div className="absolute top-4 right-4 bg-[#343434] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
											Most Popular
										</div>
									)}

									{/* Image */}
									<div className="aspect-[4/3] overflow-hidden">
										<img
											src={event.image}
											alt={event.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
									</div>

									{/* Content */}
									<div className="p-8">
										<div className="flex items-center gap-3 mb-4">
											<div className="text-[#343434]">{event.icon}</div>
											<h3 className="text-2xl font-bold text-[#343434] group-hover:text-[#2c2c2c] transition-colors">
												{event.title}
											</h3>
										</div>

										<p className="text-[#6C757D] leading-relaxed mb-6">
											{event.description}
										</p>

										{/* Key Features */}
										<ul className="space-y-2 mb-6">
											{event.features.slice(0, 4).map((feature, index) => (
												<li
													key={index}
													className="flex items-center gap-2 text-[#6C757D] text-sm">
													<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
													<span>{feature}</span>
												</li>
											))}
										</ul>

										{/* Action Buttons */}
										<div className="space-y-3">
											<Link
												href="/services/reserve-your-date"
												className="block w-full bg-[#343434] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#2c2c2c] transition-colors duration-300">
												Reserve This Event Type
											</Link>

											<button
												onClick={(e) => {
													e.stopPropagation();
													handleEventSelect(event.id);
												}}
												className="w-full bg-[#F8F9FA] text-[#343434] py-3 rounded-xl font-semibold hover:bg-[#E9ECEF] transition-colors duration-300 border border-[#E9ECEF]">
												View Packages
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Selected Event Details */}
			{selectedEvent && (
				<section className="py-20 px-6 bg-[#F8F9FA]">
					<div className="max-w-6xl mx-auto">
						{(() => {
							const event = eventTypes.find((e) => e.id === selectedEvent);
							if (!event) return null;

							return (
								<div>
									<div className="text-center mb-16">
										<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
											{event.title} Packages
										</h2>
										<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
											Choose the perfect package for your{" "}
											{event.name.toLowerCase()}
										</p>
									</div>

									{/* Package Grid */}
									<div className="grid lg:grid-cols-3 gap-8 mb-12">
										{event.packages.map((pkg, index) => (
											<div
												key={index}
												className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
													index === 1
														? "transform scale-105 border-4 border-[#343434]"
														: ""
												}`}>
												{index === 1 && (
													<div className="text-center mb-4">
														<span className="bg-[#343434] text-white px-4 py-1 rounded-full text-sm font-bold">
															Recommended
														</span>
													</div>
												)}

												<div className="text-center mb-6">
													<h3 className="text-2xl font-bold text-[#343434] mb-2">
														{pkg.name}
													</h3>
													<div className="text-4xl font-black text-[#343434] mb-2">
														{pkg.price}
													</div>
													<div className="text-[#6C757D]">{pkg.duration}</div>
												</div>

												<ul className="space-y-3 mb-8">
													{pkg.includes.map((item, idx) => (
														<li
															key={idx}
															className="flex items-center gap-3 text-[#6C757D]">
															<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
															<span>{item}</span>
														</li>
													))}
												</ul>

												<Link
													href="/services/reserve-your-date"
													className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${
														index === 1
															? "bg-[#343434] text-white hover:bg-[#2c2c2c]"
															: "bg-[#F8F9FA] text-[#343434] hover:bg-[#343434] hover:text-white"
													}`}>
													Book This Package
												</Link>
											</div>
										))}
									</div>

									{/* Full Features List */}
									<div className="bg-white rounded-3xl p-8 shadow-lg">
										<h3 className="text-2xl font-bold text-[#343434] mb-6 text-center">
											Complete {event.title} Services
										</h3>
										<div className="grid md:grid-cols-2 gap-6">
											{event.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-center gap-3 text-[#6C757D]">
													<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
													<span>{feature}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							);
						})()}
					</div>
				</section>
			)}

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Plan Your Event?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Let's discuss your vision and create an unforgettable experience for
						you and your guests.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/services/reserve-your-date"
							className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
							Reserve Your Date
							<ArrowRight className="w-5 h-5" />
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center gap-3 bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
							Contact Us
							<Phone className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 px-6 bg-[#F8F9FA]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-[#343434] mb-6">
						Questions About Your Event?
					</h2>
					<p className="text-[#6C757D] mb-8">
						Our event specialists are here to help you plan the perfect
						celebration.
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Phone className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">
								Call Us Today
							</h3>
							<p className="text-[#6C757D]">(555) 123-4567</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Mail className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">
								Email Consultation
							</h3>
							<p className="text-[#6C757D]">events@blktieevents.com</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default EventServicesPage;
