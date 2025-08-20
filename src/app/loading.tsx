import { Music } from "lucide-react";

export default function Loading() {
	return (
		<div className="min-h-screen bg-white flex items-center justify-center">
			<div className="text-center">
				{/* Animated Logo */}
				<div className="relative mb-8">
					<div className="w-20 h-20 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full flex items-center justify-center mx-auto animate-pulse shadow-md">
						<img
							src="/logo.png"
							alt="Black Tie Events"
							className="h-12 w-12 object-contain rounded-full"
						/>
					</div>

					{/* Floating Music Notes */}
					<div className="absolute -top-2 -right-2">
						<Music
							className="w-6 h-6 text-[#6C757D] animate-bounce"
							style={{ animationDelay: "0.1s" }}
						/>
					</div>
					<div className="absolute -bottom-2 -left-2">
						<Music
							className="w-4 h-4 text-[#8E8B82] animate-bounce"
							style={{ animationDelay: "0.3s" }}
						/>
					</div>
				</div>

				{/* Loading Text */}
				<h2 className="text-2xl font-bold text-black mb-4 font-['var(--font-tangerine)']">
					Loading...
				</h2>
				<p className="text-[#6C757D] mb-8">
					Preparing your extraordinary experience
				</p>

				{/* Loading Bar */}
				<div className="w-64 h-2 bg-[#F8F9FA] border border-[#E9ECEF] rounded-full mx-auto overflow-hidden">
					<div className="h-full bg-gradient-to-r from-[#6C757D] to-[#343434] rounded-full animate-pulse"></div>
				</div>

				{/* Spinning Vinyl Record */}
				<div className="mt-8">
					<div className="w-16 h-16 mx-auto relative">
						<div className="w-full h-full bg-[#F8F9FA] rounded-full border-4 border-[#E9ECEF] animate-spin-slow shadow-sm"></div>
						<div className="absolute inset-4 bg-white rounded-full border border-[#E9ECEF]"></div>
						<div className="absolute inset-6 bg-[#6C757D]/20 rounded-full"></div>
					</div>
				</div>

				{/* Brand Name */}
				<div className="mt-6">
					<h3 className="text-lg font-black text-black font-['var(--font-tangerine)']">
						Black Tie Events
					</h3>
					<p className="text-xs text-[#8E8B82] tracking-wider uppercase">
						Premium Event Entertainment
					</p>
				</div>
			</div>
		</div>
	);
}
