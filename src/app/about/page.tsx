"use client";
import {
	Music,
	Award,
	Users,
	Calendar,
	Heart,
	Star,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Text Content */}
						<div>
							<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
								ABOUT
								<span className="block text-[#343434]">BLACK TIE EVENTS</span>
							</h1>
							<p className="text-xl text-[#6C757D] leading-relaxed mb-8">
								Founded in 2009, Black Tie Events has been creating
								unforgettable moments and bringing joy to celebrations across
								the region. What started as a passion for music and
								entertainment has grown into a premier event services company.
							</p>
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									Est. 2009
								</div>
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									15+ Years Experience
								</div>
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									1000+ Events
								</div>
							</div>
						</div>

						{/* Image */}
						<div className="relative">
							<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop"
									alt="DJ at work"
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Floating Stats */}
							<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
								<div className="text-2xl font-black text-[#343434]">500+</div>
								<div className="text-sm text-[#6C757D]">Happy Clients</div>
							</div>
							<div className="absolute -top-6 -right-6 bg-[#343434] text-white rounded-2xl p-6 shadow-xl">
								<div className="text-2xl font-black">5.0★</div>
								<div className="text-sm opacity-90">Rating</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-8 text-[#343434]">
						Our Story
					</h2>
					<div className="prose prose-lg max-w-none text-[#6C757D] space-y-6">
						<p className="text-lg leading-relaxed">
							Black Tie Events was born from a simple belief: every celebration
							deserves to be extraordinary. Founded in 2009 by a passionate
							music enthusiast, we started with just a dream and a small sound
							system, determined to bring joy to people's most important
							moments.
						</p>
						<p className="text-lg leading-relaxed">
							Over the years, we've grown from intimate gatherings to grand
							celebrations, always maintaining our commitment to excellence and
							personal touch. Our team has evolved, our equipment has advanced,
							but our core mission remains the same: creating magical
							experiences that last a lifetime.
						</p>
						<p className="text-lg leading-relaxed">
							Today, Black Tie Events is proud to be one of the region's most
							trusted event service providers, specializing in DJ services,
							equipment rental, and photo booth experiences. We've had the honor
							of being part of over 1,000 celebrations, each one unique and
							special in its own way.
						</p>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 px-6 bg-[#F8F9FA]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-[#343434]">
						What Drives Us
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="bg-[#343434] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Heart className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold text-[#343434] mb-4">Passion</h3>
							<p className="text-[#6C757D] leading-relaxed">
								We're passionate about music, entertainment, and creating
								moments that matter. Every event is personal to us.
							</p>
						</div>

						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="bg-[#343434] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Award className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold text-[#343434] mb-4">
								Excellence
							</h3>
							<p className="text-[#6C757D] leading-relaxed">
								We never compromise on quality. From our equipment to our
								service, everything meets the highest standards.
							</p>
						</div>

						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="bg-[#343434] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Users className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold text-[#343434] mb-4">
								Connection
							</h3>
							<p className="text-[#6C757D] leading-relaxed">
								We believe in building lasting relationships with our clients
								and being part of their special moments.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Step-by-Step Process Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-[#343434]">
						How We Work
					</h2>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Step 1 */}
						<div className="relative text-center group">
							<div className="bg-[#343434] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
								1
							</div>
							<h3 className="text-2xl font-bold text-[#343434] mb-4">
								Consultation
							</h3>
							<p className="text-[#6C757D] leading-relaxed mb-6">
								We start with understanding your vision, preferences, and event
								requirements. Every detail matters to us.
							</p>
							<div className="hidden lg:block absolute top-10 -right-4 text-[#E9ECEF]">
								<ArrowRight className="w-8 h-8" />
							</div>
						</div>

						{/* Step 2 */}
						<div className="relative text-center group">
							<div className="bg-[#343434] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
								2
							</div>
							<h3 className="text-2xl font-bold text-[#343434] mb-4">
								Planning
							</h3>
							<p className="text-[#6C757D] leading-relaxed mb-6">
								We create a customized plan that includes equipment, timeline,
								playlist, and all the special touches for your event.
							</p>
							<div className="hidden lg:block absolute top-10 -right-4 text-[#E9ECEF]">
								<ArrowRight className="w-8 h-8" />
							</div>
						</div>

						{/* Step 3 */}
						<div className="text-center group">
							<div className="bg-[#343434] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
								3
							</div>
							<h3 className="text-2xl font-bold text-[#343434] mb-4">
								Celebration
							</h3>
							<p className="text-[#6C757D] leading-relaxed mb-6">
								On event day, we handle everything so you can focus on enjoying
								your special moment with your guests.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Links Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-[#343434]">
						Explore More
					</h2>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Testimonials Card */}
						<Link href="/about/testimonials" className="group">
							<div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
								<Star className="w-16 h-16 text-yellow-400 mx-auto mb-6 fill-current" />
								<h3 className="text-2xl font-bold text-[#343434] mb-4 group-hover:text-[#2c2c2c]">
									What Our Clients Say
								</h3>
								<p className="text-[#6C757D] leading-relaxed mb-6">
									Read testimonials from our happy clients and see why they
									chose Black Tie Events for their special moments.
								</p>
								<div className="flex items-center justify-center gap-2 text-[#343434] font-semibold group-hover:gap-3 transition-all duration-300">
									Read Reviews
									<ArrowRight className="w-5 h-5" />
								</div>
							</div>
						</Link>

						{/* FAQ Card */}
						<Link href="/about/faq" className="group">
							<div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
								<div className="w-16 h-16 bg-[#343434] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
									?
								</div>
								<h3 className="text-2xl font-bold text-[#343434] mb-4 group-hover:text-[#2c2c2c]">
									FAQs
								</h3>
								<p className="text-[#6C757D] leading-relaxed mb-6">
									Find answers to common questions about our services, booking
									process, and what to expect.
								</p>
								<div className="flex items-center justify-center gap-2 text-[#343434] font-semibold group-hover:gap-3 transition-all duration-300">
									Get Answers
									<ArrowRight className="w-5 h-5" />
								</div>
							</div>
						</Link>

						{/* Gallery Card */}
						<Link href="/about/gallery" className="group">
							<div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
								<Music className="w-16 h-16 text-[#343434] mx-auto mb-6" />
								<h3 className="text-2xl font-bold text-[#343434] mb-4 group-hover:text-[#2c2c2c]">
									Gallery
								</h3>
								<p className="text-[#6C757D] leading-relaxed mb-6">
									Browse through our collection of past events and see the magic
									we create at every celebration.
								</p>
								<div className="flex items-center justify-center gap-2 text-[#343434] font-semibold group-hover:gap-3 transition-all duration-300">
									View Gallery
									<ArrowRight className="w-5 h-5" />
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Start Planning?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Let's create something amazing together. Get in touch to discuss
						your event.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
						Contact Us Today
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
