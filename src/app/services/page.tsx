"use client";
import {
	Music,
	Camera,
	Speaker,
	Calendar,
	Users,
	Star,
	ArrowRight,
	CheckCircle,
	Heart,
	Building,
} from "lucide-react";
import Link from "next/link";

interface Service {
	id: string;
	title: string;
	description: string;
	features: string[];
	price: string;
	image: string;
	icon: any;
	link: string;
	popular?: boolean;
}

const ServicePage = () => {
	const services: Service[] = [
		{
			id: "dj-services",
			title: "DJ Services",
			description:
				"Professional DJ services with premium sound systems, expert mixing, and personalized playlists for any event.",
			features: [
				"Professional Equipment",
				"Custom Playlists",
				"Live Mixing",
				"MC Services",
			],
			price: "Starting at $1,595",
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
			icon: <Music className="w-8 h-8" />,
			link: "/services/packages",
			popular: true,
		},
		{
			id: "photo-booth",
			title: "Photo Booth",
			description:
				"Capture unforgettable moments with our premium photo booth featuring props, instant prints, and digital sharing.",
			features: [
				"Instant Prints",
				"Digital Sharing",
				"Fun Props",
				"Custom Templates",
			],
			price: "Starting at $299",
			image:
				"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=300&fit=crop",
			icon: <Camera className="w-8 h-8" />,
			link: "/services/photobooth",
		},
		{
			id: "equipment-rental",
			title: "Equipment Rental",
			description:
				"Professional-grade audio and lighting equipment with delivery, setup, and technical support included.",
			features: [
				"Premium Speakers",
				"Professional Lighting",
				"Setup Included",
				"Technical Support",
			],
			price: "Starting at $150",
			image:
				"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=300&fit=crop",
			icon: <Speaker className="w-8 h-8" />,
			link: "/services/rental-equipments",
		},
		{
			id: "event-planning",
			title: "Event Planning",
			description:
				"Complete event planning and coordination services for weddings, private parties, and community gatherings.",
			features: [
				"Wedding Planning",
				"Private Parties",
				"Corporate Events",
				"Full Coordination",
			],
			price: "Custom Packages",
			image:
				"https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
			icon: <Calendar className="w-8 h-8" />,
			link: "/services/events",
		},
	];

	const eventTypes = [
		{
			icon: <Heart className="w-6 h-6" />,
			title: "Weddings",
			description: "Make your special day unforgettable",
			link: "/services/events#weddings",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "Private Parties",
			description: "Celebrate with friends and family",
			link: "/services/events#private-parties",
		},
		{
			icon: <Building className="w-6 h-6" />,
			title: "Corporate Events",
			description: "Professional event entertainment",
			link: "/services/events#community-gatherings",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
						OUR
						<span className="block text-[#343434]">SERVICES</span>
					</h1>
					<p className="text-xl text-[#6C757D] max-w-4xl mx-auto mb-8">
						Professional event entertainment services for weddings, private
						parties, and community gatherings. From DJ services to complete
						event planning, we make every celebration extraordinary.
					</p>

					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
							15+ Years Experience
						</div>
						<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
							1000+ Events
						</div>
						<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
							Professional Equipment
						</div>
					</div>

					<Link
						href="/services/reserve-your-date"
						className="inline-flex items-center gap-3 bg-[#343434] text-white hover:bg-[#2c2c2c] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
						Book Your Event
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>

			{/* Main Services Grid */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							What We Offer
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Comprehensive entertainment solutions for your perfect event
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{services.map((service) => (
							<div key={service.id} className="group relative">
								<Link href={service.link}>
									<div className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-[#E9ECEF]">
										{/* Popular Badge */}
										{service.popular && (
											<div className="absolute top-4 right-4 bg-[#343434] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
												Most Popular
											</div>
										)}

										{/* Image */}
										<div className="aspect-[5/3] overflow-hidden">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>

										{/* Content */}
										<div className="p-8">
											<div className="flex items-center gap-3 mb-4">
												<div className="text-[#343434]">{service.icon}</div>
												<h3 className="text-2xl font-bold text-[#343434] group-hover:text-[#2c2c2c] transition-colors">
													{service.title}
												</h3>
											</div>

											<p className="text-[#6C757D] leading-relaxed mb-6">
												{service.description}
											</p>

											{/* Features */}
											<div className="grid grid-cols-2 gap-3 mb-6">
												{service.features.map((feature, index) => (
													<div
														key={index}
														className="flex items-center gap-2 text-[#6C757D] text-sm">
														<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
														<span>{feature}</span>
													</div>
												))}
											</div>

											{/* Price and CTA */}
											<div className="flex items-center justify-between">
												<div className="text-2xl font-black text-[#343434]">
													{service.price}
												</div>
												<div className="flex items-center gap-2 text-[#343434] font-semibold group-hover:gap-3 transition-all duration-300">
													Learn More
													<ArrowRight className="w-4 h-4" />
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Event Types Section */}
			<section className="py-20 px-6 bg-[#F8F9FA]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Event Types We Serve
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Specialized packages for every type of celebration
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{eventTypes.map((event, index) => (
							<Link key={index} href={event.link} className="group">
								<div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
									<div className="bg-[#343434] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
										{event.icon}
									</div>
									<h3 className="text-xl font-bold text-[#343434] mb-4 group-hover:text-[#2c2c2c] transition-colors">
										{event.title}
									</h3>
									<p className="text-[#6C757D] leading-relaxed mb-6">
										{event.description}
									</p>
									<div className="flex items-center justify-center gap-2 text-[#343434] font-semibold group-hover:gap-3 transition-all duration-300">
										View Packages
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Quick Actions Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Get Started Today
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Ready to plan your event? Choose how you'd like to begin
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Link
							href="/services/reserve-your-date"
							className="group bg-[#343434] text-white rounded-3xl p-8 hover:bg-[#2c2c2c] transition-all duration-300 transform hover:scale-105">
							<Calendar className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
							<h3 className="text-2xl font-bold mb-4">Reserve Your Date</h3>
							<p className="text-white/90 mb-6">
								Fill out our booking form with your event details and we'll
								create a custom package for you.
							</p>
							<div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300">
								Start Booking
								<ArrowRight className="w-5 h-5" />
							</div>
						</Link>

						<Link
							href="/services/packages"
							className="group bg-white border-2 border-[#343434] text-[#343434] rounded-3xl p-8 hover:bg-[#343434] hover:text-white transition-all duration-300 transform hover:scale-105">
							<Star className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
							<h3 className="text-2xl font-bold mb-4">View Packages</h3>
							<p className="group-hover:text-white/90 text-[#6C757D] mb-6">
								See our complete DJ service packages with pricing and add-ons to
								customize your event.
							</p>
							<div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300">
								Browse Packages
								<ArrowRight className="w-5 h-5" />
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Make Your Event Unforgettable?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Contact us today for a free consultation and let's start planning
						your perfect celebration.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/services/reserve-your-date"
							className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
							Book Your Event
							<ArrowRight className="w-5 h-5" />
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center gap-3 bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
							Get Free Consultation
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
export default ServicePage;
