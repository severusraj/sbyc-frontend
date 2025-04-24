import * as React from "react";
import { ClubCard } from "./club-card";
import type { ClubData } from "@/types/ClubData";

type ClubsListProps = {
	items: ClubData[];
};

export function ClubsList({ items }: ClubsListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 pt-6">
			{items.map((item, i) => (
				<ClubCard
					key={i}
					title={item.title}
					description={item.description}
					country={item.country}
					image={item.image}
				/>
			))}
		</div>
	);
}
