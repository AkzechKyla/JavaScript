import type { Metadata } from "next";
import { Macondo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const macondo = Macondo({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Arcana Haven",
	description: "Discover guidance through tarot. Get free readings, explore card meanings, and connect with your intuition at Arcana Haven.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
	<html lang="en" className="flex flex-col justify-center text-center">
			<body className={`${macondo.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
				<h1 className="text-3xl font-bold underline">Arcana Haven Prototype</h1>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
