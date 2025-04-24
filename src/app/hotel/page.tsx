import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Hotel } from "@/components/sections";
import { data } from "@/mocked-data/data";

export const metadata: Metadata = {
	title: "Hotel",
};

export default function HotelPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.hotelSection.title}
				description={headingAndDescription.hotelSection.description}
			>
				<PageHeaderImage
					src="/room-4.jpg?height=1080&width=1920"
					alt="hotel-bg-image"
				/>
			</PageHeader>
			<div className="w-full pt-6 pb-12">
				<Hotel items={data.hotel} />
			</div>
		</>
	);
}
