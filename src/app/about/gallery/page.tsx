"use client";
import { useState } from "react";
import {
	X,
	ChevronLeft,
	ChevronRight,
	Camera,
	Calendar,
	Users,
} from "lucide-react";

export default function GallerySection() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [filter, setFilter] = useState("all");

	const galleryImages = [
		{
			id: 1,
			src: "https://miro.medium.com/v2/resize:fit:1200/1*3cuAOCHTDcisZNglfVOvBQ.jpeg",
			category: "wedding",
			title: "Elegant Wedding Reception",
			description: "Beautiful outdoor wedding with premium lighting setup",
			event: "Wedding",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
			category: "corporate",
			title: "Corporate Gala Event",
			description: "Professional DJ setup for corporate celebration",
			event: "Corporate Event",
		},
		{
			id: 3,
			src: "https://www.aiafood.com/sites/default/files/styles/scale_1920/public/articles/thumb_0000_festa_a_sorpresa_istock_000090269749_large.jpg?itok=QjakW6nV",
			category: "birthday",
			title: "Birthday Party Celebration",
			description: "Colorful lighting and energetic atmosphere",
			event: "Birthday Party",
		},
		{
			id: 4,
			src: "https://i2.wp.com/dance-floor-rental.com/img/LED-Dance-Floor-Rental-Florida/LED-Dance-Floor-Rental-Miami/Lighted-Disco-Dance-Floor-Rental-Miami.jpg?w=1200&ssl=1",
			category: "wedding",
			title: "Dance Floor Magic",
			description: "Guests dancing under spectacular lighting",
			event: "Wedding Reception",
		},
		{
			id: 5,
			src: "https://png.pngtree.com/thumb_back/fh260/background/20230902/pngtree-a-recording-studio-has-music-equipment-and-keyboard-image_13160066.jpg",
			category: "equipment",
			title: "Professional Equipment Setup",
			description: "Premium sound system and lighting rig",
			event: "Equipment Showcase",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
			category: "corporate",
			title: "Conference After Party",
			description: "Corporate event with full DJ and lighting service",
			event: "Corporate Party",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
			category: "birthday",
			title: "Sweet Sixteen Celebration",
			description: "Pink themed party with custom lighting",
			event: "Sweet 16",
		},
		{
			id: 8,
			src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
			category: "wedding",
			title: "Outdoor Wedding Setup",
			description: "Garden wedding with elegant sound system",
			event: "Garden Wedding",
		},
		{
			id: 9,
			src: "https://cromoreevents.co.uk/wp-content/uploads/2019/10/photobooths.jpg",
			category: "equipment",
			title: "Photo Booth Fun",
			description: "Guests enjoying our premium photo booth",
			event: "Photo Booth",
		},
	];

	const categories = [
		{ id: "all", name: "All Events" },
		{ id: "wedding", name: "Weddings" },
		{ id: "corporate", name: "Corporate" },
		{ id: "birthday", name: "Birthdays" },
		{ id: "equipment", name: "Equipment" },
	];

	const filteredImages =
		filter === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === filter);

	const openLightbox = (index: number) => {
		setSelectedImage(index);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	const nextImage = () => {
		if (selectedImage !== null) {
			setSelectedImage((selectedImage + 1) % filteredImages.length);
		}
	};

	const prevImage = () => {
		if (selectedImage !== null) {
			setSelectedImage(
				(selectedImage - 1 + filteredImages.length) % filteredImages.length
			);
		}
	};

	return (
		<section className="py-24 px-6 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<Camera className="w-16 h-16 text-[#343434] mx-auto mb-6" />
					<h2 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)'] relative">
						EVENT <span className="text-[#343434]">GALLERY</span>
						<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#343434] to-[#6C757D] rounded-full"></div>
					</h2>
					<p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
						Take a look at some of our recent events and see the magic we create
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setFilter(category.id)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								filter === category.id
									? "bg-[#343434] text-white shadow-lg"
									: "bg-[#F8F9FA] text-[#343434] hover:bg-[#E9ECEF]"
							}`}>
							{category.name}
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredImages.map((image, index) => (
						<div
							key={image.id}
							className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
							onClick={() => openLightbox(index)}>
							<div className="aspect-[4/3] overflow-hidden">
								<img
									src={image.src}
									alt={image.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
									<h3 className="text-lg font-bold mb-2">{image.title}</h3>
									<p className="text-sm text-white/90 mb-2">
										{image.description}
									</p>
									<div className="flex items-center gap-2 text-xs text-white/80">
										<Calendar className="w-4 h-4" />
										<span>{image.event}</span>
									</div>
								</div>
							</div>

							{/* Hover Icon */}
							<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Camera className="w-5 h-5 text-white" />
							</div>
						</div>
					))}
				</div>

				{/* Stats */}
				<div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
					<div className="bg-[#F8F9FA] rounded-2xl p-8">
						<Users className="w-12 h-12 text-[#343434] mx-auto mb-4" />
						<div className="text-3xl font-black text-[#343434] mb-2">1000+</div>
						<div className="text-[#6C757D]">Events Captured</div>
					</div>
					<div className="bg-[#F8F9FA] rounded-2xl p-8">
						<Calendar className="w-12 h-12 text-[#343434] mx-auto mb-4" />
						<div className="text-3xl font-black text-[#343434] mb-2">5+</div>
						<div className="text-[#6C757D]">Years Experience</div>
					</div>
					<div className="bg-[#F8F9FA] rounded-2xl p-8">
						<Camera className="w-12 h-12 text-[#343434] mx-auto mb-4" />
						<div className="text-3xl font-black text-[#343434] mb-2">50K+</div>
						<div className="text-[#6C757D]">Photos Taken</div>
					</div>
				</div>
			</div>

			{/* Lightbox Modal */}
			{selectedImage !== null && (
				<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
					<div className="relative max-w-4xl max-h-full">
						{/* Close Button */}
						<button
							onClick={closeLightbox}
							className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300 z-10">
							<X className="w-6 h-6" />
						</button>

						{/* Navigation Buttons */}
						<button
							onClick={prevImage}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300">
							<ChevronLeft className="w-6 h-6" />
						</button>

						<button
							onClick={nextImage}
							className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300">
							<ChevronRight className="w-6 h-6" />
						</button>

						{/* Image */}
						<img
							src={filteredImages[selectedImage].src}
							alt={filteredImages[selectedImage].title}
							className="max-w-full max-h-full object-contain rounded-lg"
						/>

						{/* Image Info */}
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
							<h3 className="text-xl font-bold mb-2">
								{filteredImages[selectedImage].title}
							</h3>
							<p className="text-white/90">
								{filteredImages[selectedImage].description}
							</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
