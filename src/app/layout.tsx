import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { geist } from "@/lib/fonts";
import { Navbar } from "@/components/navigation/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
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
					{children}
				</main>
			</body>
		</html>
	);
}