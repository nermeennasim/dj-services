// Replace lucide-react imports with:
import { MapPin } from "lucide-react";
import {
	FaMusic,
	FaPhone,
	FaWhatsapp,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaMap,
	FaMapMarker,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const services = [
		{ name: "DJ Services", href: "/services/reserve-your-date" },
		{ name: "Equipment Rental", href: "/services/rental-equipments" },
		{ name: "Song Requests", href: "/services/request-song" },
		{ name: "Photo Booth", href: "/services/photobooth" },
	];

	const quickLinks = [
		{ name: "About Us", href: "/about" },
		{ name: "Testimonials", href: "/testimonials" },
		{ name: "Packages", href: "/packages" },
		{ name: "Contact", href: "/contact" },
	];

	const socialLinks = [
		{
			name: "Facebook",
			href: "https://facebook.com/BLKTIE.EVENTS",
			icon: <FaFacebook className="w-5 h-5" />,
		},
		{
			name: "Instagram",
			href: "https://instagram.com/BLKTIE_EVENT",
			icon: <FaInstagram className="w-5 h-5" />,
		},
		{
			name: "X (Twitter)",
			href: "https://x.com/BLKTIE_EVENT",
			icon: <FaXTwitter className="w-5 h-5" />,
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/19092681246",
			icon: <FaWhatsapp className="w-5 h-5" />,
		},
	];

	return (
		<footer
			className="relative text-[#343434] border-t border-[#E9ECEF] overflow-hidden"
			style={{
				//	backgroundImage: `url('https://images.unsplash.com/photo-1696229875943-1717d23f456b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjBncmF5JTIwdGV4dHVyZSUyMHBhdHRlcm58ZW58MXx8fHwxNzU3MjQyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundColor: "#FFF", // Fallback color
			}}>
			{/* Subtle overlay to ensure text readability */}
			<div className="absolute inset-0 bg-white/85"></div>

			{/* Main Footer Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
					{/* Company Info */}
					<div className="lg:col-span-1">
						{/* Logo Section - Aligned with other headings */}
						<div className="mb-6">
							<div className="flex items-start">
								<div className="w-12 h-12 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full flex items-center justify-center shadow-sm overflow-hidden mr-3 flex-shrink-0">
									<img
										src="/logo.png"
										alt="Black Tie Events"
										className="h-8 w-8 object-cover rounded-full"
									/>
								</div>
								<div className="flex-1">
									<img
										src="/white_logo_blktieevents.png"
										alt="Black Tie Events Logo"
										className="h-16 w-auto object-contain"
									/>
								</div>
							</div>
						</div>

						{/* Contact Info */}
						<div className="space-y-3">
							<a
								href="tel:+19092681246"
								className="flex items-center gap-3 text-[#6C757D] hover:text-[#343434] transition-colors group">
								<FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
								<span className="text-sm">909-268-1246</span>
							</a>

							<a
								href="mailto:blktieevent@gmail.com"
								className="flex items-center gap-3 text-[#6C757D] hover:text-[#343434] transition-colors group">
								<FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
								<span className="text-sm">blktieevent@gmail.com</span>
							</a>

							<div className="flex items-center gap-3 text-[#6C757D]">
								<FaMapMarker className="w-4 h-4 flex-shrink-0" />
								<span className="text-sm">Southern California</span>
							</div>

							<a
								href="https://www.blktieevents.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-[#6C757D] hover:text-[#343434] transition-colors group">
								<FaMusic className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
								<span className="text-sm">www.blktieevents.com</span>
							</a>
						</div>
					</div>

					{/* Services */}
					<div className="lg:col-span-1">
						<h3 className="text-black font-bold text-2xl mb-5 moontime-text">
							Our Services
						</h3>
						<ul className="space-y-3">
							{services.map((service) => (
								<li key={service.name}>
									<a
										href={service.href}
										className="text-[#6C757D] hover:text-[#343434] transition-colors text-sm flex items-center gap-2 group">
										{service.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Links */}
					<div className="lg:col-span-1">
						<h3 className="text-black font-bold text-2xl mb-5 moontime-text">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-[#6C757D] hover:text-[#343434] transition-colors text-sm">
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Media & CTA */}
					<div className="lg:col-span-1">
						<h3 className="text-black font-bold text-2xl mb-5 moontime-text">
							Connect With Us
						</h3>

						{/* Social Links */}
						<div className="flex gap-3 mb-6 flex-wrap">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-[#F8F9FA]/90 border border-[#E9ECEF] rounded-full flex items-center justify-center text-[#6C757D] hover:text-[#343434] hover:bg-[#E9ECEF] transition-all duration-300 group backdrop-blur-sm"
									aria-label={social.name}>
									<div className="group-hover:scale-110 transition-transform">
										{social.icon}
									</div>
								</a>
							))}
						</div>

						{/* CTA Button */}
						<a
							href="/services/book-a-call"
							className="block w-full bg-[#F8F9FA]/90 text-[#343434] border border-[#E9ECEF] text-center px-6 py-3 rounded-lg font-bold hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm backdrop-blur-sm">
							Book Your Event
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="relative z-10 border-t border-[#E9ECEF]">
				<div className="bg-[#F8F9FA]/95 backdrop-blur-sm">
					<div className="max-w-7xl mx-auto px-6 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							{/* Copyright and Legal Links */}
							<div className="text-[#6C757D] text-sm text-center md:text-left">
								<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
									<span>
										© {currentYear} Black Tie Events. All rights reserved.
									</span>
									<div className="flex items-center gap-4 justify-center sm:justify-start">
										<span className="hidden sm:block text-[#E9ECEF]">|</span>
										<a
											href="/privacy-policy"
											className="hover:text-[#343434] transition-colors">
											Privacy Policy
										</a>
										<span className="text-[#E9ECEF]">|</span>
										<a
											href="/cookies-policy"
											className="hover:text-[#343434] transition-colors">
											Cookie Policy
										</a>
									</div>
								</div>
							</div>

							{/* Powered By */}
							<div className="text-[#6C757D] text-sm text-center md:text-right">
								Powered by{" "}
								<a
									href="https://www.bluesproutagency.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#4A90A4] hover:text-[#5B9BD5] transition-colors font-semibold">
									Blue Sprout Agency
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
