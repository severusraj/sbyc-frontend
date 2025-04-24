import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Facilities } from "./_components/facilities";

export const metadata: Metadata = {
	title: "Facilities",
};

export default function FacilitiesPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.facilitiesSection.title}
				description={headingAndDescription.facilitiesSection.description}
			>
				<PageHeaderImage
					src="/yacht-7.jpg?height=1080&width=1920"
					alt="facilties-bg-image"
				/>
			</PageHeader>
			<Facilities />
		</>
	);
}
