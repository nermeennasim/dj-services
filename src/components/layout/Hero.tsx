"use client";
import { useState, useEffect } from "react";
import {
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Music,
	Sparkles,
	Calendar,
} from "lucide-react";
import Link from "next/link";

// Hero-only component - no full page content
export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Carousel data with working images
	const slides = [
		{
			image:
				"https://res.cloudinary.com/dxlhnxle0/image/upload/v1757223331/360_F_245127730_9pslBprPicrMYkSpLzvcwXTpjK7pQ5cP_exxpjh.jpg",
			title: "Professional DJ Services",
			subtitle: "Premium Sound & Entertainment",
			description:
				"Elevate your events with our professional DJ services featuring state-of-the-art sound systems and expert mixing.",
		},
		{
			image:
				"https://res.cloudinary.com/dxlhnxle0/image/upload/v1757223887/weddings02_eujc6t.jpg",
			title: "Wedding Celebrations",
			subtitle: "Making Your Special Day Perfect",
			description:
				"From first dance to last song, we create the perfect soundtrack for your wedding celebration with personalized playlists.",
		},
		{
			image:
				"https://res.cloudinary.com/dxlhnxle0/image/upload/v1757223908/corporate_iez6jo.jpg",
			title: "Corporate Events",
			subtitle: "Professional Event Entertainment",
			description:
				"Transform your corporate gatherings with professional entertainment that keeps your guests engaged and energized.",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000); // 6 seconds per slide
		return () => clearInterval(timer);
	}, [slides.length]);

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

	return (
		<section className="relative h-screen overflow-hidden bg-white">
			{/* Carousel Container */}
			<div className="relative w-full h-full">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}>
						{/* Background Image */}
						<div
							className="w-full h-full bg-cover bg-center relative"
							style={{
								backgroundImage: `url("${slide.image}")`,
								backgroundColor: "#1f2937", // Fallback color
							}}>
							{/* Dark overlay for better text readability */}
							<div className="absolute inset-0 bg-black/40"></div>

							{/* Content Overlay */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center max-w-4xl mx-auto px-6 z-10">
									<h2 className="text-5xl md:text-7xl font-['var(--font-tangerine)'] text-white mb-4 leading-tight drop-shadow-lg">
										{slide.title}
									</h2>
									<h3 className="text-xl md:text-2xl text-white/90 mb-6 font-light drop-shadow-md">
										{slide.subtitle}
									</h3>
									<p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-md">
										{slide.description}
									</p>

									{/* CTA Buttons */}
									<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
										<Link
											href="/contact"
											className="bg-white text-[#343434] hover:bg-[#F8F9FA] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group">
											Book Your Event
											<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
										</Link>

										{/* <Link
											href="/services/rental-equipments"
											className="border-2 border-white text-white hover:bg-white hover:text-[#343434] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
											Contact Us
										</Link> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm">
					<ChevronLeft className="w-6 h-6 text-white" />
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm">
					<ChevronRight className="w-6 h-6 text-white" />
				</button>

				{/* Slide Indicators */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-white scale-110"
									: "bg-white/50 hover:bg-white/70"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Floating Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
				<Music className="absolute top-1/4 left-[15%] w-4 h-4 text-white/30 animate-float" />
				<Sparkles className="absolute top-1/3 right-[20%] w-5 h-5 text-white/20 animate-float delay-1000" />
				<Calendar className="absolute bottom-1/4 left-[25%] w-4 h-4 text-white/25 animate-float delay-2000" />
			</div>
		</section>
	);
}
