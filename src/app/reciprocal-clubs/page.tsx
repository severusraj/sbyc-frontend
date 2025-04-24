import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Clubs } from "@/components/sections";
import { data } from "@/mocked-data/data";

export const metadata: Metadata = {
	title: "Reciprocal Clubs",
};

export default function ReciprocalClubsPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.clubSection.title}
				description={headingAndDescription.clubSection.description}
			>
				<PageHeaderImage
					src="/office.jpg?height=1080&width=1920"
					alt="reciprocal-clubs-bg-image"
				/>
			</PageHeader>
			<div className="w-full pt-6 pb-12">
				<Clubs items={data.club} />
			</div>
		</>
	);
}
