// Add this section at the top of your HomePage component, before the current hero section
"use-client";
import {
	ChevronLeft,
	ChevronRight,
	Music,
	Sparkles,
	Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";

const IntroHeroSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Carousel data
	const slides = [
		{
			image: "/api/placeholder/1200/600", // Replace with your actual images
			title: "Elevate Every Moment",
			subtitle: "Where Music Meets Elegance",
			description:
				"Transform your special occasions with our premium DJ services and sophisticated entertainment solutions.",
		},
		{
			image: "/api/placeholder/1200/600", // Replace with your actual images
			title: "Unforgettable Experiences",
			subtitle: "Crafted to Perfection",
			description:
				"From intimate gatherings to grand celebrations, we bring your vision to life with seamless entertainment.",
		},
		{
			image: "/api/placeholder/1200/600", // Replace with your actual images
			title: "Professional Excellence",
			subtitle: "Premium Sound & Lighting",
			description:
				"State-of-the-art equipment and expert DJs ensure your event resonates with sophistication and style.",
		},
	];

	// Auto-advance carousel
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [slides.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<section className="relative h-screen overflow-hidden bg-white">
			{/* Brand Introduction */}
			<div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
				<h1 className="text-3xl md:text-4xl font-['var(--font-tangerine)'] text-black mb-2">
					Black Tie Events
				</h1>
				<p className="text-sm text-[#6C757D] font-light tracking-wider uppercase">
					Premium Event Entertainment
				</p>
			</div>

			{/* Carousel Container */}
			<div className="relative w-full h-full">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}>
						{/* Background Image with Overlay */}
						<div
							className="w-full h-full bg-cover bg-center relative"
							style={{
								backgroundImage: `url(${slide.image})`,
								backgroundColor: "#F8F9FA", // Fallback while images load
							}}>
							{/* Elegant Overlay */}
							<div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30"></div>

							{/* Content Overlay */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center max-w-4xl mx-auto px-6">
									<h2 className="text-5xl md:text-7xl font-['var(--font-tangerine)'] text-black mb-4 leading-tight">
										{slide.title}
									</h2>
									<h3 className="text-xl md:text-2xl text-[#343434] mb-6 font-light">
										{slide.subtitle}
									</h3>
									<p className="text-lg text-[#6C757D] max-w-2xl mx-auto leading-relaxed">
										{slide.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}

				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
					<ChevronLeft className="w-6 h-6 text-[#343434]" />
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
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
									: "bg-white/50 hover:bg-white/70"
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
	);
};

export default IntroHeroSection;
