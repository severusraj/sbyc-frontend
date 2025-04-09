import * as React from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-800 to-blue-700",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export function PageHeaderContainer({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-0",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export function PageHeaderHeading({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl",
				className,
			)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("mt-6 text-xl text-blue-100 max-w-2xl mx-auto", className)}
			{...props}
		/>
	);
}

export function PageActions({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"mt-10 flex flex-col gap-4 sm:flex-row justify-center",
				className,
			)}
		>
			{children}
		</div>
	);
}