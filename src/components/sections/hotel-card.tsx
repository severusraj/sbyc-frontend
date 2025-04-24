import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
	Card,
	CardTitle,
	CardDescription,
	CardHeader,
	CardFooter,
} from "../ui/card";
import { formatCurrency } from "@/lib/helperFunctions";

type HotelCardProps = {
	title: string;
	description: string;
	price: number;
	image: string;
};

export function HotelCard({
	title,
	description,
	price,
	image,
}: HotelCardProps) {
	return (
		<Card className="flex flex-col size-full shadow-xl">
			<Image
				src={image}
				alt="hotel-card-image"
				priority
				quality={100}
				width={500}
				height={250}
				className="object-cover rounded-t-xl w-full h-[250px]"
			/>
			<CardHeader className="space-y-2">
				<div className="flex flex-col space-y-1">
					<CardTitle>{title}</CardTitle>
					<span className="text-sm text-slate-500">
						{formatCurrency(price)} / night
					</span>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto">
				<Button className="rounded-lg w-full">Book Now</Button>
			</CardFooter>
		</Card>
	);
}
