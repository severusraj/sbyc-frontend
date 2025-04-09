import * as React from "react";
import { FeatureItems } from "./feature-items";

export function Features() {
	return (
		<section id="features" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container">
				<div className="flex flex-col space-y-5">
					<div className="flex flex-col space-y-2 text-center justify-center">
						<h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
							Experience Excellence
						</h1>
						<p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed">
							Discover the finest amenities and services at Subic Bay Yacht
							Club.
						</p>
					</div>
					<FeatureItems />
				</div>
			</div>
		</section>
	);
}