import * as React from "react";
 import { Info } from "lucide-react";
 import {
 	HoverCard,
 	HoverCardContent,
 	HoverCardTrigger,
 } from "@/components/ui/hover-card";
 
 export function PricingInfo() {
 	return (
 		<HoverCard>
 			<HoverCardTrigger>
 				<Info className="size-5 cursor-pointer" />
 			</HoverCardTrigger>
 			<HoverCardContent className="text-center" align="end">
 				Additional charges may apply based on the selected plan.
 			</HoverCardContent>
 		</HoverCard>
 	);
 }