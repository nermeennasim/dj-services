"use client";
import {
	ArrowLeft,
	Shield,
	Eye,
	Lock,
	UserCheck,
	Mail,
	Phone,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
	const lastUpdated = "January 15, 2025";

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
						<Shield className="w-8 h-8 text-[#343434]" />
						<h1 className="text-4xl font-['var(--font-tangerine)'] text-black">
							Privacy Policy
						</h1>
					</div>
					<p className="text-[#6C757D]">
						Last updated: <span className="font-semibold">{lastUpdated}</span>
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-4xl mx-auto px-6 py-12">
				<div className="prose prose-lg max-w-none">
					{/* Introduction */}
					<section className="mb-12">
						<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF] mb-8">
							<div className="flex items-center gap-3 mb-4">
								<UserCheck className="w-6 h-6 text-[#343434]" />
								<h2 className="text-2xl font-bold text-black m-0">
									Your Privacy Matters
								</h2>
							</div>
							<p className="text-[#6C757D] mb-0">
								At Black Tie Events, we are committed to protecting your privacy
								and ensuring the security of your personal information. This
								Privacy Policy explains how we collect, use, and safeguard your
								data when you use our services or visit our website.
							</p>
						</div>
					</section>

					{/* Information We Collect */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
							<Eye className="w-7 h-7 text-[#343434]" />
							Information We Collect
						</h2>

						<div className="space-y-6">
							<div className="border-l-4 border-[#343434] pl-6">
								<h3 className="text-xl font-semibold text-black mb-3">
									Personal Information
								</h3>
								<p className="text-[#6C757D] mb-3">
									When you book our services or contact us, we may collect:
								</p>
								<ul className="text-[#6C757D] space-y-2">
									<li>
										• Full name and contact information (email, phone number)
									</li>
									<li>• Event details (date, location, type of celebration)</li>
									<li>
										• Payment information (processed securely through Stripe)
									</li>
									<li>• Song requests and music preferences</li>
									<li>• Communication history and correspondence</li>
								</ul>
							</div>

							<div className="border-l-4 border-[#6C757D] pl-6">
								<h3 className="text-xl font-semibold text-black mb-3">
									Automatically Collected Information
								</h3>
								<p className="text-[#6C757D] mb-3">
									When you visit our website, we automatically collect:
								</p>
								<ul className="text-[#6C757D] space-y-2">
									<li>• IP address and browser information</li>
									<li>• Pages visited and time spent on our site</li>
									<li>• Device information and operating system</li>
									<li>• Referral sources and website interactions</li>
									<li>• Cookies and similar tracking technologies</li>
								</ul>
							</div>
						</div>
					</section>

					{/* How We Use Your Information */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">
							How We Use Your Information
						</h2>

						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
								<h3 className="text-lg font-semibold text-black mb-4">
									Service Delivery
								</h3>
								<ul className="text-[#6C757D] space-y-2 text-sm">
									<li>• Processing and fulfilling event bookings</li>
									<li>• Managing song requests and playlists</li>
									<li>• Coordinating event logistics and schedules</li>
									<li>• Providing customer support and assistance</li>
								</ul>
							</div>

							<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
								<h3 className="text-lg font-semibold text-black mb-4">
									Communication
								</h3>
								<ul className="text-[#6C757D] space-y-2 text-sm">
									<li>• Sending booking confirmations and updates</li>
									<li>• Responding to inquiries and requests</li>
									<li>• Sharing important event information</li>
									<li>• Marketing communications (with consent)</li>
								</ul>
							</div>

							<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
								<h3 className="text-lg font-semibold text-black mb-4">
									Business Operations
								</h3>
								<ul className="text-[#6C757D] space-y-2 text-sm">
									<li>• Processing payments and managing invoices</li>
									<li>• Maintaining business records and analytics</li>
									<li>• Improving our services and website</li>
									<li>• Ensuring security and preventing fraud</li>
								</ul>
							</div>

							<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
								<h3 className="text-lg font-semibold text-black mb-4">
									Legal Compliance
								</h3>
								<ul className="text-[#6C757D] space-y-2 text-sm">
									<li>• Meeting regulatory requirements</li>
									<li>• Responding to legal requests</li>
									<li>• Protecting our rights and interests</li>
									<li>• Resolving disputes and claims</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Information Sharing */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">
							Information Sharing and Disclosure
						</h2>

						<div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
							<p className="text-yellow-800 font-semibold mb-2">
								🔒 We Never Sell Your Personal Information
							</p>
							<p className="text-yellow-700 text-sm">
								Black Tie Events does not sell, rent, or trade your personal
								information to third parties for their marketing purposes.
							</p>
						</div>

						<p className="text-[#6C757D] mb-4">
							We may share your information only in the following circumstances:
						</p>

						<div className="space-y-4">
							<div className="border border-[#E9ECEF] p-4 rounded-lg">
								<h4 className="font-semibold text-black mb-2">
									Service Providers
								</h4>
								<p className="text-[#6C757D] text-sm">
									We work with trusted third-party service providers (Stripe for
									payments, SendGrid for emails) who help us deliver our
									services. These providers are contractually bound to protect
									your information.
								</p>
							</div>

							<div className="border border-[#E9ECEF] p-4 rounded-lg">
								<h4 className="font-semibold text-black mb-2">
									Legal Requirements
								</h4>
								<p className="text-[#6C757D] text-sm">
									We may disclose information when required by law, court order,
									or to protect our rights, property, or safety of our users.
								</p>
							</div>

							<div className="border border-[#E9ECEF] p-4 rounded-lg">
								<h4 className="font-semibold text-black mb-2">
									Business Transfers
								</h4>
								<p className="text-[#6C757D] text-sm">
									In the event of a merger, acquisition, or sale of our
									business, your information may be transferred as part of the
									transaction.
								</p>
							</div>
						</div>
					</section>

					{/* Data Security */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
							<Lock className="w-7 h-7 text-[#343434]" />
							Data Security
						</h2>

						<div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
							<p className="text-green-800 font-semibold mb-2">
								🛡️ Enterprise-Grade Security
							</p>
							<p className="text-green-700 text-sm">
								We implement industry-standard security measures to protect your
								personal information from unauthorized access, alteration,
								disclosure, or destruction.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h4 className="font-semibold text-black mb-3">
									Technical Safeguards
								</h4>
								<ul className="text-[#6C757D] space-y-1 text-sm">
									<li>• SSL/TLS encryption for data transmission</li>
									<li>• Secure payment processing via Stripe</li>
									<li>• Regular security audits and updates</li>
									<li>• Protected database systems</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold text-black mb-3">
									Administrative Safeguards
								</h4>
								<ul className="text-[#6C757D] space-y-1 text-sm">
									<li>• Limited access to personal information</li>
									<li>• Employee privacy training</li>
									<li>• Confidentiality agreements</li>
									<li>• Incident response procedures</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Your Rights */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">
							Your Privacy Rights
						</h2>

						<div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
							<p className="text-blue-800 font-semibold mb-2">
								✨ You Have Control
							</p>
							<p className="text-blue-700 text-sm">
								You have several rights regarding your personal information.
								Contact us anytime to exercise these rights.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							{[
								{
									title: "Access",
									desc: "Request a copy of your personal information",
								},
								{
									title: "Correction",
									desc: "Update or correct inaccurate information",
								},
								{
									title: "Deletion",
									desc: "Request removal of your personal data",
								},
								{
									title: "Portability",
									desc: "Receive your data in a portable format",
								},
								{
									title: "Opt-out",
									desc: "Unsubscribe from marketing communications",
								},
								{
									title: "Restrict Processing",
									desc: "Limit how we use your information",
								},
							].map((right, index) => (
								<div
									key={index}
									className="border border-[#E9ECEF] p-4 rounded-lg">
									<h4 className="font-semibold text-black mb-1">
										{right.title}
									</h4>
									<p className="text-[#6C757D] text-sm">{right.desc}</p>
								</div>
							))}
						</div>
					</section>

					{/* Data Retention */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">
							Data Retention
						</h2>
						<p className="text-[#6C757D] mb-4">
							We retain your personal information only as long as necessary to
							provide our services and fulfill the purposes outlined in this
							policy:
						</p>
						<ul className="text-[#6C757D] space-y-2">
							<li>
								• <strong>Event booking data:</strong> Retained for 7 years for
								business records and tax purposes
							</li>
							<li>
								• <strong>Communication records:</strong> Kept for 3 years to
								maintain service history
							</li>
							<li>
								• <strong>Website analytics:</strong> Anonymized and retained
								for 2 years
							</li>
							<li>
								• <strong>Marketing data:</strong> Deleted immediately upon
								unsubscription
							</li>
						</ul>
					</section>

					{/* Contact Information */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>

						<div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#E9ECEF]">
							<p className="text-[#6C757D] mb-6">
								If you have any questions about this Privacy Policy or want to
								exercise your privacy rights, please contact us:
							</p>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5 text-[#343434]" />
										<div>
											<p className="font-semibold text-black">Email</p>
											<a
												href="mailto:blktieevent@gmail.com"
												className="text-[#6C757D] hover:text-[#343434]">
												blktieevent@gmail.com
											</a>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<Phone className="w-5 h-5 text-[#343434]" />
										<div>
											<p className="font-semibold text-black">Phone</p>
											<a
												href="tel:+19092681246"
												className="text-[#6C757D] hover:text-[#343434]">
												909-268-1246
											</a>
										</div>
									</div>
								</div>

								<div>
									<p className="font-semibold text-black mb-2">
										Mailing Address
									</p>
									<p className="text-[#6C757D] text-sm">
										Black Tie Events
										<br />
										Southern California
										<br />
										United States
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Changes to Policy */}
					<section className="mb-10">
						<h2 className="text-3xl font-bold text-black mb-6">
							Changes to This Policy
						</h2>
						<p className="text-[#6C757D] mb-4">
							We may update this Privacy Policy from time to time to reflect
							changes in our practices or legal requirements. When we make
							changes:
						</p>
						<ul className="text-[#6C757D] space-y-2">
							<li>
								• We will update the "Last updated" date at the top of this
								policy
							</li>
							<li>
								• We will notify you via email if the changes are significant
							</li>
							<li>• We will post the updated policy on our website</li>
							<li>
								• Your continued use of our services constitutes acceptance of
								the updated policy
							</li>
						</ul>
					</section>

					{/* Footer */}
					<div className="border-t border-[#E9ECEF] pt-8 mt-12">
						<div className="text-center">
							<p className="text-[#8E8B82] text-sm mb-4">
								This Privacy Policy is effective as of {lastUpdated}
							</p>
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
