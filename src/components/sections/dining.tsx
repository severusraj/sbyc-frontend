import * as React from "react";
import type { DiningData } from "@/types/DiningData";
import { DiningList } from "./dining-list";

type DiningProps = {
	items: DiningData[];
};

export function Dining({ items }: DiningProps) {
	return <DiningList items={items} />;
}
