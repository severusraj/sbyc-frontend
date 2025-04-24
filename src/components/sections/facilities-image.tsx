import * as React from "react";
import Image from "next/image";
import type { LucideProps } from "lucide-react";
import { CardTitle, CardDescription } from "../ui/card";

type FacilitiesImageProps = {
	title: string;
	description: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	image: string;
	alt: string;
};

export function FacilitiesImage({
	title,
	description,
	icon: Icon,
	image,
	alt,
}: FacilitiesImageProps) {
	return (
		<div className="relative overflow-hidden rounded-xl group w-full h-[250px]">
			<Image
				src={image}
				alt={alt}
				quality={90}
				priority
				width={500}
				height={250}
				className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
			/>
			<div className="absolute bg-black/40 inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
			<div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white space-y-2">
				<div className="pt-6">
					<Icon className="size-8 shrink-0" />
				</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</div>
		</div>
	);
}
