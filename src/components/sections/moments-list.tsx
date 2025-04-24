import * as React from "react";
import type { MomentsData } from "@/types/MomentsData";
import { MomentsImage } from "./moments-image";

type MomentsListProps = {
	items: MomentsData[];
};

export function MomentsList({ items }: MomentsListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 pt-6">
			{items.map((item, i) => (
				<MomentsImage key={i} src={item.image} alt={item.alt} />
			))}
		</div>
	);
}
