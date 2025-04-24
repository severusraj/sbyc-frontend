import * as React from "react";
import type { HotelData } from "@/types/HotelData";
import { HotelList } from "./hotel-list";

type HotelProps = {
	items: HotelData[];
};

export function Hotel({ items }: HotelProps) {
	return <HotelList items={items} />;
}
