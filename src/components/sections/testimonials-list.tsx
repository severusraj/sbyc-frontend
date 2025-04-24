import * as React from "react";
import { TestimonialCard } from "./testimonial-card";
import type { TestimonialData } from "@/types/TestimonialData";

type TestimonialListProps = {
	items: TestimonialData[];
};

export function TestimonialList({ items }: TestimonialListProps) {
	return (
		<div className="mx-auto max-w-5xl px-6 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 pt-6">
			{items.map((item, i) => (
				<TestimonialCard
					key={i}
					name={item.name}
					role={item.role}
					description={item.description}
				/>
			))}
		</div>
	);
}
