import * as React from "react";
import { CheckIcon, InfoIcon } from "lucide-react";
import { formatCurrency, calculateDiscount } from "@/lib/helperFunctions";
import { type PricingData, hasLengthData } from "@/types/PricingData";
import { pricingData } from "@/mocked-data/data";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "../ui/card";
import {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

type BillingCycle = "daily" | "monthly" | "yearly";

type PricingCardProps = {
	location: string;
	billingCycle: BillingCycle;
	data: PricingData;
};

export function PricingCard({
	location,
	billingCycle,
	data,
}: PricingCardProps) {
	const { memberRates, nonMemberRates } = data;
	const memberPrice = memberRates.charges[billingCycle];
	const nonMemberPrice = nonMemberRates.charges[billingCycle];
	const discount = calculateDiscount(nonMemberPrice, memberPrice);
	const hasLengthInMember = hasLengthData(memberRates);
	const hasLengthInNonMember = hasLengthData(nonMemberRates);

	return (
		<Card className="flex flex-col size-full rounded-xl shadow-xl bg-transparent border border-primary/5 transition-colors hover:border-primary group">
			<CardHeader className="flex flex-col gap-2 items-center justify-center">
				<CardTitle className="text-xl font-bold leading-none">
					{location}
				</CardTitle>
				<div className="flex items-center gap-2">
					<CardDescription>
						{hasLengthInMember && memberRates.lengthOccupancy
							? `${memberRates.lengthOccupancy}m length occupancy`
							: "Premium berthing location"}
					</CardDescription>
					{hasLengthInMember &&
						hasLengthInNonMember &&
						memberRates.lengthCharges &&
						nonMemberRates.lengthCharges && (
							<HoverCard>
								<HoverCardTrigger>
									<InfoIcon className="size-5 text-gray-500 cursor-pointer" />
								</HoverCardTrigger>
								<HoverCardContent>
									<div className="flex flex-col space-y-4">
										<span className="text-sm text-center font-semibold leading-snug">
											Additional Length Charges
										</span>
										<div className="flex flex-col space-y-2">
											<div className="flex items-center justify-between text-sm">
												<span className="font-medium">For Members</span>
												<span className="text-sm font-medium">
													{formatCurrency(memberRates.lengthCharges)}
												</span>
											</div>
											<div className="flex items-center justify-between text-sm">
												<span className="font-medium">For Non-Members</span>
												<span className="text-gray-500 line-through text-sm font-medium">
													{formatCurrency(nonMemberRates.lengthCharges)}
												</span>
											</div>
										</div>
									</div>
								</HoverCardContent>
							</HoverCard>
						)}
				</div>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="flex flex-col gap-6">
					<div className="w-full border-t border-primary/5 group-hover:border-primary" />
					<div className="flex flex-col space-y-3">
						<div className="flex flex-col space-y-1 items-center justify-center text-center">
							<span className="text-2xl font-bold">
								{formatCurrency(memberPrice)}
							</span>
							<span className="text-sm text-gray-500">{billingCycle}</span>
						</div>
						<div className="flex flex-col space-y-1 items-center justify-center text-center">
							<span className="text-xl font-bold text-gray-500 line-through">
								{formatCurrency(nonMemberPrice)}
							</span>
							<Badge className="border border-green-600 text-green-600 bg-transparent hover:bg-transparent rounded-full">
								{discount}% off with membership
							</Badge>
						</div>
					</div>
					<div className="w-full border-t border-primary/5 group-hover:border-primary" />
					<div className="flex flex-col space-y-4">
						{pricingData.locationFeatures[
							location as keyof typeof pricingData.locationFeatures
						].map((feature, index) => (
							<div key={index} className="flex items-center gap-2">
								<CheckIcon className="size-5 text-green-600" />
								<p className="text-center">{feature}</p>
							</div>
						))}
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full rounded-lg">Reserve Now</Button>
			</CardFooter>
		</Card>
	);
}
