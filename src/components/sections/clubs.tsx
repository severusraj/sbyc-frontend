import * as React from "react";
import type { ClubData } from "@/types/ClubData";
import { ClubsList } from "./clubs-list";

type ClubsProps = {
	items: ClubData[];
};

export function Clubs({ items }: ClubsProps) {
	return <ClubsList items={items} />;
}
