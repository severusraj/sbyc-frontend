import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Dining } from "@/components/sections";
import { data } from "@/mocked-data/data";

export const metadata: Metadata = {
	title: "Dining",
};

export default function DiningPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.diningSection.title}
				description={headingAndDescription.diningSection.description}
			>
				<PageHeaderImage
					src="/dining-1.jpg?height=1080&width=1920"
					alt="dining-bg-image"
				/>
			</PageHeader>
			<div className="w-full pt-6 pb-12">
				<Dining items={data.dining} />
			</div>
		</>
	);
}
