"use client";

import * as React from "react";
import type { NavData } from "@/types/NavData";
import { Branding } from "./branding";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			<div className="flex items-center max-w-7xl container h-20 justify-between">
				<Branding title="Subic Bay Yacht Club" />
				<MainNav items={navItems} />
				<MobileNav items={navItems} />
			</div>
		</header>
	);
}

const navItems: NavData[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Hotel",
		href: "/hotel",
	},
	{
		title: "Dining",
		href: "/dining",
	},
	{
		title: "Events",
		href: "/events",
	},
	{
		title: "Facilities",
		href: "/facilities",
	},
	{
		title: "Marina",
		href: "/marina",
	},
	{
		title: "Membership",
		href: "/membership",
	},
	{
		title: "Reciprocal Clubs",
		href: "/reciprocal-clubs",
	},
];
