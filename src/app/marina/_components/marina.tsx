import * as React from "react";
import type { MarinaData } from "@/types/MarinaData";
import { MarinaList } from "./marina-list";

type MarinaProps = {
	items: MarinaData[];
};

export function Marina({ items }: MarinaProps) {
	return <MarinaList items={items} />;
}
