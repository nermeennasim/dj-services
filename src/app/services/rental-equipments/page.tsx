"use client";
import { useState } from "react";
import {
	Speaker,
	Mic,
	Lightbulb,
	Music,
	Truck,
	Clock,
	Star,
	ArrowRight,
	CheckCircle,
	ShoppingCart,
	Phone,
	Mail,
} from "lucide-react";
import Link from "next/link";

interface RentalItem {
	id: number;
	name: string;
	category: string;
	price: string;
	duration: string;
	description: string;
	features: string[];
	image: string;
	popular?: boolean;
	delivery?: boolean;
}

interface RentalCategory {
	id: string;
	name: string;
	icon: any;
	description: string;
}

const RentalEquipmentsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [cart, setCart] = useState<number[]>([]);

	const categories: RentalCategory[] = [
		{
			id: "all",
			name: "All Equipment",
			icon: <Music className="w-6 h-6" />,
			description: "Browse all rental equipment",
		},
		{
			id: "sound",
			name: "Sound Systems",
			icon: <Speaker className="w-6 h-6" />,
			description: "Professional audio equipment",
		},
		{
			id: "lighting",
			name: "Lighting",
			icon: <Lightbulb className="w-6 h-6" />,
			description: "Event lighting solutions",
		},
		{
			id: "microphones",
			name: "Microphones",
			icon: <Mic className="w-6 h-6" />,
			description: "Wireless and wired microphones",
		},
	];

	const rentalItems: RentalItem[] = [
		{
			id: 1,
			name: "Professional PA System",
			category: "sound",
			price: "$150",
			duration: "per day",
			description:
				"Complete professional PA system perfect for events up to 200 guests",
			features: [
				'2x 15" Main Speakers',
				"Powered Mixer",
				"All Cables Included",
				"Setup Instructions",
			],
			image: "/eq01.jpg",
			popular: true,
			delivery: true,
		},
		{
			id: 2,
			name: "LED Uplighting Package",
			category: "lighting",
			price: "$200",
			duration: "per day",
			description: "Transform your venue with professional LED uplighting",
			features: [
				"12x LED Uplight Fixtures",
				"Wireless DMX Control",
				"Multiple Color Options",
				"Remote Control",
			],
			image:
				"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
			popular: true,
			delivery: true,
		},
		{
			id: 3,
			name: "Wireless Microphone Set",
			category: "microphones",
			price: "$75",
			duration: "per day",
			description:
				"Professional wireless microphone system for speeches and presentations",
			features: [
				"2x Handheld Wireless Mics",
				"Dual Receiver",
				"8-Hour Battery Life",
				"Crystal Clear Audio",
			],
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
			delivery: true,
		},
		{
			id: 4,
			name: "Compact Sound System",
			category: "sound",
			price: "$100",
			duration: "per day",
			description: "Perfect for smaller intimate gatherings and presentations",
			features: [
				"Portable Bluetooth Speaker",
				"Built-in Mixer",
				"Microphone Input",
				"Easy Setup",
			],
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
			delivery: false,
		},
		{
			id: 5,
			name: "Dance Floor Lighting",
			category: "lighting",
			price: "$175",
			duration: "per day",
			description:
				"Create an amazing dance floor atmosphere with moving lights",
			features: [
				"4x Moving Head Lights",
				"Sound-Activated Mode",
				"DMX Control",
				"Multiple Patterns",
			],
			image:
				"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
			delivery: true,
		},
		{
			id: 6,
			name: "Lapel Microphone System",
			category: "microphones",
			price: "$50",
			duration: "per day",
			description: "Hands-free wireless lapel microphone for presentations",
			features: [
				"Wireless Lapel Mic",
				"Belt Pack Transmitter",
				"Receiver Unit",
				"Discreet Design",
			],
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
			delivery: false,
		},
		{
			id: 7,
			name: "Stage Lighting Package",
			category: "lighting",
			price: "$300",
			duration: "per day",
			description:
				"Professional stage lighting for performances and presentations",
			features: [
				"6x LED Par Lights",
				"Lighting Controller",
				"Truss System",
				"Professional Setup",
			],
			image:
				"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
			delivery: true,
		},
		{
			id: 8,
			name: "Premium Sound Package",
			category: "sound",
			price: "$350",
			duration: "per day",
			description: "Our top-tier sound system for large events and concerts",
			features: [
				"Line Array Speakers",
				"Professional Mixing Board",
				"Multiple Input Options",
				"Sound Engineer Available",
			],
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
			popular: true,
			delivery: true,
		},
	];

	const filteredItems =
		selectedCategory === "all"
			? rentalItems
			: rentalItems.filter((item) => item.category === selectedCategory);

	const addToCart = (itemId: number): void => {
		setCart((prev) => [...prev, itemId]);
	};

	const removeFromCart = (itemId: number): void => {
		setCart((prev) => prev.filter((id) => id !== itemId));
	};

	const isInCart = (itemId: number): boolean => {
		return cart.includes(itemId);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center">
						<Speaker className="w-16 h-16 text-[#343434] mx-auto mb-6" />
						<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
							EQUIPMENT
							<span className="block text-[#343434]">RENTAL</span>
						</h1>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto mb-8">
							Professional-grade audio and lighting equipment for your perfect
							event. From intimate gatherings to large celebrations, we have
							everything you need.
						</p>

						<div className="flex flex-wrap justify-center gap-4 mb-8">
							<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
								Professional Grade
							</div>
							<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
								Delivery Available
							</div>
							<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
								Setup Included
							</div>
						</div>

						{/* Cart Summary */}
						{cart.length > 0 && (
							<div className="inline-block bg-[#343434] text-white px-6 py-3 rounded-full mb-6">
								<ShoppingCart className="w-5 h-5 inline mr-2" />
								{cart.length} item{cart.length !== 1 ? "s" : ""} selected
								<Link
									href="/services/reserve-your-date"
									className="ml-4 bg-white text-[#343434] px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
									Book Now
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-12 px-6 bg-white border-b border-[#E9ECEF]">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
									selectedCategory === category.id
										? "bg-[#343434] text-white shadow-lg"
										: "bg-[#F8F9FA] text-[#343434] hover:bg-[#E9ECEF]"
								}`}>
								{category.icon}
								{category.name}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Equipment Grid */}
			<section className="py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Professional Sound Equipment
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							QSC professional speaker systems with complete setup packages
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
						{filteredItems.map((item) => (
							<div
								key={item.id}
								className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-[#E9ECEF]">
								{/* Popular Badge */}
								{item.popular && (
									<div className="absolute top-4 left-4 bg-[#343434] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
										Popular
									</div>
								)}

								{/* Delivery Badge */}
								{item.delivery && (
									<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
										<Truck className="w-3 h-3 inline mr-1" />
										Delivery
									</div>
								)}

								{/* Image */}
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								{/* Content */}
								<div className="p-8">
									<div className="mb-6">
										<h3 className="text-2xl font-bold text-[#343434] mb-3 group-hover:text-[#2c2c2c] transition-colors">
											{item.name}
										</h3>
										<p className="text-[#6C757D] leading-relaxed mb-4">
											{item.description}
										</p>

										{/* Price */}
										<div className="flex items-center gap-2 mb-6">
											<span className="text-3xl font-black text-[#343434]">
												{item.price}
											</span>
											<span className="text-[#6C757D]">/{item.duration}</span>
										</div>
									</div>

									{/* Features */}
									<ul className="space-y-3 mb-8">
										{item.features.map((feature, index) => (
											<li
												key={index}
												className="flex items-center gap-3 text-[#6C757D]">
												<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
												<span>{feature}</span>
											</li>
										))}
									</ul>

									{/* Action Buttons */}
									<div className="space-y-3">
										{isInCart(item.id) ? (
											<button
												onClick={() => removeFromCart(item.id)}
												className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors duration-300">
												<CheckCircle className="w-5 h-5 inline mr-2" />
												Added to Cart
											</button>
										) : (
											<button
												onClick={() => addToCart(item.id)}
												className="w-full bg-[#343434] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#2c2c2c] transition-colors duration-300">
												<ShoppingCart className="w-5 h-5 inline mr-2" />
												Add to Cart
											</button>
										)}

										<button className="w-full bg-[#F8F9FA] text-[#343434] py-4 rounded-xl font-semibold text-lg hover:bg-[#E9ECEF] transition-colors duration-300 border border-[#E9ECEF]">
											View Details
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-6 bg-[#F8F9FA]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Rental Services
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							We don't just rent equipment - we provide complete solutions
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<Truck className="w-12 h-12 text-[#343434] mx-auto mb-6" />
							<h3 className="text-xl font-bold text-[#343434] mb-4">
								Delivery & Setup
							</h3>
							<p className="text-[#6C757D] leading-relaxed">
								We deliver and set up all equipment at your venue, ensuring
								everything works perfectly before your event starts.
							</p>
						</div>

						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<Clock className="w-12 h-12 text-[#343434] mx-auto mb-6" />
							<h3 className="text-xl font-bold text-[#343434] mb-4">
								24/7 Support
							</h3>
							<p className="text-[#6C757D] leading-relaxed">
								Technical support throughout your event. If anything goes wrong,
								we're just a phone call away.
							</p>
						</div>

						<div className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<Star className="w-12 h-12 text-[#343434] mx-auto mb-6" />
							<h3 className="text-xl font-bold text-[#343434] mb-4">
								Quality Guarantee
							</h3>
							<p className="text-[#6C757D] leading-relaxed">
								All equipment is professionally maintained and tested before
								every rental to ensure perfect performance.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing & Delivery Info */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Rental Information
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-[#F8F9FA] rounded-3xl p-8">
							<h3 className="text-2xl font-bold text-[#343434] mb-6">
								Delivery Areas
							</h3>
							<ul className="space-y-3 text-[#6C757D]">
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Free delivery within 15 miles</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>$25 delivery fee 15-30 miles</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Custom pricing for longer distances</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Pickup available at our location</span>
								</li>
							</ul>
						</div>

						<div className="bg-[#F8F9FA] rounded-3xl p-8">
							<h3 className="text-2xl font-bold text-[#343434] mb-6">
								Rental Terms
							</h3>
							<ul className="space-y-3 text-[#6C757D]">
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>24-hour minimum rental period</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Multi-day discounts available</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Setup and breakdown included</span>
								</li>
								<li className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Damage protection available</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Rent Equipment?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						{cart.length > 0
							? `You have ${cart.length} item${
									cart.length !== 1 ? "s" : ""
							  } selected. Book now to reserve your equipment.`
							: "Contact us for a custom quote or book your rental equipment today."}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/services/reserve-your-date"
							className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
							{cart.length > 0 ? "Book Selected Items" : "Book Equipment"}
							<ArrowRight className="w-5 h-5" />
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center gap-3 bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
							Get Custom Quote
							<Phone className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 px-6 bg-[#F8F9FA]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-[#343434] mb-6">
						Need Help Choosing?
					</h2>
					<p className="text-[#6C757D] mb-8">
						Our equipment specialists are here to help you select the perfect
						setup for your event.
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Phone className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">
								Call Our Experts
							</h3>
							<p className="text-[#6C757D]">(555) 123-4567</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<Mail className="w-8 h-8 text-[#343434] mx-auto mb-4" />
							<h3 className="font-semibold text-[#343434] mb-2">
								Email Questions
							</h3>
							<p className="text-[#6C757D]">rentals@blktieevents.com</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default RentalEquipmentsPage;
