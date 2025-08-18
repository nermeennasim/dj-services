import {
	ArrowRight,
	Music,
	Users,
	Sparkles,
	Calendar,
	Headphones,
	Star,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Hero Section with Animated Background */}
			<section className="relative h-screen flex items-center justify-center">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-yellow-400/5 blur-2xl animate-spin-slow"></div>
				</div>

				{/* Floating Music Notes */}
				<div className="absolute inset-0 pointer-events-none">
					<Music className="absolute top-20 left-1/4 w-6 h-6 text-yellow-400/30 animate-bounce delay-300" />
					<Music className="absolute top-40 right-1/3 w-4 h-4 text-white/20 animate-bounce delay-700" />
					<Headphones className="absolute bottom-32 left-1/5 w-5 h-5 text-yellow-400/20 animate-bounce delay-1000" />
				</div>

				{/* Content with proper spacing */}
				<div className="relative z-10 text-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
					{/* Main Heading */}
					<h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
						Level Up
						<span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
							Your Event
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
						Premium DJ services, state-of-the-art equipment, and unforgettable
						experiences. From intimate gatherings to grand celebrations.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Link
							href="/services/book-a-call"
							className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-400/25 flex items-center gap-2 group">
							Book Your Event
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>

						<Link
							href="/services/request-song"
							className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
							Request a Song
						</Link>
					</div>

					{/* Quick Stats */}
					<div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-400">
						<div className="flex items-center gap-2">
							<Users className="w-5 h-5 text-yellow-400" />
							<span>500+ Events</span>
						</div>
						<div className="flex items-center gap-2">
							<Star className="w-5 h-5 text-yellow-400" />
							<span>5.0 Rating</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="w-5 h-5 text-yellow-400" />
							<span>Available 24/7</span>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
					</div>
				</div>
			</section>

			{/* Services Preview Section - Better spacing */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-black mb-4">
							OUR <span className="text-yellow-400">SERVICES</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Everything you need for the perfect event, all in one place
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								title: "DJ Services",
								description: "Professional DJ with premium sound systems",
								icon: <Music className="w-8 h-8" />,
								link: "/services/book-a-call",
								color: "yellow",
							},
							{
								title: "Equipment Rental",
								description: "Speakers, microphones, lighting & more",
								icon: <Headphones className="w-8 h-8" />,
								link: "/services/rent-equipment",
								color: "white",
							},
							{
								title: "Photo Booth",
								description: "Capture memories with our premium booth",
								icon: <Sparkles className="w-8 h-8" />,
								link: "/services/photobooth",
								color: "yellow",
							},
							{
								title: "Song Requests",
								description: "Live requests with instant notifications",
								icon: <Users className="w-8 h-8" />,
								link: "/services/request-song",
								color: "white",
							},
						].map((service, index) => (
							<Link key={index} href={service.link} className="group">
								<div
									className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
										service.color === "yellow"
											? "border-yellow-400/20 bg-yellow-400/5 hover:border-yellow-400/40 hover:shadow-yellow-400/10"
											: "border-white/10 bg-white/5 hover:border-white/20 hover:shadow-white/10"
									}`}>
									<div
										className={`${
											service.color === "yellow"
												? "text-yellow-400"
												: "text-white"
										} mb-4 group-hover:scale-110 transition-transform duration-300`}>
										{service.icon}
									</div>
									<h3 className="text-xl font-bold mb-2">{service.title}</h3>
									<p className="text-gray-400 text-sm leading-relaxed">
										{service.description}
									</p>
									<div className="mt-4 flex items-center gap-2 text-sm font-medium text-yellow-400 group-hover:gap-3 transition-all duration-300">
										Learn More
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section - Better spacing */}
			<section className="py-20 relative">
				<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"></div>
				<div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12">
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Create Something
						<span className="block text-yellow-400">AMAZING?</span>
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss your event and create an unforgettable experience for
						your guests.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
						Get Started Today
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
