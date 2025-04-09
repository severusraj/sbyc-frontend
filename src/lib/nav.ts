import {
	Home,
	Ship,
	Utensils,
	User2,
	Building2,
	Calendar,
	Handshake,
	Hotel,
} from "lucide-react";

export const mobileNav = [
	{
		href: "/",
		name: "home",
		icon: Home,
	},
	{
		href: "/hotel",
		name: "hotel",
		icon: Hotel,
	},
	{
		href: "/dining",
		name: "dining",
		icon: Utensils,
	},
	{
		href: "/events",
		name: "events",
		icon: Calendar,
	},
	{
		href: "/facilities",
		name: "facilities",
		icon: Building2,
	},
	{
		href: "/marina",
		name: "marina",
		icon: Ship,
	},
	{
		href: "/membership",
		name: "membership",
		icon: User2,
	},
	{
		href: "/reciprocal-clubs",
		name: "reciprocal clubs",
		icon: Handshake,
	},
];

export const mainNav = [
	{
		href: "/",
		name: "home",
	},
	{
		href: "/hotel",
		name: "hotel",
	},
	{
		href: "/dining",
		name: "dining",
	},
	{
		href: "/events",
		name: "events",
	},
	{
		href: "/facilities",
		name: "facilities",
	},
	{
		href: "/marina",
		name: "marina",
	},
	{
		href: "/membership",
		name: "membership",
	},
	{
		href: "/reciprocal-clubs",
		name: "reciprocal clubs",
	},
];

export type MobileNav = typeof mobileNav;
export type MainNav = typeof mainNav;