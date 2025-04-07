import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<h1 className="text-3xl font-bold underline">Arcana Haven Prototype</h1>
				<nav>
					<Link href="/" className="text-xl font-bold">Personal</Link>
					<ul>
						<Link href="/collection"><li>Reading Collection</li></Link>
						<Link href="/"><li>Sign Out</li></Link>
					</ul>
					<Link href="/tarot" className="text-xl font-bold">Tarot Reading</Link>
					<ul>
						<Link href="/tarot/general"><li>General Tarot</li></Link>
						<Link href="/tarot/ask-question"><li>Ask a Question</li></Link>
						<Link href="/tarot/yes-no"><li>Yes/No Tarot</li></Link>
					</ul>
					<Link href="/cards" className="text-xl font-bold">Card Meanings</Link>
					<ul>
						<Link href="/cards/major"><li>Major Arcana</li></Link>
						<Link href="/cards/wands" ><li>Wands</li></Link>
						<Link href="/cards/cups"><li>Cups</li></Link>
						<Link href="/cards/swords"><li>Swords</li></Link>
						<Link href="/cards/pentacles"><li>Pentacles</li></Link>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
