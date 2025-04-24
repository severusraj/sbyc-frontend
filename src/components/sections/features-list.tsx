import * as React from "react";
import type { FeatureData } from "@/types/FeatureData";
import { FeatureCard } from "./feature-card";

type FeaturesListProps = {
	items: FeatureData[];
};

export function FeaturesList({ items }: FeaturesListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 pt-6">
			{items.map((item, i) => (
				<FeatureCard
					key={i}
					title={item.title}
					description={item.description}
					icon={item.icon}
				/>
			))}
		</div>
	);
}
