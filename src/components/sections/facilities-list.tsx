import * as React from "react";
import { FacilitiesImage } from "./facilities-image";
import type { FacilitiesData } from "@/types/FacilitiesData";

type FacilitiesListProps = {
	items: FacilitiesData[];
};

export function FacilitiesList({ items }: FacilitiesListProps) {
	return (
		<div className="mx-auto max-w-6xl px-6 md:px-0 grid gap-6 md:grid-cols-2 md:gap-8 pt-6">
			{items.map((item, i) => (
				<FacilitiesImage
					key={i}
					title={item.title}
					description={item.description}
					icon={item.icon!}
					image={item.image}
					alt={item.alt!}
				/>
			))}
		</div>
	);
}
