import * as React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
		creator: siteConfig.creator,
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
				className={`${manrope.className} bg-background text-primary antialiased`}
			>
				<main className="min-h-screen">
					<Navbar />
					<ViewTransition>{children}</ViewTransition>
					<Footer />
				</main>
			</body>
		</html>
	);
}
