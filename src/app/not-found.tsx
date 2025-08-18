import Link from "next/link";
import { Music, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
			<div className="text-center max-w-2xl mx-auto">
				{/* Animated Background */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse delay-1000"></div>
				</div>

				{/* Floating Music Notes */}
				<div className="absolute inset-0 pointer-events-none">
					<Music className="absolute top-20 left-1/4 w-6 h-6 text-yellow-400/30 animate-bounce delay-300" />
					<Music className="absolute top-40 right-1/3 w-4 h-4 text-white/20 animate-bounce delay-700" />
				</div>

				<div className="relative z-10">
					{/* 404 Display */}
					<div className="mb-8">
						<h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
							404
						</h1>
						<div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
					</div>

					{/* Error Message */}
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Page Not Found
					</h2>
					<p className="text-xl text-gray-300 mb-4">
						Looks like this page doesn&apos;t exist or has been moved.
					</p>
					<p className="text-lg text-gray-400 mb-8">
						Don&apos;t worry - let&apos;s get you back to the party!
					</p>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href="/"
							className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-400/25 flex items-center gap-2 group">
							<Home className="w-5 h-5" />
							Back to Home
							<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						</Link>

						<Link
							href="/contact"
							className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
							Contact Us
						</Link>
					</div>

					{/* Additional Help */}
					<div className="mt-12 pt-8 border-t border-gray-800">
						<p className="text-gray-400 mb-4">Need help finding something?</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
							<Link
								href="/services"
								className="text-yellow-400 hover:text-yellow-300 underline">
								Our Services
							</Link>
							<Link
								href="/about"
								className="text-yellow-400 hover:text-yellow-300 underline">
								About Us
							</Link>
							<Link
								href="/contact"
								className="text-yellow-400 hover:text-yellow-300 underline">
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
