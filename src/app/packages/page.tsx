"use client";
import { useState } from "react";
import {
	Music,
	Plus,
	CheckCircle,
	ArrowRight,
	Sparkles,
	Clock,
	Users,
} from "lucide-react";
import Link from "next/link";

interface AddOn {
	id: string;
	name: string;
	price: string;
	description?: string;
	image?: string;
}

const PackagesPage = () => {
	const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

	const essentialsPackage = {
		name: "THE ESSENTIALS",
		price: "$1,595",
		includes: [
			"5 HOURS OF SERVICES",
			"DJ/MC",
			"SOUND SYSTEM",
			"DANCE FLOOR LIGHTING",
			"ONLINE PLANNING",
			"UNLIMITED CONSULTATIONS",
		],
	};

	const addOns: AddOn[] = [
		{
			id: "additional-hour",
			name: "Additional Hour",
			price: "$300",
			description: "Extend your event coverage",
		},
		{
			id: "ceremony-service",
			name: "Ceremony Service",
			price: "$250",
			description: "Complete ceremony audio setup",
		},
		{
			id: "cocktail-hour",
			name: "Cocktail Hour Service",
			price: "$200",
			description: "Background music during cocktail hour",
		},
		{
			id: "photobooth",
			name: "Photobooth",
			price: "$800",
			description: "Complete photo booth experience",
		},
		{
			id: "intelligent-lighting",
			name: "Intelligent Lighting (x2)",
			price: "$200",
			description: "Advanced moving light effects",
			image:
				"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop",
		},
		{
			id: "cold-sparklers",
			name: "Cold Sparklers (x2)",
			price: "$200",
			description: "Safe indoor sparkler effects",
			image:
				"https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
		},
		{
			id: "up-lighting",
			name: "Up Lighting (x10)",
			price: "$400",
			description: "Venue ambient lighting package",
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop",
		},
		{
			id: "dancing-clouds",
			name: "Dancing in The Clouds",
			price: "$350",
			description: "Dry ice first dance effect",
			image:
				"https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=300&h=200&fit=crop",
		},
		{
			id: "monogram",
			name: "Monogram (x1)",
			price: "$200",
			description: "Custom name/date projection",
		},
	];

	const toggleAddOn = (addOnId: string): void => {
		setSelectedAddOns((prev) =>
			prev.includes(addOnId)
				? prev.filter((id) => id !== addOnId)
				: [...prev, addOnId]
		);
	};

	const calculateTotal = (): number => {
		const basePrice = 1595;
		const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
			const addOn = addOns.find((a) => a.id === addOnId);
			if (addOn) {
				const price = parseInt(addOn.price.replace("$", "").replace(",", ""));
				return total + price;
			}
			return total;
		}, 0);
		return basePrice + addOnTotal;
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-4xl mx-auto text-center">
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="text-left">
							<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
								BLACK TIE
								<span className="block text-[#343434]">EVENTS</span>
							</h1>
						</div>
					</div>
					<h3 className="text-3xl md:text-4xl font-black text-[#343434] mb-8">
						DJ SERVICE PRICING
					</h3>
				</div>
			</section>

			{/* Main Package Section */}
			<section className="py-16 px-6">
				<div className="max-w-4xl mx-auto">
					{/* The Essentials Package */}
					<div className="bg-[#E8E4D9] rounded-3xl p-8 md:p-12 mb-12 text-center">
						<h3 className="text-2xl md:text-3xl font-black text-[#343434] mb-6">
							{essentialsPackage.name}
						</h3>
						<div className="text-5xl md:text-6xl font-black text-[#343434] mb-8">
							{essentialsPackage.price}
						</div>

						<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
							{essentialsPackage.includes.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-3 text-[#343434] font-semibold">
									<div className="w-2 h-2 bg-[#343434] rounded-full"></div>
									<span>{item}</span>
								</div>
							))}
						</div>
					</div>

					{/* Add-Ons Section */}
					<div className="bg-[#E8E4D9] rounded-3xl p-8 md:p-12">
						<h3 className="text-2xl md:text-3xl font-black text-[#343434] mb-8 text-center">
							ADD ONS
						</h3>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{addOns.map((addOn) => (
								<div
									key={addOn.id}
									className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
										selectedAddOns.includes(addOn.id)
											? "border-[#343434] shadow-lg transform scale-105"
											: "border-transparent hover:border-[#343434]/30 hover:shadow-md"
									}`}
									onClick={() => toggleAddOn(addOn.id)}>
									{/* Add-On Image */}
									{addOn.image && (
										<div className="aspect-video rounded-lg overflow-hidden mb-4">
											<img
												src={addOn.image}
												alt={addOn.name}
												className="w-full h-full object-cover"
											/>
										</div>
									)}

									{/* Add-On Content */}
									<div className="text-center">
										<h4 className="font-bold text-[#343434] text-lg mb-2">
											{addOn.name}
										</h4>
										<div className="text-2xl font-black text-[#343434] mb-3">
											{addOn.price}
										</div>
										{addOn.description && (
											<p className="text-[#6C757D] text-sm mb-4">
												{addOn.description}
											</p>
										)}

										{/* Add/Remove Button */}
										<button
											className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-300 ${
												selectedAddOns.includes(addOn.id)
													? "bg-[#343434] text-white"
													: "bg-[#F8F9FA] text-[#343434] hover:bg-[#343434] hover:text-white"
											}`}>
											{selectedAddOns.includes(addOn.id) ? (
												<>
													<CheckCircle className="w-4 h-4 inline mr-2" />
													Added
												</>
											) : (
												<>
													<Plus className="w-4 h-4 inline mr-2" />
													Add
												</>
											)}
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Package Summary */}
					{selectedAddOns.length > 0 && (
						<div className="mt-12 bg-[#343434] text-white rounded-3xl p-8">
							<h3 className="text-2xl font-bold mb-6 text-center">
								Your Package Summary
							</h3>

							<div className="space-y-3 mb-6">
								<div className="flex justify-between items-center">
									<span className="font-semibold">The Essentials Package</span>
									<span className="font-bold">$1,595</span>
								</div>

								{selectedAddOns.map((addOnId) => {
									const addOn = addOns.find((a) => a.id === addOnId);
									if (!addOn) return null;
									return (
										<div
											key={addOnId}
											className="flex justify-between items-center text-white/90">
											<span>{addOn.name}</span>
											<span>{addOn.price}</span>
										</div>
									);
								})}

								<div className="border-t border-white/20 pt-3 mt-4">
									<div className="flex justify-between items-center text-xl font-bold">
										<span>Total Package Price</span>
										<span>${calculateTotal().toLocaleString()}</span>
									</div>
								</div>
							</div>

							<div className="text-center">
								<Link
									href="/services/reserve-your-date"
									className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
									Book This Package
									<ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<Sparkles className="w-16 h-16 mx-auto mb-6" />
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Create Your Perfect Event?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Customize your package with our add-ons and let's make your
						celebration unforgettable.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/services/reserve-your-date"
							className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
							Book The Essentials Package
							<ArrowRight className="w-5 h-5" />
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center gap-3 bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
							Get Custom Quote
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
export default PackagesPage;
