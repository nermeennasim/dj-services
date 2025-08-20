"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);

		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
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
					mounted && scrolled
						? "bg-white/95 backdrop-blur-lg border-b border-[#E9ECEF] shadow-sm"
						: "bg-white/80 backdrop-blur-sm"
				}`}>
				<nav className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						{/* Left: Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="w-24 h-24 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
								<img
									src="/logo.png"
									alt="Black Tie Events"
									className="h-16 w-16 rounded-full object-contain"
								/>
							</div>
							<div>
								{/* <div className="text-3xl font-black text-black font-['var(--font-tangerine)']">
									Black Tie Events
								</div>
								<div className="text-xs text-[#6C757D]">
									Where Every Event Becomes Extraordinary
								</div> */}
								<div className="text-3xl font-black text-black font-['var(--font-tangerine)']  transition-transform duration-300 ">
									<img
										src="logo_text_black_tie_events2.png"
										alt="Black Tie Events"
										className="h-21 px-0 w-auto"
									/>
								</div>
							</div>
						</Link>

						{/* Center: Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navigation.map((item) => (
								<div key={item.name} className="relative group">
									<Link
										href={item.href}
										className={`text-black hover:text-[#6C757D] font-sans transition-colors duration-300 py-1 px-2 rounded-lg hover:bg-[#F8F9FA] ${
											pathname === item.href
												? "text-[#343434] bg-[#E9ECEF]"
												: ""
										}`}>
										{item.name}
									</Link>

									{/* Submenu for Services */}
									{item.submenu && (
										<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#E9ECEF] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="p-2">
												{item.submenu.map((subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="block px-4 py-2 text-[#343434] hover:text-black hover:bg-[#F8F9FA] rounded-md transition-colors duration-200">
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
								className="flex items-center gap-2 bg-white text-[#343434] border border-[#E9ECEF] px-4 py-2 rounded-full hover:bg-[#F8F9FA] hover:border-[#6C757D] transition-all duration-300 transform hover:scale-105 shadow-sm group"
								title="Email Us">
								<Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm font-medium">Email</span>
							</a>

							{/* Phone Button */}
							<a
								href="tel:+19092681246"
								className="flex items-center gap-2 bg-white text-[#343434] border border-[#E9ECEF] px-4 py-2 rounded-full hover:bg-[#F8F9FA] hover:border-[#6C757D] transition-all duration-300 transform hover:scale-105 shadow-sm group"
								title="Call Us">
								<Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span className="text-sm font-medium">Call</span>
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 text-[#343434] hover:text-[#6C757D] hover:bg-[#F8F9FA] rounded-lg transition-all duration-300">
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
					className={`absolute right-0 top-0 h-full w-80 bg-white border-l border-[#E9ECEF] transform transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="p-6 pt-20">
						{/* Mobile Logo */}
						<div className="mb-8 text-center">
							<div className="text-2xl font-black text-black font-['var(--font-tangerine)'] mb-1">
								Black Tie Events
							</div>
							<div className="text-xs text-[#6C757D]">
								Premium Event Entertainment
							</div>
						</div>

						<div className="space-y-6">
							{navigation.map((item) => (
								<div key={item.name}>
									<Link
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`block text-lg font-medium transition-colors duration-300 py-2 px-3 rounded-lg ${
											pathname === item.href
												? "text-black bg-[#F8F9FA]"
												: "text-[#343434] hover:text-black hover:bg-[#F8F9FA]"
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
													className="block text-[#6C757D] hover:text-[#343434] hover:bg-[#F8F9FA] py-1 px-3 rounded transition-colors duration-200">
													{subItem.name}
												</Link>
											))}
										</div>
									)}
								</div>
							))}

							{/* Mobile Action Buttons */}
							<div className="space-y-3 pt-6 border-t border-[#E9ECEF]">
								<div className="grid grid-cols-2 gap-3">
									<a
										href="mailto:blktieevent@gmail.com"
										onClick={() => setIsOpen(false)}
										className="bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] text-center px-4 py-3 rounded-lg font-medium hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
										<Mail className="w-4 h-4" />
										Email
									</a>
									<a
										href="tel:+19092681246"
										onClick={() => setIsOpen(false)}
										className="bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] text-center px-4 py-3 rounded-lg font-medium hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
										<Phone className="w-4 h-4" />
										Call
									</a>
								</div>
								<Link
									href="/services/book-a-call"
									onClick={() => setIsOpen(false)}
									className="block w-full bg-[#E9ECEF] text-[#343434] text-center px-6 py-3 rounded-lg font-bold hover:bg-[#6C757D] hover:text-white transition-all duration-300">
									📅 Book Your Event
								</Link>
							</div>

							{/* Mobile Contact Info */}
							<div className="pt-6 border-t border-[#E9ECEF] text-center">
								<a
									href="tel:+19092681246"
									className="block text-lg text-[#343434] font-semibold hover:text-[#6C757D] transition-colors mb-2">
									📞 909-268-1246
								</a>
								<a
									href="mailto:blktieevent@gmail.com"
									className="block text-sm text-[#6C757D] hover:text-[#343434] transition-colors">
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
