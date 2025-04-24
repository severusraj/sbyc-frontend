import * as React from "react";
import Image from "next/image";
import {
	Card,
	CardDescription,
	CardTitle,
	CardFooter,
	CardHeader,
} from "../ui/card";
import { formatDate } from "@/lib/helperFunctions";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";

type EventsCardProps = {
	title: string;
	description: string;
	location: string;
	date: string;
	image: string;
};

export function EventsCard({
	title,
	description,
	location,
	date,
	image,
}: EventsCardProps) {
	return (
		<Card className="flex flex-col size-full shadow-xl">
			<Image
				src={image}
				alt="events-card-image"
				quality={90}
				priority
				width={500}
				height={250}
				className="rounded-t-xl object-cover w-full h-[250px]"
			/>
			<CardHeader className="flex-1 space-y-2">
				<div className="flex flex-col space-y-1">
					<CardTitle>{title}</CardTitle>
					<div className="space-y-0.5">
						<div className="flex items-center gap-2">
							<Calendar className="size-4 text-slate-500" />
							<span className="text-sm text-slate-500">{formatDate(date)}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="size-4 text-slate-500" />
							<span className="text-sm text-slate-500">{location}</span>
						</div>
					</div>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto justify-end">
				<Button variant="link" className="p-0">
					Learn More →
				</Button>
			</CardFooter>
		</Card>
	);
}
