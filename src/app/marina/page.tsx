import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { Marina } from "./_components/marina";
import { data } from "@/mocked-data/data";

export const metadata: Metadata = {
	title: "Marina",
};

export default function MarinaPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.marinaSection.title}
				description={headingAndDescription.marinaSection.description}
			>
				<PageHeaderImage
					src="/yacht-6.jpg?height=1080&width=1920"
					alt="marina-bg-image"
				/>
			</PageHeader>
			<div className="w-full pt-6 pb-12">
				<Marina items={data.marina} />
			</div>
		</>
	);
}
