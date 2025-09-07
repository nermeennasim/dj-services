"use client";
import { useState } from "react";
import {
	Camera,
	Star,
	Heart,
	Gift,
	Sparkles,
	Download,
	Share2,
	ArrowRight,
	CheckCircle,
	X,
} from "lucide-react";
import Link from "next/link";

interface Package {
	id: number;
	name: string;
	price: string;
	duration: string;
	features: string[];
	popular: boolean;
}

interface Photo {
	id: number;
	src: string;
	alt: string;
}

interface Feature {
	icon: any;
	title: string;
	description: string;
}

const PhotoBoothPage = () => {
	const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
	const [lightboxImage, setLightboxImage] = useState<Photo | null>(null);

	const packages: Package[] = [
		{
			id: 1,
			name: "Essential",
			price: "$299",
			duration: "4 hours",
			features: [
				"Professional photo booth setup",
				"Unlimited photos during event",
				"Instant photo prints",
				"Basic props collection",
				"Digital gallery access",
				"Setup & breakdown included",
			],
			popular: false,
		},
		{
			id: 2,
			name: "Premium",
			price: "$499",
			duration: "6 hours",
			features: [
				"Everything in Essential",
				"Custom photo templates",
				"Extended props collection",
				"Social media sharing",
				"USB with all photos",
				"Attendant included",
				"Backdrop customization",
			],
			popular: true,
		},
		{
			id: 3,
			name: "Deluxe",
			price: "$799",
			duration: "8 hours",
			features: [
				"Everything in Premium",
				"Video messaging feature",
				"Green screen technology",
				"Premium backdrop options",
				"Scrapbook creation",
				"Same-day photo delivery",
				"Multiple print sizes",
			],
			popular: false,
		},
	];

	const samplePhotos: Photo[] = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop",
			alt: "Wedding photo booth fun",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
			alt: "Corporate event photo booth",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
			alt: "Birthday party photo booth",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=400&fit=crop",
			alt: "Anniversary photo booth",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop",
			alt: "Graduation photo booth",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=400&fit=crop",
			alt: "Family event photo booth",
		},
	];

	const features: Feature[] = [
		{
			icon: <Camera className="w-8 h-8" />,
			title: "High-Quality Camera",
			description:
				"Professional DSLR camera with studio lighting for perfect shots every time.",
		},
		{
			icon: <Star className="w-8 h-8" />,
			title: "Instant Prints",
			description:
				"Get your photos printed instantly with our high-speed professional printer.",
		},
		{
			icon: <Gift className="w-8 h-8" />,
			title: "Fun Props",
			description:
				"Extensive collection of props, signs, and accessories to make every photo memorable.",
		},
		{
			icon: <Share2 className="w-8 h-8" />,
			title: "Digital Sharing",
			description:
				"Share photos instantly to social media or get digital copies via email.",
		},
		{
			icon: <Heart className="w-8 h-8" />,
			title: "Custom Templates",
			description:
				"Personalized photo templates with your event details, names, and dates.",
		},
		{
			icon: <Download className="w-8 h-8" />,
			title: "Digital Gallery",
			description:
				"Access all your photos online in a private gallery for easy downloading.",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Text Content */}
						<div>
							<Camera className="w-16 h-16 text-[#343434] mb-6" />
							<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
								PHOTO BOOTH
								<span className="block text-[#343434]">SERVICES</span>
							</h1>
							<p className="text-xl text-[#6C757D] leading-relaxed mb-8">
								Capture unforgettable moments with our premium photo booth
								services. Professional equipment, unlimited photos, and instant
								prints that your guests will treasure forever.
							</p>
							<div className="flex flex-wrap gap-4 mb-8">
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									Unlimited Photos
								</div>
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									Instant Prints
								</div>
								<div className="bg-[#343434] text-white px-4 py-2 rounded-full font-semibold">
									Fun Props
								</div>
							</div>
							<Link
								href="/services/reserve-your-date"
								className="inline-flex items-center gap-3 bg-[#343434] text-white hover:bg-[#2c2c2c] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
								Book Now
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>

						{/* Image */}
						<div className="relative">
							<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop"
									alt="Photo booth in action"
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Floating Stats */}
							<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
								<div className="text-2xl font-black text-[#343434]">1000+</div>
								<div className="text-sm text-[#6C757D]">Photos Taken</div>
							</div>
							<div className="absolute -top-6 -right-6 bg-[#343434] text-white rounded-2xl p-6 shadow-xl">
								<div className="text-2xl font-black">100%</div>
								<div className="text-sm opacity-90">Fun Guarantee</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Why Choose Our Photo Booth?
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Professional equipment, unlimited photos, and memories that last
							forever
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
								<div className="text-[#343434] mx-auto mb-6">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-[#343434] mb-4">
									{feature.title}
								</h3>
								<p className="text-[#6C757D] leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Packages Section */}
			<section className="py-20 px-6 bg-[#F8F9FA]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Photo Booth Packages
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Choose the perfect package for your event size and needs
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{packages.map((pkg) => (
							<div
								key={pkg.id}
								className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
									pkg.popular
										? "transform scale-105 border-4 border-[#343434]"
										: ""
								}`}>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#343434] text-white px-6 py-2 rounded-full font-bold text-sm">
										Most Popular
									</div>
								)}

								<div className="text-center mb-6">
									<h3 className="text-2xl font-bold text-[#343434] mb-2">
										{pkg.name}
									</h3>
									<div className="text-4xl font-black text-[#343434] mb-2">
										{pkg.price}
									</div>
									<div className="text-[#6C757D]">{pkg.duration}</div>
								</div>

								<ul className="space-y-3 mb-8">
									{pkg.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center gap-3 text-[#6C757D]">
											<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<Link
									href="/services/reserve-your-date"
									className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${
										pkg.popular
											? "bg-[#343434] text-white hover:bg-[#2c2c2c]"
											: "bg-[#F8F9FA] text-[#343434] hover:bg-[#343434] hover:text-white"
									}`}>
									Book This Package
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Sample Photos
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							See the joy and fun captured in our photo booth sessions
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{samplePhotos.map((photo) => (
							<div
								key={photo.id}
								className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
								onClick={() => setLightboxImage(photo)}>
								<div className="aspect-square overflow-hidden">
									<img
										src={photo.src}
										alt={photo.alt}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<Camera className="w-8 h-8 text-white" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-20 px-6 bg-[#F8F9FA]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							How It Works
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Simple setup, maximum fun, lasting memories
						</p>
					</div>

					<div className="grid lg:grid-cols-4 gap-8">
						{[
							{
								step: "1",
								title: "Setup",
								description:
									"We arrive early to set up the photo booth, props, and backdrop according to your event theme.",
							},
							{
								step: "2",
								title: "Fun Begins",
								description:
									"Guests enjoy unlimited photos with our extensive prop collection and professional lighting.",
							},
							{
								step: "3",
								title: "Instant Prints",
								description:
									"Photos are printed instantly with custom templates featuring your event details.",
							},
							{
								step: "4",
								title: "Digital Delivery",
								description:
									"All photos are uploaded to a private gallery for easy access and sharing.",
							},
						].map((item, index) => (
							<div key={index} className="text-center">
								<div className="bg-[#343434] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
									{item.step}
								</div>
								<h3 className="text-xl font-bold text-[#343434] mb-4">
									{item.title}
								</h3>
								<p className="text-[#6C757D] leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Add-ons Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black mb-6 text-[#343434]">
							Popular Add-ons
						</h2>
						<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
							Enhance your photo booth experience with these extras
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								name: "Green Screen",
								price: "+$150",
								description: "Custom backgrounds for any theme",
							},
							{
								name: "Video Messages",
								price: "+$100",
								description: "Record video messages for the couple",
							},
							{
								name: "Scrapbook",
								price: "+$75",
								description: "Guest book with photo copies",
							},
							{
								name: "Extra Hours",
								price: "+$100/hr",
								description: "Extend your photo booth fun",
							},
						].map((addon, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
								<h3 className="font-bold text-[#343434] text-lg mb-2">
									{addon.name}
								</h3>
								<div className="text-2xl font-bold text-[#343434] mb-3">
									{addon.price}
								</div>
								<p className="text-[#6C757D] text-sm">{addon.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-[#343434] text-white">
				<div className="max-w-4xl mx-auto text-center">
					<Sparkles className="w-16 h-16 mx-auto mb-6" />
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						Ready to Create Amazing Memories?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Book your photo booth today and give your guests an experience
						they'll never forget.
					</p>
					<Link
						href="/services/reserve-your-date"
						className="inline-flex items-center gap-3 bg-white text-[#343434] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
						Book Your Photo Booth
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
};
export default PhotoBoothPage;
