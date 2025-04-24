import * as React from "react";
import Link from "next/link";
import { Ship } from "lucide-react";

type BrandingProps = {
	title: string;
};

export function Branding({ title }: BrandingProps) {
	return (
		<Link href="/" className="flex flex-1 items-center gap-x-3">
			<Logo />
			<h1 className="text-lg font-bold tracking-tighter md:text-xl">{title}</h1>
		</Link>
	);
}

function Logo() {
	return (
		<div className="flex items-center justify-center rounded-lg p-2 bg-primary text-white">
			<Ship className="size-6 shrink-0" />
		</div>
	);
}
