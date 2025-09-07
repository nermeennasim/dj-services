"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index)
				? prev.filter((item) => item !== index)
				: [...prev, index]
		);
	};

	const faqCategories = [
		{
			category: "DJ Services",
			questions: [
				{
					question: "What type of music do you play?",
					answer:
						"We play all genres of music including Top 40, Hip-Hop, Pop, Rock, Country, Latin, Electronic, and more. We customize our playlist based on your preferences and event type.",
				},
				{
					question: "Do you take song requests during events?",
					answer:
						"Absolutely! We encourage song requests and have a real-time song request system that allows guests to request songs directly through our app during the event.",
				},
				{
					question: "How far in advance should I book?",
					answer:
						"We recommend booking at least 2-3 months in advance, especially for weddings and popular dates. However, we can accommodate last-minute bookings based on availability.",
				},
				{
					question: "What's included in your DJ service?",
					answer:
						"Our DJ service includes professional sound system, wireless microphones, DJ mixing equipment, lighting setup, music library access, and a professional DJ for your entire event duration.",
				},
			],
		},
		{
			category: "Equipment Rental",
			questions: [
				{
					question: "What equipment do you rent?",
					answer:
						"We rent speakers, microphones, lighting systems, DJ controllers, mixers, and complete PA systems. All equipment is professional-grade and regularly maintained.",
				},
				{
					question: "Do you provide delivery and setup?",
					answer:
						"Yes! We provide delivery, setup, and pickup services. Our team will ensure everything is properly configured and tested before your event.",
				},
				{
					question: "What if equipment fails during my event?",
					answer:
						"We provide backup equipment and 24/7 support during your event. If any issues arise, we'll quickly resolve them to ensure your event continues smoothly.",
				},
				{
					question: "How much does equipment rental cost?",
					answer:
						"Rental costs vary based on equipment type and duration. Basic speaker packages start at $150, with full lighting and sound packages available. Contact us for a custom quote.",
				},
			],
		},
		{
			category: "Photo Booth",
			questions: [
				{
					question: "What's included with the photo booth?",
					answer:
						"Our photo booth package includes the booth setup, props, instant photo prints, digital copies, custom photo templates, and an attendant to assist guests.",
				},
				{
					question: "How many photos can guests take?",
					answer:
						"Unlimited! Guests can take as many photos as they want during your rental period. All photos are included in your package.",
				},
				{
					question: "Can we customize the photo templates?",
					answer:
						"Yes! We can customize photo templates with your event details, names, dates, and branding to match your event theme.",
				},
				{
					question: "Do you provide props?",
					answer:
						"Absolutely! We provide a wide variety of fun props including signs, hats, glasses, and themed accessories to make your photos memorable.",
				},
			],
		},
		{
			category: "Booking & Payment",
			questions: [
				{
					question: "How do I book your services?",
					answer:
						"You can book through our website, call us directly, or schedule a consultation. We'll discuss your needs and provide a custom quote for your event.",
				},
				{
					question: "What payment methods do you accept?",
					answer:
						"We accept all major credit cards, bank transfers, and cash. A deposit is required to secure your booking, with the balance due before or on the event date.",
				},
				{
					question: "What's your cancellation policy?",
					answer:
						"Cancellations made 30+ days before the event receive a full refund minus a small processing fee. Cancellations within 30 days may be subject to partial charges.",
				},
				{
					question: "Do you require a deposit?",
					answer:
						"Yes, we require a 50% deposit to secure your booking. The remaining balance is due 7 days before your event or on the day of the event.",
				},
			],
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E9ECEF]">
				<div className="max-w-4xl mx-auto text-center">
					<HelpCircle className="w-16 h-16 text-[#343434] mx-auto mb-6" />
					<h1 className="text-6xl md:text-7xl font-black mb-6 text-black font-['var(--font-tangerine)']">
						FREQUENTLY ASKED
						<span className="block text-[#343434]">QUESTIONS</span>
					</h1>
					<p className="text-xl text-[#6C757D] max-w-2xl mx-auto">
						Find answers to the most common questions about our DJ services,
						equipment rental, and photo booth offerings.
					</p>
				</div>
			</section>

			{/* FAQ Content */}
			<section className="py-16 px-6">
				<div className="max-w-4xl mx-auto">
					{faqCategories.map((category, categoryIndex) => (
						<div key={categoryIndex} className="mb-12">
							{/* Category Header */}
							<h2 className="text-3xl font-bold text-[#343434] mb-8 pb-4 border-b-2 border-[#E9ECEF]">
								{category.category}
							</h2>

							{/* Questions */}
							<div className="space-y-4">
								{category.questions.map((faq, questionIndex) => {
									const itemIndex = categoryIndex * 100 + questionIndex;
									const isOpen = openItems.includes(itemIndex);

									return (
										<div
											key={questionIndex}
											className="bg-white border border-[#E9ECEF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
											<button
												onClick={() => toggleItem(itemIndex)}
												className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F8F9FA] transition-colors duration-300">
												<h3 className="text-lg font-semibold text-[#343434] pr-4">
													{faq.question}
												</h3>
												{isOpen ? (
													<ChevronUp className="w-6 h-6 text-[#6C757D] flex-shrink-0" />
												) : (
													<ChevronDown className="w-6 h-6 text-[#6C757D] flex-shrink-0" />
												)}
											</button>

											{isOpen && (
												<div className="px-6 pb-5">
													<p className="text-[#6C757D] leading-relaxed">
														{faq.answer}
													</p>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Still Have Questions Section */}
			<section className="py-16 px-6 bg-[#F8F9FA]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-black mb-6 text-[#343434]">
						Still Have Questions?
					</h2>
					<p className="text-lg text-[#6C757D] mb-8">
						Can't find what you're looking for? Get in touch with us directly.
					</p>

					<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
						<Link
							href="/contact"
							className="flex items-center justify-center gap-3 bg-[#343434] text-white hover:bg-[#2c2c2c] px-6 py-4 rounded-2xl font-semibold transition-colors duration-300">
							<Mail className="w-5 h-5" />
							Send us a Message
						</Link>

						<Link
							href="tel:+1234567890"
							className="flex items-center justify-center gap-3 bg-white text-[#343434] hover:bg-[#E9ECEF] border-2 border-[#E9ECEF] px-6 py-4 rounded-2xl font-semibold transition-colors duration-300">
							<Phone className="w-5 h-5" />
							Call Us Now
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
