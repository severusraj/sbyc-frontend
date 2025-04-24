import * as React from "react";
import { HotelCard } from "./hotel-card";
import type { HotelData } from "@/types/HotelData";

type HotelListProps = {
	items: HotelData[];
};

export function HotelList({ items }: HotelListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 pt-6">
			{items.map((item, i) => (
				<HotelCard
					key={i}
					title={item.title}
					description={item.description}
					price={item.price}
					image={item.image}
				/>
			))}
		</div>
	);
}
