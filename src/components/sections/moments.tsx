import * as React from "react";
import type { MomentsData } from "@/types/MomentsData";
import { MomentsList } from "./moments-list";

type MomentsProps = {
	items: MomentsData[];
};

export function Moments({ items }: MomentsProps) {
	return <MomentsList items={items} />;
}
