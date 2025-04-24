import * as React from "react";
import { PricingCard } from "./pricing-card";
import { pricingData } from "@/mocked-data/data";

type BillingCycle = "daily" | "monthly" | "yearly";

type PricingsListProps = {
	billingCycle: BillingCycle;
};

export function PricingsList({ billingCycle }: PricingsListProps) {
	const locationEntries = Object.entries(pricingData.berthingRates);

	return (
		<>
			<div className="px-6 md:px-0 mx-auto max-w-5xl">
				<div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
					{locationEntries.slice(0, 3).map(([location, data]) => (
						<PricingCard
							key={location}
							location={location}
							billingCycle={billingCycle}
							data={data}
						/>
					))}
				</div>
				<div className="hidden md:grid md:grid-cols-2 gap-8 md:px-[16.67%]">
					{locationEntries.slice(3, 5).map(([location, data]) => (
						<PricingCard
							key={location}
							location={location}
							billingCycle={billingCycle}
							data={data}
						/>
					))}
				</div>
				<div className="grid grid-cols-1 gap-6 md:hidden">
					{locationEntries.map(([location, data]) => (
						<PricingCard
							key={location}
							location={location}
							billingCycle={billingCycle}
							data={data}
						/>
					))}
				</div>
			</div>
		</>
	);
}
