"use client";
import {
	ArrowRight,
	Music,
	Users,
	Sparkles,
	Headphones,
	Star,
	Calendar,
} from "lucide-react";
import Link from "next/link";
import Hero from "../components/layout/Hero"; // Import the Hero component

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white text-[#343434] overflow-hidden">
			{/* Hero Section */}
			<Hero />
			{/* Services Preview Section - Updated Design */}
			<section className="py-24 px-6 relative bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-7xl mx-auto relative z-10">
					{/* Section Header */}
					<div className="text-center mb-20">
						<div className="inline-block">
							<h2 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)'] relative">
								OUR <span className="text-[#343434]">SERVICES</span>
								<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#343434] to-[#6C757D] rounded-full"></div>
							</h2>
						</div>
						<p className="text-2xl text-[#6C757D] max-w-3xl mx-auto leading-relaxed">
							Everything you need for the perfect event, all in one place
						</p>
						<div className="mt-6 flex justify-center">
							<div className="flex items-center gap-2 text-[#8E8B82]">
								<span className="text-sm font-medium">
									Premium Quality • Professional Service • Unforgettable Moments
								</span>
							</div>
						</div>
					</div>

					{/* Services Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "DJ Services",
								link: "/services/book-a-call",
								features: [
									"Professional Equipment",
									"Custom Playlists",
									"Live Mixing",
								],
							},
							{
								title: "Equipment Rental",
								link: "/services/rental-equipments",
								features: [
									"Premium Speakers",
									"Professional Lighting",
									"Setup Included",
								],
							},
							{
								title: "Photo Booth",
								link: "/services/photobooth",
								features: ["Instant Prints", "Digital Sharing", "Fun Props"],
							},
							{
								title: "Song Requests",
								link: "/",
								features: [
									"Real-time Requests",
									"Guest Interaction",
									"Instant Notifications",
								],
								comingSoon: true,
							},
						].map((service, index) => (
							<div key={index} className="group relative">
								{/* Service Card */}
								<Link href={service.link}>
									<div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl cursor-pointer bg-black hover:bg-[#343434]">
										{/* Content */}
										<div className="relative h-full flex flex-col justify-center p-8">
											{/* Title */}
											<h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-gray-300 transition-colors duration-300">
												{service.title}
											</h3>

											{/* Features */}
											<div className="space-y-3 mb-6">
												{service.features.map((feature, idx) => (
													<div
														key={idx}
														className="flex items-center text-white/90 text-sm">
														<div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
														<span>{feature}</span>
													</div>
												))}
											</div>

											{/* Coming Soon Badge */}
											{service.comingSoon && (
												<div className="text-center mb-4">
													<span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
														Coming Soon
													</span>
												</div>
											)}

											{/* Learn More Button */}
											<div className="flex items-center justify-center gap-2 text-white font-medium group-hover:text-gray-300 transition-colors duration-300 mt-auto">
												<span>Learn More</span>
												<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
											</div>
										</div>

										{/* Hover Effect Border */}
										<div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-300"></div>
									</div>
								</Link>
							</div>
						))}
					</div>

					{/* Bottom CTA */}
					<div className="text-center mt-16">
						<div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
							<p className="text-[#6C757D] mb-6 text-lg">
								Need a custom package? Let's create something perfect for your
								event.
							</p>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 bg-[#343434] text-white hover:bg-[#2c2c2c] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group">
								Get Custom Quote
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
