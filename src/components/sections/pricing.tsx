"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import { PricingsList } from "./pricings-list";
import { Button } from "../ui/button";

type BillingCycle = "daily" | "monthly" | "yearly";

type PricingsProps = {
	title: string;
	description: string;
};

export function Pricing({ title, description }: PricingsProps) {
	const [_, setBillingCycle] = React.useState<BillingCycle>("monthly");

	return (
		<div className="flex flex-col gap-12">
			<Tabs defaultValue="monthly">
				<div className="mx-auto w-full px-6 pt-6 md:px-0 md:mx-auto md:max-w-md">
					<TabsList className="grid grid-cols-3 w-full">
						<TabsTrigger value="daily" onClick={() => setBillingCycle("daily")}>
							Daily
						</TabsTrigger>
						<TabsTrigger
							value="monthly"
							onClick={() => setBillingCycle("monthly")}
						>
							Monthly
						</TabsTrigger>
						<TabsTrigger
							value="yearly"
							onClick={() => setBillingCycle("yearly")}
						>
							Yearly
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="daily" className="space-y-0 pt-6">
					<PricingsList billingCycle="daily" />
				</TabsContent>
				<TabsContent value="monthly" className="space-y-0 pt-6">
					<PricingsList billingCycle="monthly" />
				</TabsContent>
				<TabsContent value="yearly" className="space-y-0 pt-6">
					<PricingsList billingCycle="yearly" />
				</TabsContent>
			</Tabs>
			<div className="container flex flex-col items-center justify-center gap-8 py-10">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-bold leading-none">{title}</h1>
					<p>{description}</p>
				</div>
				<div className="flex items-center justify-center">
					<Button className="w-full rounded-lg">Contact Us</Button>
				</div>
			</div>
		</div>
	);
}
