import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HideNextJSIndicator from "@/components/layout/HideNextJSIndicator";
import { Tangerine } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Export tangerine so other components can use it
export const tangerine = Tangerine({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-tangerine", // Add CSS variable
});

export const metadata: Metadata = {
	title: "Black Tie Events - Premium Event Entertainment",
	description:
		"Do you want photo booth? Or pay for requested songs? Professional DJ services, equipment rental, and premium entertainment for your special events.",
	keywords:
		"black tie events, DJ services, photo booth, song requests, equipment rental, wedding DJ, party DJ, event entertainment, premium events",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${tangerine.variable} antialiased bg-white`}>
				<HideNextJSIndicator />
				{/* Banner stays full width */}

				{/* Page wrapper with padding */}
				<div className="px-4 sm:px-6 lg:px-8 xl:px-12">
					<Header />
					<main className="pt-16">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
