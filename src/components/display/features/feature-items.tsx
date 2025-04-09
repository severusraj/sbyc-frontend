import * as React from "react";
import { Hotel, Ship, Utensils, Calendar, Flag, Compass } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const featureItems = [
	{
		title: "World-Class Marina",
		content:
			"State of the art berthing facilities and comprehensive marine services.",
		icon: Ship,
	},
	{
		title: "Luxury Accommodations",
		content: "Elegant rooms and suites with stunning ocean view.",
		icon: Hotel,
	},
	{
		title: "Fine Dining",
		content: "Exquisite cuisine featuring local and international dishes.",
		icon: Utensils,
	},
	{
		title: "Exclusive Events",
		content: "Year-round social activities and nautical events.",
		icon: Calendar,
	},
	{
		title: "Sailing Club",
		content: "Competitive and leisure sailing for all skill levels.",
		icon: Flag,
	},
	{
		title: "Navigation Training",
		content: "Expert-led courses on maritime navigation and safety.",
		icon: Compass,
	},
];

export function FeatureItems() {
	return (
		<div className="mx-auto max-w-5xl items-center py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{featureItems.map((item, i) => (
				<Card
					key={i}
					className="flex flex-col space-y-4 cursor-pointer transition duration-300 hover:shadow-xl"
				>
					<CardHeader>
						<item.icon className="size-14 shrink-0" />
					</CardHeader>
					<CardContent className="flex flex-col space-y-2">
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.content}</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	);
}