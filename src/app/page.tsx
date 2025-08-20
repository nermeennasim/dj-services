"use client";
import {
	ArrowRight,
	Music,
	Users,
	Sparkles,
	Calendar,
	Headphones,
	Star,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Carousel data
	const slides = [
		{
			image: "/api/placeholder/1200/600",
			title: "Elevate Every Moment",
			subtitle: "Where Music Meets Elegance",
			description:
				"Transform your special occasions with our premium DJ services and sophisticated entertainment solutions.",
		},
		{
			image: "/api/placeholder/1200/600",
			title: "Unforgettable Experiences",
			subtitle: "Crafted to Perfection",
			description:
				"From intimate gatherings to grand celebrations, we bring your vision to life with seamless entertainment.",
		},
		{
			image: "/api/placeholder/1200/600",
			title: "Professional Excellence",
			subtitle: "Premium Sound & Lighting",
			description:
				"State-of-the-art equipment and expert DJs ensure your event resonates with sophistication and style.",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [slides.length]);

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	return (
		<div className="min-h-screen bg-white text-[#343434] overflow-hidden">
			{/* Intro Carousel Hero Section */}
			<section className="relative h-screen overflow-hidden bg-white">
				{/* Brand Introduction
				<div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
					<h1 className="text-3xl md:text-4xl font-['var(--font-tangerine)'] text-black mb-2">
						Black Tie Events
					</h1>
					<p className="text-sm text-[#6C757D] font-light tracking-wider uppercase">
						Premium Event Entertainment
					</p>
				</div> */}
				{/* Carousel Container */}
				<div className="relative w-full h-full">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 transition-opacity duration-1000 ${
								index === currentSlide ? "opacity-100" : "opacity-0"
							}`}>
							{/* Background with Elegant Pattern */}
							<div
								className="w-full h-full relative"
								style={{ backgroundColor: "#F8F9FA" }}>
								{/* Elegant Overlay Pattern */}
								<div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E9ECEF]"></div>

								{/* Content Overlay */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-center max-w-4xl mx-auto px-6">
										<h2 className="text-5xl md:text-7xl font-['var(--font-tangerine)'] text-black mb-4 leading-tight">
											{slide.title}
										</h2>
										<h3 className="text-xl md:text-2xl text-[#343434] mb-6 font-light">
											{slide.subtitle}
										</h3>
										<p className="text-lg text-[#6C757D] max-w-2xl mx-auto leading-relaxed mb-8">
											{slide.description}
										</p>

										{/* CTA Buttons */}
										<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
											<Link
												href="/services/book-a-call"
												className="bg-[#F8F9FA] text-[#343434] hover:bg-[#E9ECEF] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group border border-[#E9ECEF]">
												Book Your Event
												<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
											</Link>

											<Link
												href="/services/request-song"
												className="border-2 border-[#343434] text-[#343434] hover:bg-[#E9ECEF] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
												Request a Song
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
						<ChevronLeft className="w-6 h-6 text-[#343434]" />
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
						<ChevronRight className="w-6 h-6 text-[#343434]" />
					</button>

					{/* Slide Indicators */}
					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === currentSlide
										? "bg-[#343434] scale-110"
										: "bg-[#8E8B82] hover:bg-[#6C757D]"
								}`}
							/>
						))}
					</div>
				</div>
				{/* Floating Elements */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<Music className="absolute top-1/4 left-[15%] w-4 h-4 text-[#6C757D]/30 animate-float" />
					<Sparkles className="absolute top-1/3 right-[20%] w-5 h-5 text-[#8E8B82]/20 animate-float delay-1000" />
					<Calendar className="absolute bottom-1/4 left-[25%] w-4 h-4 text-[#6C757D]/25 animate-float delay-2000" />
				</div>
			</section>

			{/* Services Preview Section */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-black mb-4 text-black font-['var(--font-tangerine)']">
							OUR <span className="text-[#343434]">SERVICES</span>
						</h2>
						<p className="text-xl text-[#8E8B82] max-w-2xl mx-auto">
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
								color: "primary",
							},
							{
								title: "Equipment Rental",
								description: "Speakers, microphones, lighting & more",
								icon: <Headphones className="w-8 h-8" />,
								link: "/services/rent-equipment",
								color: "secondary",
							},
							{
								title: "Photo Booth",
								description: "Capture memories with our premium booth",
								icon: <Sparkles className="w-8 h-8" />,
								link: "/services/photobooth",
								color: "primary",
							},
							{
								title: "Song Requests",
								description: "Live requests with instant notifications",
								icon: <Users className="w-8 h-8" />,
								link: "/services/request-song",
								color: "secondary",
							},
						].map((service, index) => (
							<Link key={index} href={service.link} className="group">
								<div
									className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#6C757D] ${
										service.color === "primary"
											? "border-[#E9ECEF] bg-[#F8F9FA] hover:shadow-[#6C757D]/10"
											: "border-[#F8F9FA] bg-white hover:shadow-[#6C757D]/10"
									}`}>
									<div
										className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${
											service.color === "primary"
												? "text-[#343434]"
												: "text-[#6C757D]"
										}`}>
										{service.icon}
									</div>
									<h3 className="text-xl font-bold mb-2 text-black">
										{service.title}
									</h3>
									<p className="text-[#8E8B82] text-sm leading-relaxed">
										{service.description}
									</p>
									<div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#6C757D] group-hover:gap-3 transition-all duration-300">
										Learn More
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-20 px-6 relative bg-[#F8F9FA]">
				<div className="absolute inset-0 bg-gradient-to-r from-[#E9ECEF]/30 via-transparent to-[#E9ECEF]/30"></div>
				<div className="relative z-10 max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6 text-black font-['var(--font-tangerine)']">
						Ready to Create Something
						<span className="block text-[#343434]">AMAZING?</span>
					</h2>
					<p className="text-xl text-[#6C757D] mb-8">
						Let&apos;s discuss your event and create an unforgettable experience
						for your guests.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 bg-[#F8F9FA] text-[#343434] hover:bg-[#E9ECEF] hover:text-white border-2 border-[#E9ECEF] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
						Get Started Today
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
