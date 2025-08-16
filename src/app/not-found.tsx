"use client";

import { Home, ArrowLeft, Music, Frown } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-black flex items-center justify-center px-6">
			<div className="text-center max-w-2xl mx-auto">
				{/* 404 Animation */}
				<div className="relative mb-12">
					<div className="text-8xl md:text-9xl font-black text-yellow-400/20 mb-4">
						404
					</div>

					{/* Sad DJ Icon */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center">
							<Frown className="w-10 h-10 text-yellow-400" />
						</div>
					</div>

					{/* Floating Music Notes */}
					<div className="absolute top-4 left-4">
						<Music
							className="w-6 h-6 text-white/20 animate-bounce"
							style={{ animationDelay: "0.1s" }}
						/>
					</div>
					<div className="absolute top-8 right-8">
						<Music
							className="w-4 h-4 text-yellow-400/30 animate-bounce"
							style={{ animationDelay: "0.3s" }}
						/>
					</div>
					<div className="absolute bottom-4 left-12">
						<Music
							className="w-5 h-5 text-white/10 animate-bounce"
							style={{ animationDelay: "0.5s" }}
						/>
					</div>
				</div>

				{/* Error Message */}
				<h1 className="text-4xl md:text-5xl font-black text-white mb-6">
					Oops! Page Not Found
				</h1>

				<p className="text-xl text-gray-300 mb-4">
					Looks like this track skipped! 🎵
				</p>

				<p className="text-gray-400 mb-12 leading-relaxed">
					The page you're looking for doesn't exist. It might have been moved,
					deleted, or you entered the wrong URL. Don't worry, let's get you back
					to the party!
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a
						href="/"
						className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-400/25 flex items-center gap-3 group">
						<Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
						Back to Home
					</a>

					<button
						onClick={() => window.history.back()}
						className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group">
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						Go Back
					</button>
				</div>

				{/* Helpful Links */}
				<div className="mt-16 pt-8 border-t border-white/10">
					<h3 className="text-lg font-bold text-white mb-6">Popular Pages:</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{[
							{ name: "Book Event", href: "/services/book-a-call" },
							{ name: "Request Song", href: "/services/request-song" },
							{ name: "Our Services", href: "/services" },
							{ name: "Contact Us", href: "/contact" },
						].map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-gray-400 hover:text-yellow-400 transition-colors text-sm py-2 hover:underline">
								{link.name}
							</a>
						))}
					</div>
				</div>

				{/* Emergency Contact */}
				<div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
					<h3 className="text-lg font-bold text-white mb-4">
						Need Immediate Help?
					</h3>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href="tel:+19092681246"
							className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
							<span className="text-lg font-semibold">📞 909-268-1246</span>
						</a>
						<a
							href="mailto:blktieevent@gmail.com"
							className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
							<span>📧 blacktieevent@gmail.com</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
