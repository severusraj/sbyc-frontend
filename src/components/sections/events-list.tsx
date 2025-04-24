import * as React from "react";
import { EventsCard } from "./events-card";
import type { EventsData } from "@/types/EventsData";

type EventsListProps = {
	items: EventsData[];
};

export function EventsList({ items }: EventsListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 pt-6">
			{items.map((item, i) => (
				<EventsCard
					key={i}
					title={item.title}
					description={item.description}
					location={item.location}
					date={item.date}
					image={item.image}
				/>
			))}
		</div>
	);
}
