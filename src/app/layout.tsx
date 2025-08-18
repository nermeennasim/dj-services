import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import UnderConstructionBanner from "@/components/layout/UnderConstructionBanner";
import HideNextJSIndicator from "@/components/layout/HideNextJSIndicator";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={`${inter.className} antialiased bg-black`}>
				<HideNextJSIndicator />
				{/* Banner stays full width */}
				<UnderConstructionBanner />

				{/* Page wrapper with padding */}
				<div className="px-4 sm:px-6 lg:px-8 xl:px-12">
					<Header />
					<main className="pt-16">{children}</main>
					<Footer />
				</div>

				<FloatingButtons />
			</body>
		</html>
	);
}
