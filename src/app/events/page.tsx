import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Events } from "@/components/sections";
import { data } from "@/mocked-data/data";

export const metadata: Metadata = {
	title: "Events",
};

export default function EventsPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.eventsSection.title}
				description={headingAndDescription.eventsSection.description}
			>
				<PageHeaderImage
					src="/yacht-4.jpg?height=1080&width=1920"
					alt="events-bg-image"
				/>
			</PageHeader>
			<div className="w-full pt-6 pb-12">
				<Events items={data.events} />
			</div>
		</>
	);
}
