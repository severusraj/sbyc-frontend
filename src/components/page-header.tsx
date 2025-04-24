import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeaderBaseElement = HTMLElementTagNameMap["div"];

type PageHeaderProps = React.HTMLAttributes<PageHeaderBaseElement> & {
	title: string;
	description: string;
};

type PageHeaderImageProps = {
	src: string;
	alt: string;
};

export function PageHeaderImage({ src, alt }: PageHeaderImageProps) {
	return (
		<div className="absolute inset-0">
			<Image
				src={src}
				alt={alt}
				priority
				quality={100}
				fill
				sizes="60vw"
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
			/>
			<div className="absolute inset-0 bg-black/40" />
		</div>
	);
}

export function PageHeader({
	title,
	description,
	className,
	children,
	...props
}: PageHeaderProps) {
	return (
		<div
			className={cn("relative h-[400px] w-full overflow-hidden", className)}
			{...props}
		>
			{children}
			<div className="container relative flex flex-col gap-3 text-white z-10 items-center justify-center size-full text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
					{title}
				</h1>
				<p className="mx-auto max-w-3xl text-lg md:text-xl">{description}</p>
			</div>
		</div>
	);
}
