"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);
	}, []);

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{
			name: "Services",
			href: "/services",
			submenu: [
				{ name: "Book Event", href: "/services/book-a-call" },
				{ name: "Rent Equipment", href: "/services/rent-equipment" },
				{ name: "Request Song", href: "/services/request-song" },
				{ name: "Photo Booth", href: "/services/photobooth" },
				{ name: "Events", href: "/services/events" },
			],
		},
		{ name: "Packages", href: "/packages" },
		{ name: "Testimonials", href: "/testimonials" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<>
			<header className="fixed top-1 left-1 right-1 z-50 bg-black rounded-lg shadow-lg">
				<nav className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						{/* Left: Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
								<img
									src="/logo.png"
									alt="Black Tie Events"
									className="h-14 w-14 rounded-full object-contain"
								/>
							</div>
							<div className="relative overflow-hidden">
								<img
									src="logo_cursive_black_tie_events_black_background.png"
									alt="Black Tie Events"
									className="h-20 w-auto transition-all duration-500 group-hover:brightness-125 hover-shine"
								/>
								{/* Shine overlay */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
							</div>
						</Link>

						{/* Center: Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navigation.map((item) => (
								<div key={item.name} className="relative group">
									<Link
										href={item.href}
										className={`text-white hover:text-gray-300 font-serif text-lg transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10 ${
											pathname === item.href ? "text-gray-200 bg-white/20" : ""
										}`}
										style={{ fontFamily: '"Prata", serif' }}>
										{item.name}
									</Link>

									{/* Submenu for Services */}
									{item.submenu && (
										<div className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="p-2">
												{item.submenu.map((subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 text-base"
														style={{ fontFamily: '"Prata", serif' }}>
														{subItem.name}
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Right: Contact Icons */}
						<div className="hidden lg:flex items-center gap-4">
							{/* Email Button */}
							<a
								href="mailto:blktieevent@gmail.com"
								className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 transform hover:scale-105 shadow-sm group"
								title="Email Us">
								<Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm font-medium">Email</span>
							</a>

							{/* Phone Button */}
							<a
								href="tel:+19092681246"
								className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 transform hover:scale-105 shadow-sm group"
								title="Call Us">
								<Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm font-medium">Call</span>
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-all duration-300">
							{isOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</nav>
			</header>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}>
				<div
					className="absolute inset-0 bg-black/50 backdrop-blur-sm"
					onClick={() => setIsOpen(false)}
				/>

				<div
					className={`absolute right-0 top-0 h-full w-80 bg-black border-l border-white/20 transform transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="p-6 pt-20">
						{/* Mobile Logo */}
						<div className="mb-8 text-center">
							<div
								className="text-2xl font-black text-white mb-1"
								style={{ fontFamily: '"Prata", serif' }}>
								Black Tie Events
							</div>
							<div className="text-xs text-gray-400">
								Premium Event Entertainment
							</div>
						</div>

						<div className="space-y-6">
							{navigation.map((item) => (
								<div key={item.name}>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`block text-xl font-medium transition-colors duration-300 py-2 px-3 rounded-lg ${
											pathname === item.href
												? "text-white bg-white/20"
												: "text-gray-300 hover:text-white hover:bg-white/10"
										}`}
										style={{ fontFamily: '"Prata", serif' }}>
										{item.name}
									</Link>

									{/* Mobile Submenu */}
									{item.submenu && (
										<div className="ml-4 mt-2 space-y-2">
											{item.submenu.map((subItem) => (
												<Link
													key={subItem.name}
													href={subItem.href}
													onClick={() => setIsOpen(false)}
													className="block text-gray-400 hover:text-gray-300 hover:bg-white/10 py-1 px-3 rounded transition-colors duration-200 text-lg"
													style={{ fontFamily: '"Prata", serif' }}>
													{subItem.name}
												</Link>
											))}
										</div>
									)}
								</div>
							))}

							{/* Mobile Action Buttons */}
							<div className="space-y-3 pt-6 border-t border-white/20">
								<div className="grid grid-cols-2 gap-3">
									<a
										href="mailto:blktieevent@gmail.com"
										onClick={() => setIsOpen(false)}
										className="bg-white text-gray-600 text-center px-4 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
										<Mail className="w-4 h-4" />
										Email
									</a>
									<a
										href="tel:+19092681246"
										onClick={() => setIsOpen(false)}
										className="bg-white text-gray-600 text-center px-4 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
										<Phone className="w-4 h-4" />
										Call
									</a>
								</div>
								<Link
									href="/services/book-a-call"
									onClick={() => setIsOpen(false)}
									className="block w-full bg-white/20 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-all duration-300">
									📅 Book Your Event
								</Link>
							</div>

							{/* Mobile Contact Info */}
							<div className="pt-6 border-t border-white/20 text-center">
								<a
									href="tel:+19092681246"
									className="block text-lg text-white font-semibold hover:text-gray-300 transition-colors mb-2">
									📞 909-268-1246
								</a>
								<a
									href="mailto:blktieevent@gmail.com"
									className="block text-sm text-gray-400 hover:text-gray-300 transition-colors">
									📧 blktieevent@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
