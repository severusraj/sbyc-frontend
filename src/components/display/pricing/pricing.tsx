import * as React from "react";
 import { PricingItems } from "./pricing-items";
 
 export function Pricing() {
 	return (
 		<section
 			id="pricing"
 			className="w-full py-12 md:py-24 lg:py-32 bg-blue-200/60"
 		>
 			<div className="container">
 				<div className="flex flex-col space-y-5">
 					<div className="flex flex-col space-y-2 items-center justify-center text-center">
 						<h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
 							Take a look at our Berthing Rates
 						</h1>
 						<p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed">
 							Experience world-class marina facilities with competitive rates.
 						</p>
 					</div>
 					<PricingItems />
 				</div>
 			</div>
 		</section>
 	);
 }