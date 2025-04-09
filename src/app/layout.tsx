import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { geist } from "@/lib/fonts";
import { Navbar } from "@/components/navigation/navbar";
import { PageTransition } from "@/components/page-transition";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/favicon.svg",
				sizes: "32x32",
				type: "image/svg",
			},
		],
	},
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		type: "website",
		title: siteConfig.title,
	},
	twitter: {
		card: "summary_large_image",
		creator: "@severusraj",
	},
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geist.className} bg-blue-50 text-blue-900 antialiased`}
			>
				<main className="min-h-screen">
					<Navbar />
					<PageTransition>{children}</PageTransition>
				</main>
			</body>
		</html>
	);
}