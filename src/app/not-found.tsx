import Link from "next/link";
import { Music, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white text-[#343434] flex items-center justify-center px-6">
			<div className="text-center max-w-2xl mx-auto">
				{/* Animated Background */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F8F9FA]/30 blur-3xl animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E9ECEF]/20 blur-3xl animate-pulse delay-1000"></div>
				</div>

				{/* Floating Music Notes */}
				<div className="absolute inset-0 pointer-events-none">
					<Music className="absolute top-20 left-1/4 w-6 h-6 text-[#6C757D]/40 animate-bounce delay-300" />
					<Music className="absolute top-40 right-1/3 w-4 h-4 text-[#8E8B82]/30 animate-bounce delay-700" />
				</div>

				<div className="relative z-10">
					{/* 404 Display */}
					<div className="mb-8">
						<h1 className="text-8xl md:text-9xl font-black mb-4 font-['var(--font-tangerine)'] bg-gradient-to-r from-[#343434] via-[#6C757D] to-[#8E8B82] bg-clip-text text-transparent">
							404
						</h1>
						<div className="w-24 h-1 bg-[#6C757D] mx-auto mb-6"></div>
					</div>

					{/* Error Message */}
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-black font-['var(--font-tangerine)']">
						Page Not Found
					</h2>
					<p className="text-xl text-[#6C757D] mb-4">
						Looks like this page doesn&apos;t exist or has been moved.
					</p>
					<p className="text-lg text-[#8E8B82] mb-8">
						Don&apos;t worry - let&apos;s get you back to the party!
					</p>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href="/"
							className="bg-[#F8F9FA] text-[#343434] border border-[#E9ECEF] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E9ECEF] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group">
							<Home className="w-5 h-5" />
							Back to Home
							<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						</Link>

						<Link
							href="/contact"
							className="border-2 border-[#6C757D] text-[#6C757D] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6C757D] hover:text-white transition-all duration-300 transform hover:scale-105">
							Contact Us
						</Link>
					</div>

					{/* Additional Help */}
					<div className="mt-12 pt-8 border-t border-[#E9ECEF]">
						<p className="text-[#8E8B82] mb-4">Need help finding something?</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
							<Link
								href="/services"
								className="text-[#6C757D] hover:text-[#343434] underline font-medium">
								Our Services
							</Link>
							<Link
								href="/about"
								className="text-[#6C757D] hover:text-[#343434] underline font-medium">
								About Us
							</Link>
							<Link
								href="/contact"
								className="text-[#6C757D] hover:text-[#343434] underline font-medium">
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
