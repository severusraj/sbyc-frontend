import * as React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function CallToAction() {
	return (
		<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center px-6 md:px-0">
			<Link
				href="/membership"
				className={cn(buttonVariants({ className: "rounded-lg" }))}
			>
				Become a Member
			</Link>
			<Button variant="outline" className="rounded-lg">
				Contact our Office
			</Button>
		</div>
	);
}
