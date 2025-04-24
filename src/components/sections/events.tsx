import * as React from "react";
import type { EventsData } from "@/types/EventsData";
import { EventsList } from "./events-list";

type EventsProps = {
	items: EventsData[];
};

export function Events({ items }: EventsProps) {
	return <EventsList items={items} />;
}
