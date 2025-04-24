import * as React from "react";
import Image from "next/image";
import { Card, CardDescription, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

type ClubCardProps = {
	title: string;
	description: string;
	country: string;
	image: string;
};

export function ClubCard({
	title,
	description,
	country,
	image,
}: ClubCardProps) {
	return (
		<Card className="flex flex-col size-full shadow-xl">
			<div className="relative overflow-hidden">
				<Image
					src={image}
					alt="club-image"
					quality={90}
					priority
					width={500}
					height={250}
					className="rounded-t-xl object-cover w-full h-[250px]"
				/>
				<div className="absolute inset-0 bg-black/40 rounded-t-xl" />
				<div className="absolute inset-0 flex flex-col items-start justify-end p-4 space-y-2 text-white">
					<CardTitle>{title}</CardTitle>
					<span className="text-sm">{country}</span>
				</div>
			</div>
			<div className="px-6 py-4">
				<CardDescription className="mt-2">{description}</CardDescription>
			</div>
			<CardFooter className="mt-auto justify-end">
				<Button variant="link" className="p-0">
					Learn More →
				</Button>
			</CardFooter>
		</Card>
	);
}
