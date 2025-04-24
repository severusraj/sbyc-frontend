import * as React from "react";
import type { FacilitiesData } from "@/types/FacilitiesData";
import { FacilitiesList } from "./facilities-list";

type FacilitiesProps = {
	items: FacilitiesData[];
};

export function Facilities({ items }: FacilitiesProps) {
	return <FacilitiesList items={items} />;
}
