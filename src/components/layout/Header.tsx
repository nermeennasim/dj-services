"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
		null
	);
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);
	}, []);

	const navigation = [
		{ name: "Home", href: "/" },
		{
			name: "About",
			href: "/about",
			submenu: [
				{ name: "Testimonials", href: "/about/testimonials" },
				{ name: "Gallery", href: "/about/gallery" },
				{ name: "FAQs", href: "/about/faq" },
			],
		},
		{
			name: "Services",
			href: "/services",
			submenu: [
				{ name: "Reserve Your Date", href: "/services/reserve-your-date" },
				{ name: "Photo Booth", href: "/services/photobooth" },
				{ name: "Rental Equipments", href: "/services/rental-equipments" },
				{ name: "Events", href: "/services/events" },
			],
		},
		{ name: "Packages", href: "/packages" },
		{ name: "Contact Us", href: "/contact" },
	];

	const toggleMobileSubmenu = (menuName: string) => {
		setMobileSubmenuOpen(mobileSubmenuOpen === menuName ? null : menuName);
	};

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
									src="/logo_cursive_black_tie_events_black_background.png"
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
										className={`text-white hover:text-gray-300 moontime-text text-3xl transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10 ${
											pathname === item.href ||
											(item.submenu && pathname.startsWith(item.href))
												? "text-gray-200 bg-white/20"
												: ""
										}`}>
										{item.name}
									</Link>

									{/* Submenu for Services */}
									{item.submenu && (
										<div className="absolute top-full left-0 mt-2 w-56 bg-black/95 border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="p-2">
												{item.submenu.map((subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className={`block px-4 py-3 moontime-text  hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 text-2xl ${
															pathname === subItem.href
																? "text-white bg-white/10"
																: "text-gray-300"
														}`}>
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
				className={`fixed inset-0 z-60 lg:hidden transition-all duration-300 ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}>
				<div
					className="absolute inset-0 bg-black/70 backdrop-blur-sm"
					onClick={() => setIsOpen(false)}
				/>

				<div
					className={`absolute right-0 top-0 h-full w-80 bg-black border-l border-white/20 transform transition-transform duration-300 overflow-y-auto ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="p-6 pt-20">
						{/* Mobile Logo Section */}
						<div className="flex flex-col items-center mb-8">
							{/* Rounded Logo */}
							<div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-4 shadow-lg">
								<img
									src="/logo.png"
									alt="Black Tie Events"
									className="h-14 w-14 rounded-full object-contain"
								/>
							</div>

							{/* Brand Logo */}
							<div className="flex justify-center">
								<img
									src="/logo_cursive_black_tie_events_black_background.png"
									alt="Black Tie Events"
									className="h-16 w-auto object-contain"
								/>
							</div>
						</div>

						{/* Navigation Items */}
						<div className="space-y-1">
							{navigation.map((item) => (
								<div key={item.name}>
									{/* Main Navigation Item */}
									{item.submenu ? (
										<button
											onClick={() => toggleMobileSubmenu(item.name)}
											className={`w-full flex items-center justify-between text-2xl font-medium transition-colors duration-300 py-3 px-4 rounded-lg moontime-text ${
												pathname === item.href ||
												(item.submenu && pathname.startsWith(item.href))
													? "text-white bg-white/20"
													: "text-gray-300 hover:text-white hover:bg-white/10"
											}`}>
											<span>{item.name}</span>
											{mobileSubmenuOpen === item.name ? (
												<ChevronDown className="w-5 h-5 transition-transform duration-200" />
											) : (
												<ChevronRight className="w-5 h-5 transition-transform duration-200" />
											)}
										</button>
									) : (
										<Link
											href={item.href}
											onClick={() => setIsOpen(false)}
											className={`block text-lg font-medium transition-colors duration-300 py-3 px-4 rounded-lg moontime-text ${
												pathname === item.href
													? "text-white bg-white/20"
													: "text-gray-300 hover:text-white hover:bg-white/10"
											}`}>
											{item.name}
										</Link>
									)}

									{/* Submenu Items */}
									{item.submenu && mobileSubmenuOpen === item.name && (
										<div className="ml-4 mt-1 space-y-1">
											{item.submenu.map((subItem) => (
												<Link
													key={subItem.name}
													href={subItem.href}
													onClick={() => setIsOpen(false)}
													className={`block py-2 px-4 rounded-1xl transition-colors duration-200 text-base moontime-text ${
														pathname === subItem.href
															? "text-white bg-white/10"
															: "text-gray-400 hover:text-gray-300 hover:bg-white/10"
													}`}>
													{subItem.name}
												</Link>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Contact Buttons */}
						<div className="mt-8 pt-6 border-t border-white/20">
							<div className="grid grid-cols-2 gap-3 mb-4">
								<a
									href="mailto:blktieevent@gmail.com"
									onClick={() => setIsOpen(false)}
									className="bg-white text-gray-600 text-center px-4 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
									title="Email Us">
									<Mail className="w-5 h-5" />
									<span className="text-sm">Email</span>
								</a>
								<a
									href="tel:+19092681246"
									onClick={() => setIsOpen(false)}
									className="bg-white text-gray-600 text-center px-4 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
									title="Call Us">
									<Phone className="w-5 h-5" />
									<span className="text-sm">Call</span>
								</a>
							</div>

							<Link
								href="/services/reserve-your-date"
								onClick={() => setIsOpen(false)}
								className="block w-full bg-white/20 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-all duration-300">
								📅 Reserve Your Date
							</Link>
						</div>

						{/* Contact Info */}
						<div className="mt-6 pt-4 border-t border-white/20 text-center space-y-2">
							<a
								href="tel:+19092681246"
								className="block text-white font-semibold hover:text-gray-300 transition-colors">
								📞 909-268-1246
							</a>
							<a
								href="mailto:blktieevent@gmail.com"
								className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
								📧 blktieevent@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
