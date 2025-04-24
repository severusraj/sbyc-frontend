import * as React from "react";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/helperFunctions";

type FacilitiesCardProps = {
	title: string;
	description: string;
	status: "operational" | "maintenance";
	location: string;
	lastMaintenance: string;
	nextMaintenance: string;
	image: string;
};

export function FacilitiesCard({
	title,
	description,
	status,
	location,
	lastMaintenance,
	nextMaintenance,
	image,
}: FacilitiesCardProps) {
	return (
		<Card className="flex flex-col size-full shadow-xl">
			<Image
				src={image}
				alt="facilities-card-image"
				priority
				width={500}
				height={250}
				className="rounded-t-xl object-cover w-full h-[250px]"
			/>
			<div className="flex flex-col flex-1 p-6">
				<div className="flex flex-col space-y-3">
					<div className="flex flex-col space-y-2">
						<div className="flex items-center space-x-2">
							<CardTitle>{title}</CardTitle>
							{status === "maintenance" && (
								<Badge className="bg-orange-400 text-white hover:bg-orange-500 capitalize">
									{status}
								</Badge>
							)}
						</div>
						<CardDescription>{description}</CardDescription>
					</div>
					<div className="flex flex-col space-y-1">
						<span className="text-sm text-gray-500">Location: {location}</span>
						<span className="text-sm text-gray-500">
							Last Maintenance: {formatDate(lastMaintenance)}
						</span>
						<span className="text-sm text-gray-500">
							Next Maintenance: {formatDate(nextMaintenance)}
						</span>
					</div>
				</div>
			</div>
		</Card>
	);
}
