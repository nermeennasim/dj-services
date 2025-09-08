"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const testimonials = [
		{
			id: 1,
			name: "Sarah Johnson",
			event: "Wedding Reception",
			rating: 5,
			text: "Absolutely incredible! The DJ kept everyone dancing all night long. The song request feature was a huge hit with our guests. Professional setup and amazing sound quality.",
			image: "https://static.baza.farpost.ru/v/1620705060414_bulletin",
		},
		{
			id: 2,
			name: "Michael Rodriguez",
			event: "Corporate Event",
			rating: 5,
			text: "Best DJ service we've ever used for our company events. The equipment rental was seamless and the photo booth was a massive hit. Highly recommend!",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
		},
		{
			id: 3,
			name: "Emily Chen",
			event: "Birthday Party",
			rating: 5,
			text: "The team made our daughter's sweet 16 unforgettable! Great music selection, professional lighting, and the photo booth photos are still being shared months later.",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
		},
		{
			id: 4,
			name: "David Thompson",
			event: "Anniversary Celebration",
			rating: 5,
			text: "From start to finish, everything was perfect. The DJ read the crowd perfectly and the song requests kept everyone engaged. Professional and fun!",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		},
		{
			id: 5,
			name: "Jessica Martinez",
			event: "Quinceañera",
			rating: 5,
			text: "They understood our cultural music needs perfectly. Mixed traditional and modern songs flawlessly. The equipment quality was top-notch!",
			image:
				"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
		},
	];

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className="py-24 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)'] relative">
						CLIENT <span className="text-[#343434]">TESTIMONIALS</span>
						<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#343434] to-[#6C757D] rounded-full"></div>
					</h2>
					<p className="text-xl text-[#6C757D] max-w-2xl mx-auto">
						Don't just take our word for it - hear what our amazing clients have
						to say
					</p>
				</div>

				{/* Testimonials Carousel */}
				<div className="relative">
					{/* Main Testimonial Card */}
					<div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
						{/* Background Pattern */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#343434]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

						<div className="relative z-10">
							{/* Rating Stars */}
							<div className="flex justify-center mb-6">
								{[...Array(testimonials[currentTestimonial].rating)].map(
									(_, i) => (
										<Star
											key={i}
											className="w-6 h-6 text-yellow-400 fill-current"
										/>
									)
								)}
							</div>

							{/* Testimonial Text */}
							<blockquote className="text-xl md:text-2xl text-[#343434] text-center leading-relaxed mb-8 font-medium">
								"{testimonials[currentTestimonial].text}"
							</blockquote>

							{/* Client Info */}
							<div className="flex items-center justify-center gap-4">
								<img
									src={testimonials[currentTestimonial].image}
									alt={testimonials[currentTestimonial].name}
									className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
								/>
								<div className="text-center">
									<h4 className="font-bold text-[#343434] text-lg">
										{testimonials[currentTestimonial].name}
									</h4>
									<p className="text-[#6C757D]">
										{testimonials[currentTestimonial].event}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={prevTestimonial}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-[#343434] transition-colors duration-300 shadow-lg">
						<ChevronLeft className="w-6 h-6" />
					</button>

					<button
						onClick={nextTestimonial}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-[#343434] transition-colors duration-300 shadow-lg">
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>

				{/* Dots Indicator */}
				<div className="flex justify-center mt-8 gap-2">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentTestimonial(index)}
							className={`w-3 h-3 rounded-full transition-colors duration-300 ${
								currentTestimonial === index
									? "bg-[#343434]"
									: "bg-[#6C757D]/30"
							}`}
						/>
					))}
				</div>

				{/* Stats */}
				<div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
					<div className="bg-white/50 rounded-2xl p-6">
						<div className="text-3xl font-black text-[#343434] mb-2">50+</div>
						<div className="text-[#6C757D]">Happy Clients</div>
					</div>
					<div className="bg-white/50 rounded-2xl p-6">
						<div className="text-3xl font-black text-[#343434] mb-2">5.0</div>
						<div className="text-[#6C757D]">Average Rating</div>
					</div>
					<div className="bg-white/50 rounded-2xl p-6">
						<div className="text-3xl font-black text-[#343434] mb-2">100+</div>
						<div className="text-[#6C757D]">Events Completed</div>
					</div>
				</div>
			</div>
		</section>
	);
}
