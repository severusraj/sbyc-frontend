import * as React from "react";
import Image from "next/image";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

type MarinaCardProps = {
	title: string;
	description: string;
	image: string;
};

export function MarinaCard({ title, description, image }: MarinaCardProps) {
	return (
		<Card className="flex flex-col size-full group cursor-pointer">
			<div className="relative overflow-hidden rounded-t-xl">
				<div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
					<Image
						src={image}
						alt="marina-card-image"
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
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
		</Card>
	);
}
