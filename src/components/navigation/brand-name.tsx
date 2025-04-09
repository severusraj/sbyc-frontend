import * as React from "react";
 import Link from "next/link";
 import { Ship } from "lucide-react";
 
 export function BrandName() {
 	return (
 		<Link
 			href="/"
 			className="flex flex-1 items-center space-x-2 text-lg font-bold leading-none tracking-tighter"
 		>
 			<Ship className="size-8" />
 			<span>Subic Bay Yacht Club</span>
 		</Link>
 	);
 }