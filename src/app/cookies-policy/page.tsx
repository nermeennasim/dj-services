"use client";
import {
	ArrowLeft,
	Cookie,
	Settings,
	BarChart3,
	Shield,
	Eye,
	ToggleLeft,
	ToggleRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CookiesPolicyPage() {
	const lastUpdated = "January 15, 2025";
	const [preferences, setPreferences] = useState({
		necessary: true, // Always true
		analytics: true,
		marketing: false,
		functional: true,
	});

	const togglePreference = (type: keyof typeof preferences) => {
		if (type === "necessary") return; // Can't disable necessary cookies
		setPreferences((prev) => ({
			...prev,
			[type]: !prev[type],
		}));
	};

	const cookieTypes = [
		{
			id: "necessary",
			name: "Strictly Necessary Cookies",
			icon: <Shield className="w-6 h-6" />,
			description:
				"These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
			examples: [
				"Session management and authentication",
				"Security and fraud prevention",
				"Load balancing and performance",
				"Accessibility features",
			],
			canDisable: false,
			color: "red",
		},
		{
			id: "functional",
			name: "Functional Cookies",
			icon: <Settings className="w-6 h-6" />,
			description:
				"These cookies enable enhanced functionality and personalization. They remember your preferences and choices.",
			examples: [
				"Language and region preferences",
				"Theme and display settings",
				"Form auto-fill information",
				"Previous booking preferences",
			],
			canDisable: true,
			color: "blue",
		},
		{
			id: "analytics",
			name: "Analytics Cookies",
			icon: <BarChart3 className="w-6 h-6" />,
			description:
				"These cookies help us understand how visitors interact with our website by collecting anonymous information.",
			examples: [
				"Google Analytics tracking",
				"Page views and popular content",
				"User journey and behavior",
				"Website performance metrics",
			],
			canDisable: true,
			color: "green",
		},
		{
			id: "marketing",
			name: "Marketing Cookies",
			icon: <Eye className="w-6 h-6" />,
			description:
				"These cookies track your browsing habits to deliver personalized advertising and measure campaign effectiveness.",
			examples: [
				"Social media integration",
				"Targeted advertising",
				"Retargeting campaigns",
				"Conversion tracking",
			],
			canDisable: true,
			color: "purple",
		},
	];

	const savePreferences = () => {
		// In a real app, you would save these preferences to localStorage or send to your analytics service
		localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
		alert("Cookie preferences saved successfully!");
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<div className="bg-[#F8F9FA] border-b border-[#E9ECEF]">
				<div className="max-w-4xl mx-auto px-6 py-8">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[#6C757D] hover:text-[#343434] transition-colors mb-6">
						<ArrowLeft className="w-4 h-4" />
						Back to Home
					</Link>
					<div className="flex items-center gap-3 mb-4">
						<Cookie className="w-8 h-8 text-[#343434]" />
						<h1 className="text-4xl font-['var(--font-tangerine)'] text-black">
							Cookie Policy
						</h1>
					</div>
					<p className="text-[#6C757D]">
						Last updated: <span className="font-semibold">{lastUpdated}</span>
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-12">
				{/* Introduction */}
				<section className="mb-12">
					<div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
						<div className="flex items-center gap-3 mb-4">
							<Cookie className="w-6 h-6 text-amber-600" />
							<h2 className="text-2xl font-bold text-black m-0">
								What Are Cookies?
							</h2>
						</div>
						<p className="text-amber-800 mb-4">
							Cookies are small text files that are stored on your device when
							you visit our website. They help us provide you with a better
							browsing experience by remembering your preferences and improving
							our services.
						</p>
						<p className="text-amber-700 text-sm">
							We use cookies responsibly and transparently. You have full
							control over your cookie preferences.
						</p>
					</div>
				</section>

				{/* Cookie Preferences */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-black mb-6">
						Manage Your Cookie Preferences
					</h2>

					<div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
						<p className="text-blue-800 font-semibold mb-2">🎛️ Take Control</p>
						<p className="text-blue-700 text-sm">
							Choose which types of cookies you want to allow. You can change
							these settings at any time. Note that disabling certain cookies
							may affect your browsing experience.
						</p>
					</div>

					<div className="space-y-6">
						{cookieTypes.map((cookieType) => (
							<div
								key={cookieType.id}
								className="border border-[#E9ECEF] rounded-lg overflow-hidden">
								<div className="bg-[#F8F9FA] p-6 border-b border-[#E9ECEF]">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className={`text-${cookieType.color}-600`}>
												{cookieType.icon}
											</div>
											<div>
												<h3 className="text-xl font-semibold text-black">
													{cookieType.name}
												</h3>
												<p className="text-[#6C757D] text-sm mt-1">
													{cookieType.description}
												</p>
											</div>
										</div>
										<button
											onClick={() =>
												togglePreference(
													cookieType.id as keyof typeof preferences
												)
											}
											disabled={!cookieType.canDisable}
											className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
												preferences[cookieType.id as keyof typeof preferences]
													? "bg-green-100 text-green-800 hover:bg-green-200"
													: "bg-gray-100 text-gray-600 hover:bg-gray-200"
											} ${
												!cookieType.canDisable
													? "cursor-not-allowed opacity-75"
													: "cursor-pointer"
											}`}>
											{preferences[
												cookieType.id as keyof typeof preferences
											] ? (
												<ToggleRight className="w-5 h-5" />
											) : (
												<ToggleLeft className="w-5 h-5" />
											)}
											{preferences[cookieType.id as keyof typeof preferences]
												? "Enabled"
												: "Disabled"}
											{!cookieType.canDisable && (
												<span className="text-xs">(Required)</span>
											)}
										</button>
									</div>
								</div>
								<div className="p-6">
									<h4 className="font-semibold text-black mb-3">
										Examples of {cookieType.name}:
									</h4>
									<ul className="text-[#6C757D] space-y-1">
										{cookieType.examples.map((example, index) => (
											<li key={index} className="text-sm">
												• {example}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<button
							onClick={savePreferences}
							className="bg-[#343434] text-white hover:bg-[#2c2c2c] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
							Save Cookie Preferences
						</button>
					</div>
				</section>

				{/* How We Use Cookies */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						How We Use Cookies
					</h2>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
							<h3 className="text-lg font-semibold text-black mb-4">
								First-Party Cookies
							</h3>
							<p className="text-[#6C757D] text-sm mb-3">
								These are cookies set directly by our website
								(blktieevents.com).
							</p>
							<ul className="text-[#6C757D] space-y-1 text-sm">
								<li>• Session management</li>
								<li>• User preferences</li>
								<li>• Shopping cart functionality</li>
								<li>• Security features</li>
							</ul>
						</div>

						<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
							<h3 className="text-lg font-semibold text-black mb-4">
								Third-Party Cookies
							</h3>
							<p className="text-[#6C757D] text-sm mb-3">
								These are cookies set by external services we use.
							</p>
							<ul className="text-[#6C757D] space-y-1 text-sm">
								<li>• Google Analytics (analytics)</li>
								<li>• Stripe (payment processing)</li>
								<li>• Social media widgets</li>
								<li>• Customer support chat</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Cookie Lifespan */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						Cookie Lifespan
					</h2>

					<div className="space-y-4">
						<div className="border border-[#E9ECEF] p-4 rounded-lg">
							<h4 className="font-semibold text-black mb-2">Session Cookies</h4>
							<p className="text-[#6C757D] text-sm">
								These temporary cookies are deleted when you close your browser.
								They help maintain your session while browsing our website.
							</p>
						</div>

						<div className="border border-[#E9ECEF] p-4 rounded-lg">
							<h4 className="font-semibold text-black mb-2">
								Persistent Cookies
							</h4>
							<p className="text-[#6C757D] text-sm">
								These cookies remain on your device for a set period (usually
								1-2 years) or until you delete them. They remember your
								preferences across visits.
							</p>
						</div>
					</div>
				</section>

				{/* Managing Cookies */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						Managing Cookies in Your Browser
					</h2>

					<div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
						<p className="text-yellow-800 font-semibold mb-2">
							⚠️ Important Note
						</p>
						<p className="text-yellow-700 text-sm">
							Blocking or deleting cookies may affect your experience on our
							website. Some features may not work properly without certain
							cookies.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{[
							{
								browser: "Google Chrome",
								steps: [
									"Click the three dots menu → Settings",
									"Go to Privacy and security → Cookies",
									"Choose your cookie settings",
									"Manage exceptions and blocked sites",
								],
							},
							{
								browser: "Mozilla Firefox",
								steps: [
									"Click the menu button → Options",
									"Select Privacy & Security",
									"Go to Cookies and Site Data",
									"Choose your preferences",
								],
							},
							{
								browser: "Safari",
								steps: [
									"Safari menu → Preferences",
									"Click on Privacy tab",
									"Choose cookie and tracking options",
									"Manage website data and tracking",
								],
							},
							{
								browser: "Microsoft Edge",
								steps: [
									"Click three dots → Settings",
									"Go to Cookies and site permissions",
									"Click on Cookies and site data",
									"Choose your cookie preferences",
								],
							},
						].map((browser, index) => (
							<div
								key={index}
								className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
								<h4 className="font-semibold text-black mb-3">
									{browser.browser}
								</h4>
								<ol className="text-[#6C757D] space-y-1">
									{browser.steps.map((step, stepIndex) => (
										<li key={stepIndex} className="text-sm">
											{stepIndex + 1}. {step}
										</li>
									))}
								</ol>
							</div>
						))}
					</div>
				</section>

				{/* Third-Party Services */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						Third-Party Cookie Services
					</h2>

					<p className="text-[#6C757D] mb-6">
						We use several third-party services that may set their own cookies.
						Here's how to manage them:
					</p>

					<div className="space-y-4">
						<div className="border border-[#E9ECEF] p-4 rounded-lg">
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-semibold text-black mb-1">
										Google Analytics
									</h4>
									<p className="text-[#6C757D] text-sm">
										Tracks website usage and performance
									</p>
								</div>
								<a
									href="https://tools.google.com/dlpage/gaoptout"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 text-sm font-medium">
									Opt Out →
								</a>
							</div>
						</div>

						<div className="border border-[#E9ECEF] p-4 rounded-lg">
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-semibold text-black mb-1">Stripe</h4>
									<p className="text-[#6C757D] text-sm">
										Secure payment processing
									</p>
								</div>
								<a
									href="https://stripe.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 text-sm font-medium">
									Privacy Policy →
								</a>
							</div>
						</div>

						<div className="border border-[#E9ECEF] p-4 rounded-lg">
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-semibold text-black mb-1">
										Social Media
									</h4>
									<p className="text-[#6C757D] text-sm">
										Facebook, Instagram, and other social widgets
									</p>
								</div>
								<a
									href="https://www.facebook.com/policies/cookies/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 text-sm font-medium">
									Learn More →
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Your Rights */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						Your Cookie Rights
					</h2>

					<div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
						<p className="text-green-800 font-semibold mb-2">
							✅ You Have Control
						</p>
						<p className="text-green-700 text-sm">
							Under privacy laws like GDPR and CCPA, you have specific rights
							regarding cookies and tracking.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						{[
							{
								right: "Consent",
								description:
									"We ask for your permission before setting non-essential cookies",
							},
							{
								right: "Access",
								description:
									"You can see what cookies are active on your device",
							},
							{
								right: "Control",
								description: "Enable or disable different types of cookies",
							},
							{
								right: "Deletion",
								description: "Remove cookies from your browser at any time",
							},
							{
								right: "Portability",
								description: "Export your cookie preferences and data",
							},
							{
								right: "Objection",
								description: "Opt out of tracking and profiling cookies",
							},
						].map((right, index) => (
							<div
								key={index}
								className="border border-[#E9ECEF] p-4 rounded-lg">
								<h4 className="font-semibold text-black mb-1">{right.right}</h4>
								<p className="text-[#6C757D] text-sm">{right.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Contact */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">
						Questions About Cookies?
					</h2>

					<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
						<p className="text-[#6C757D] mb-4">
							If you have any questions about our use of cookies or this Cookie
							Policy, please contact us:
						</p>

						<div className="space-y-2">
							<p className="text-sm">
								<strong className="text-black">Email:</strong>
								<a
									href="mailto:blktieevent@gmail.com"
									className="text-[#6C757D] hover:text-[#343434] ml-2">
									blktieevent@gmail.com
								</a>
							</p>
							<p className="text-sm">
								<strong className="text-black">Phone:</strong>
								<a
									href="tel:+19092681246"
									className="text-[#6C757D] hover:text-[#343434] ml-2">
									909-268-1246
								</a>
							</p>
							<p className="text-sm">
								<strong className="text-black">Website:</strong>
								<a
									href="https://www.blktieevents.com"
									className="text-[#6C757D] hover:text-[#343434] ml-2">
									www.blktieevents.com
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* Updates */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-black mb-6">Policy Updates</h2>
					<div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
						<p className="text-blue-800 mb-3">
							We may update this Cookie Policy from time to time to reflect
							changes in technology, legal requirements, or our business
							practices.
						</p>
						<p className="text-blue-700 text-sm">
							When we make significant changes, we'll notify you through our
							website or via email. Please review this policy periodically to
							stay informed about our cookie practices.
						</p>
					</div>
				</section>

				{/* Footer */}
				<div className="border-t border-[#E9ECEF] pt-8 mt-12">
					<div className="text-center">
						<p className="text-[#8E8B82] text-sm mb-4">
							This Cookie Policy is effective as of {lastUpdated}
						</p>
						<div className="space-y-4">
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link
									href="/privacy-policy"
									className="text-[#6C757D] hover:text-[#343434] text-sm font-medium transition-colors">
									Privacy Policy
								</Link>
								<span className="hidden sm:block text-[#E9ECEF]">|</span>
								<Link
									href="/terms-of-service"
									className="text-[#6C757D] hover:text-[#343434] text-sm font-medium transition-colors">
									Terms of Service
								</Link>
								<span className="hidden sm:block text-[#E9ECEF]">|</span>
								<Link
									href="/contact"
									className="text-[#6C757D] hover:text-[#343434] text-sm font-medium transition-colors">
									Contact Us
								</Link>
							</div>
							<Link
								href="/"
								className="inline-flex items-center gap-2 bg-[#F8F9FA] text-[#343434] hover:bg-[#E9ECEF] px-6 py-3 rounded-full font-semibold transition-all duration-300">
								<ArrowLeft className="w-4 h-4" />
								Return to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
