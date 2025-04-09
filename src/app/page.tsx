import * as React from "react";
import Link from "next/link";
import { Ship, Waves, Anchor } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	PageActions,
	PageHeader,
	PageHeaderContainer,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/page-header";

export default function Home() {
	return (
		<>
			<PageHeader>
				<div className="absolute top-10 right-10 text-blue-600 opacity-80">
					<Ship size={120} />
				</div>
				<div className="absolute bottom-0 left-0 w-full text-blue-600 opacity-10">
					<Waves size={1200} />
				</div>
				<PageHeaderContainer>
					<div className="flex justify-center mb-6">
						<Anchor className="size-16 text-yellow-500" />
					</div>
					<PageHeaderHeading>Welcome to Subic Bay Yacht Club</PageHeaderHeading>
					<div className="h-1 w-48 bg-yellow-500 mx-auto my-8" />
					<PageHeaderDescription>
						Experience the perfect blend of luxury living and world-class
						sailing in the heart of Subic Bay. Enjoy breathtaking ocean views,
						premium amenities, and an exclusive waterfront lifestyle like no
						other.
					</PageHeaderDescription>
					<PageActions>
						<Link
							href="/sign-up"
							className={cn(
								buttonVariants({
									size: "xl",
									className:
										"text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-600",
								}),
							)}
						>
							Explore Membership
						</Link>
					</PageActions>
				</PageHeaderContainer>
			</PageHeader>
		</>
	);
}