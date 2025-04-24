import * as React from "react";
import type { Metadata } from "next";
import { PageHeader, PageHeaderImage } from "@/components/page-header";
import { headingAndDescription } from "@/lib/constants";
import { MembershipForm } from "./_components/membership-form";

export const metadata: Metadata = {
	title: "Membership",
};

export default function MembershipPage() {
	return (
		<>
			<PageHeader
				title={headingAndDescription.membershipSection.title}
				description={headingAndDescription.membershipSection.description}
			>
				<PageHeaderImage
					src="/yacht-2.jpg?height=1080&width=1920"
					alt="membership-bg-image"
				/>
			</PageHeader>
			<div className="w-full py-12">
				<div className="mx-auto px-6 md:px-0 max-w-3xl">
					<MembershipForm />
				</div>
			</div>
		</>
	);
}
