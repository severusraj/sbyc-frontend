import * as React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { PricingInfo } from "./pricing-info";

const memberBerthingRatesItems = [
	{
		name: "T-HEAD",
		charges: {
			daily: 3500,
			monthly: 60000,
			yearly: 720000,
		},
	},
	{
		name: "BRAVO-CHARLIE",
		lengthOccupancy: 82,
		charges: {
			daily: 1575,
			monthly: 27000,
			yearly: 324000,
		},
		lengthCharges: 315,
	},
	{
		name: "DELTA",
		lengthOccupancy: 100,
		charges: {
			daily: 2245,
			monthly: 38500,
			yearly: 462000,
		},
		lengthCharges: 315,
	},
	{
		name: "ECHO-FOXTROT-GOLF",
		lengthOccupancy: 66,
		charges: {
			daily: 933,
			monthly: 16000,
			yearly: 192000,
		},
		lengthCharges: 315,
	},
	{
		name: "HOTEL-INDIA",
		lengthOccupancy: 50,
		charges: {
			daily: 875,
			monthly: 15000,
			yearly: 180000,
		},
		lengthCharges: 315,
	},
];

const nonMemberBerthingRatesItems = [
	{
		name: "T-HEAD",
		charges: {
			daily: 10500,
			monthly: 180000,
			yearly: 2160000,
		},
	},
	{
		name: "BRAVO-CHARLIE",
		lengthOccupancy: 82,
		charges: {
			daily: 4725,
			monthly: 81000,
			yearly: 972000,
		},
		lengthCharges: 943,
	},
	{
		name: "DELTA",
		lengthOccupancy: 100,
		charges: {
			daily: 6737,
			monthly: 115500,
			yearly: 1386000,
		},
		lengthCharges: 943,
	},
	{
		name: "ECHO-FOXTROT-GOLF",
		lengthOccupancy: 66,
		charges: {
			daily: 2799,
			monthly: 48000,
			yearly: 576000,
		},
		lengthCharges: 943,
	},
	{
		name: "HOTEL-INDIA",
		lengthOccupancy: 50,
		charges: {
			daily: 2625,
			monthly: 45000,
			yearly: 540000,
		},
		lengthCharges: 943,
	},
];

export function PricingItems() {
	return (
		<>
			<div className="flex flex-col space-y-4">
				<Tabs defaultValue="monthly" className="w-full">
					<TabsList className="grid grid-cols-3 w-full mx-auto sm:w-72">
						<TabsTrigger value="daily">Daily</TabsTrigger>
						<TabsTrigger value="monthly">Monthly</TabsTrigger>
						<TabsTrigger value="yearly">Yearly</TabsTrigger>
					</TabsList>
					<TabsContent className="mt-6" value="daily">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Daily berthing rates for members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{memberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														₱{item.charges.daily.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Non-Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Daily berthing rates for non-members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{nonMemberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														₱{item.charges.daily.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
					<TabsContent className="mt-6" value="monthly">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Monthly berthing rates for members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{memberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														₱{item.charges.monthly.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Non-Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Monthly berthing rates for non-members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{nonMemberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														{item.charges.monthly.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
					<TabsContent className="mt-6" value="yearly">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Yearly berthing rates for members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{memberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														₱{item.charges.yearly.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between w-full">
										<CardTitle>Non-Member Berthing Rates</CardTitle>
										<div className="flex justify-end">
											<PricingInfo />
										</div>
									</div>
									<CardDescription>
										Yearly berthing rates for non-members.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										<div className="flex items-center justify-between w-full py-2 border-b border-blue-100">
											<div>
												<h1 className="font-medium leading-snug">Pier</h1>
											</div>
											<div className="flex items-center gap-2">
												<p className="font-medium leading-snug">Pricing</p>
											</div>
										</div>
										{nonMemberBerthingRatesItems.map((item, i) => (
											<li
												key={i}
												className="flex items-center justify-between w-full"
											>
												<div>
													<p className="font-semibold">{item.name}</p>
													{item.lengthOccupancy && (
														<p className="text-sm text-gray-500">
															Length: {item.lengthOccupancy}ft
														</p>
													)}
												</div>
												<div className="text-right">
													<p className="font-bold">
														₱{item.charges.yearly.toLocaleString()}
													</p>
													{item.lengthCharges && (
														<p className="text-sm text-gray-500">
															₱{item.lengthCharges.toLocaleString()}
														</p>
													)}
												</div>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}