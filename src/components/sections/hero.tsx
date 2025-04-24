import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

function BackgroundImage() {
	return (
		<div className="absolute inset-0">
			<Image
				src="/main-bg.jpg?height=1080&width=1920"
				alt="main background image"
				fill
				priority
				quality={100}
				sizes="100vw"
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
			/>
			<div className="absolute inset-0 bg-black/40" />
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
		</div>
	);
}

export function Hero({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<section
			id="hero-section"
			className="relative h-[600px] w-full overflow-hidden"
		>
			<BackgroundImage />
			<div className="container relative flex flex-col z-10 items-center justify-center h-full w-full text-center">
				<h1 className="mt-8 mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
					{title}
				</h1>
				<p className="mb-8 mx-auto max-w-3xl text-lg text-white md:text-xl">
					{description}
				</p>
				<div className="flex items-center justify-center">
					<Link
						href="/membership"
						className={cn(
							buttonVariants({ size: "xl", className: "rounded-lg" }),
						)}
					>
						Explore Membership
					</Link>
				</div>
			</div>
		</section>
	);
}
