// Replace lucide-react imports with:
import { MapPin } from "lucide-react";
import {
	FaHome,
	FaArrowLeft,
	FaMusic,
	FaFrown,
	FaPhone,
	FaWhatsapp,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaMapPin,
} from "react-icons/fa";
// import FaWhatsapp from "react-icons/fa6";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const services = [
		{ name: "DJ Services", href: "/services/book-a-call" },
		{ name: "Equipment Rental", href: "/services/rent-equipment" },
		{ name: "Song Requests", href: "/services/request-song" },
		{ name: "Photo Booth", href: "/services/photobooth" },
	];

	const quickLinks = [
		{ name: "About Us", href: "/about" },
		{ name: "Testimonials", href: "/testimonials" },
		{ name: "Plans & Pricing", href: "/plans" },
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
			icon: <FaTwitter className="w-5 h-5" />,
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/19092681246",
			icon: <FaWhatsapp className="w-5 h-5" />,
		},
	];

	return (
		<footer className="bg-black border-t border-white/10">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
								<img
									src="/logo.png"
									alt="Black Tie Events"
									className="h-8 w-8 object-contain"
								/>
							</div>
							<div>
								<div className="text-xl font-black text-white">
									Black Tie Events
								</div>
								<div className="text-xs text-gray-400">
									Where Every Event Becomes Extraordinary
								</div>
							</div>
						</div>

						<p className="text-gray-400 text-sm mb-6 leading-relaxed">
							Premium DJ services, equipment rental, and event entertainment.
							Creating unforgettable experiences for weddings, parties, and
							corporate events.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<a
								href="tel:+19092681246"
								className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
								<FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm">909-268-1246</span>
							</a>

							<a
								href="mailto:blacktieevent@gmail.com"
								className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
								<FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm">blacktieevent@gmail.com</span>
							</a>

							<div className="flex items-center gap-3 text-gray-400">
								<FaMapPin className="w-4 h-4" />
								<span className="text-sm">Southern California</span>
							</div>

							<a
								href="https://www.blktieevents.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
								<FaMusic className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm">www.blktieevents.com</span>
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
						<ul className="space-y-3">
							{services.map((service) => (
								<li key={service.name}>
									<a
										href={service.href}
										className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group">
										<FaMusic className="w-3 h-3 group-hover:scale-110 transition-transform" />
										{service.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Media & CTA */}
					<div>
						<h3 className="text-white font-bold text-lg mb-6">
							Connect With Us
						</h3>

						{/* Social Links */}
						<div className="flex gap-3 mb-6">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 group"
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
							className="block w-full bg-yellow-400 text-black text-center px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25">
							Book Your Event
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10 bg-white/5">
				<div className="max-w-7xl mx-auto px-6 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						{/* Copyright */}
						<div className="text-gray-400 text-sm text-center md:text-left">
							© {currentYear} Black Tie Events. All rights reserved.
						</div>

						{/* Powered By */}
						<div className="text-gray-400 text-sm text-center md:text-right">
							Powered by{" "}
							<a
								href="https://www.bluesproutagency.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
								Blue Sprout Agency
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
