import * as React from "react";
import type { FacilitiesData } from "@/types/FacilitiesData";
import { FacilitiesCard } from "./facilities-card";

type FacilitiesListProps = {
	items: FacilitiesData[];
};

export function FacilitiesList({ items }: FacilitiesListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
			{items.map((item, index) => (
				<FacilitiesCard
					key={index}
					title={item.title}
					description={item.description}
					status={item.status}
					location={item.location}
					lastMaintenance={item.lastDateMaintenance}
					nextMaintenance={item.nextDateMaintenance}
					image={item.image}
				/>
			))}
		</div>
	);
}
