import * as React from "react";
import Image from "next/image";
import { Card, CardDescription, CardTitle, CardHeader } from "../ui/card";

type DiningCardProps = {
	title: string;
	description: string;
	tagName: string;
	image: string;
};

export function DiningCard({
	title,
	description,
	tagName,
	image,
}: DiningCardProps) {
	return (
		<Card className="flex flex-col size-full group cursor-pointer">
			<div className="relative overflow-hidden rounded-t-xl">
				<div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
					<Image
						src={image}
						alt="dining-card-image"
						quality={90}
						priority
						width={500}
						height={250}
						className="object-cover rounded-t-xl w-full h-[250px]"
					/>
				</div>
				<div className="absolute inset-0 transition-colors group-hover:bg-black/40 rounded-t-xl" />
			</div>
			<CardHeader className="space-y-2">
				<div className="flex flex-col space-y-1">
					<CardTitle>{title}</CardTitle>
					<span className="text-sm text-slate-500">{tagName}</span>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
		</Card>
	);
}
