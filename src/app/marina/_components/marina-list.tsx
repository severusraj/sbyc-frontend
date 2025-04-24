import * as React from "react";
import type { MarinaData } from "@/types/MarinaData";
import { MarinaCard } from "./marina-card";

type MarinaListProps = {
	items: MarinaData[];
};

export function MarinaList({ items }: MarinaListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 pt-6">
			{items.map((item, i) => (
				<MarinaCard
					key={i}
					title={item.title}
					description={item.description}
					image={item.image}
				/>
			))}
		</div>
	);
}
