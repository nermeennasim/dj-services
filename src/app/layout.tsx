import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
				<Header />
				<main className="pt-16">{children}</main>
			</body>
		</html>
	);
}
