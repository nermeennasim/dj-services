"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music, Phone } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigation = [
		{ name: "Home", href: "/" },
		{
			name: "Services",
			href: "/services",
			submenu: [
				{ name: "Book Event", href: "/services/book-a-call" },
				{ name: "Rent Equipment", href: "/services/rent-equipment" },
				{ name: "Request Song", href: "/services/request-song" },
				{ name: "Photo Booth", href: "/services/photobooth" },
			],
		},
		{ name: "Plans", href: "/plans" },
		{ name: "Testimonials", href: "/testimonials" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<>
			<header
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					scrolled
						? "bg-black/90 backdrop-blur-lg border-b border-white/10"
						: "bg-transparent"
				}`}>
				<nav className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/25">
								<img
									src="/logo.png"
									alt="Black Tie Events"
									className="h-15 w-15 rounded-full object-contain"
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
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navigation.map((item) => (
								<div key={item.name} className="relative group">
									<Link
										href={item.href}
										className={`text-white hover:text-yellow-400 font-medium transition-colors duration-300 py-2 ${
											pathname === item.href ? "text-yellow-400" : ""
										}`}>
										{item.name}
									</Link>

									{/* Submenu for Services */}
									{item.submenu && (
										<div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="p-2">
												{item.submenu.map((subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-white/5 rounded-md transition-colors duration-200">
														{subItem.name}
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Call Button */}
						<div className="hidden lg:flex items-center gap-4">
							<Link
								href="/services/book-a-call"
								className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
								<Phone className="w-4 h-4" />
								Book Now
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-300">
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
					className="absolute inset-0 bg-black/80 backdrop-blur-lg"
					onClick={() => setIsOpen(false)}
				/>

				<div
					className={`absolute right-0 top-0 h-full w-80 bg-black border-l border-white/10 transform transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="p-6 pt-20">
						<div className="space-y-6">
							{navigation.map((item) => (
								<div key={item.name}>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`block text-lg font-medium transition-colors duration-300 ${
											pathname === item.href
												? "text-yellow-400"
												: "text-white hover:text-yellow-400"
										}`}>
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
													className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200">
													{subItem.name}
												</Link>
											))}
										</div>
									)}
								</div>
							))}

							<Link
								href="/services/book-a-call"
								onClick={() => setIsOpen(false)}
								className="block w-full bg-yellow-400 text-black text-center px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
								Book Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
