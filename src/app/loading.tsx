import { Music } from "lucide-react";

export default function Loading() {
	return (
		<div className="min-h-screen bg-black flex items-center justify-center">
			<div className="text-center">
				{/* Animated Logo */}
				<div className="relative mb-8">
					<div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto animate-pulse">
						<img
							src="/logo.png"
							alt="Black Tie Events"
							className="h-12 w-12 object-contain"
						/>
					</div>

					{/* Floating Music Notes */}
					<div className="absolute -top-2 -right-2">
						<Music
							className="w-6 h-6 text-yellow-400 animate-bounce"
							style={{ animationDelay: "0.1s" }}
						/>
					</div>
					<div className="absolute -bottom-2 -left-2">
						<Music
							className="w-4 h-4 text-white/40 animate-bounce"
							style={{ animationDelay: "0.3s" }}
						/>
					</div>
				</div>

				{/* Loading Text */}
				<h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
				<p className="text-gray-400 mb-8">
					Preparing your extraordinary experience
				</p>

				{/* Loading Bar */}
				<div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
					<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
				</div>

				{/* Spinning Vinyl Record */}
				<div className="mt-8">
					<div className="w-16 h-16 mx-auto relative">
						<div className="w-full h-full bg-gray-800 rounded-full border-4 border-yellow-400/20 animate-spin-slow"></div>
						<div className="absolute inset-4 bg-black rounded-full"></div>
						<div className="absolute inset-6 bg-yellow-400/20 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
