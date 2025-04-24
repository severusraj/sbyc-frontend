import * as React from "react";
import type { TestimonialData } from "@/types/TestimonialData";
import { TestimonialList } from "./testimonials-list";

type TestimonialsProps = {
	items: TestimonialData[];
};

export function Testimonials({ items }: TestimonialsProps) {
	return <TestimonialList items={items} />;
}
