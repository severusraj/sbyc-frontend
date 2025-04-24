import * as React from "react";
import { DiningCard } from "./dining-card";
import type { DiningData } from "@/types/DiningData";

type DiningListProps = {
	items: DiningData[];
};

export function DiningList({ items }: DiningListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 pt-6">
			{items.map((item, i) => (
				<DiningCard
					key={i}
					title={item.title}
					description={item.description}
					tagName={item.tagName}
					image={item.image}
				/>
			))}
		</div>
	);
}
