import * as React from "react";
import Link from "next/link";
import { Ship, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import {
	SiFacebook as Facebook,
	SiX as X,
	SiInstagram as Instagram,
	SiYoutube as YouTube,
} from "@icons-pack/react-simple-icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
	return (
		<footer className="text-white bg-primary">
			<div className="container max-w-7xl py-14">
				{/* Main Layout */}
				<div className="hidden justify-between md:flex">
					<div className="flex flex-col gap-6">
						<div className="inline-flex items-center justify-center rounded-lg size-14 bg-white text-primary">
							<Ship className="size-9 shrink-0" />
						</div>
						<div className="flex flex-col gap-2">
							<Link href="/" className="text-2xl font-bold tracking-tighter">
								Subic Bay Yacht Club
							</Link>
							<span className="text-sm text-slate-500">
								&copy; {new Date().getFullYear()} SBYC. All Rights Reserved.
							</span>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-8">
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">Office</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<div className="flex flex-col space-y-2">
								<div className="flex items-center space-x-3">
									<MapPin className="size-4 text-slate-500" />
									<p className="text-sm">Subic Bay Freeport Zone</p>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="size-4 text-slate-500" />
									<p className="text-sm">+63 (47) 252-3000</p>
								</div>
								<div className="flex items-center space-x-3">
									<Mail className="size-4 text-slate-500" />
									<p className="text-sm">info@sbyc.ph</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">Links</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<ul className="space-y-2">
								{siteLinks.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-sm font-medium hover:underline"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">Legal</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<ul className="space-y-2">
								{legalLinks.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-sm font-medium hover:underline"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-6 justify-end">
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">
									Newsletter
								</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<div className="relative w-full">
								<Input
									className="h-11 pr-12 rounded-lg border-slate-500 hover:border-white focus-visible:border-white"
									placeholder="Enter your email"
								/>
								<Button
									size="icon"
									className="size-8 px-2 py-1 rounded-lg absolute top-1/2 -translate-y-1/2 right-2 border-transparent bg-white text-primary hover:bg-white/80"
								>
									<ArrowRight className="size-4 shrink-0" />
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">
									Follow Us
								</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<ul className="flex items-center space-x-6">
								{socialLinks.map(({ title, href, icon: Icon }) => (
									<li key={title}>
										<a
											href={href}
											rel="noreferrer"
											target="_blank"
											className="text-slate-400 transition-colors hover:text-white"
										>
											<Icon className="size-6 shrink-0" />
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* Mobile Layout */}
				<div className="flex flex-col gap-8 md:hidden">
					<div className="flex flex-col gap-4">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold leading-snug">Newsletter</h2>
							<div className="border border-t border-slate-500" />
						</div>
						<div className="relative w-full">
							<Input
								className="h-11 pr-12 rounded-lg border-slate-500 hover:border-white focus-visible:border-white"
								placeholder="Enter your email"
							/>
							<Button
								size="icon"
								className="size-8 px-2 py-1 rounded-lg absolute top-1/2 -translate-y-1/2 right-2 border-transparent bg-white text-primary hover:bg-white/80"
							>
								<ArrowRight className="size-4 shrink-0" />
							</Button>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold leading-snug">Office</h2>
							<div className="border border-t border-slate-500" />
						</div>
						<div className="flex flex-col space-y-2">
							<div className="flex items-center space-x-3">
								<MapPin className="size-4 text-slate-500" />
								<p className="text-sm">Subic Bay Freeport Zone</p>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="size-4 text-slate-500" />
								<p className="text-sm">+63 (47) 252-3000</p>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="size-4 text-slate-500" />
								<p className="text-sm">info@sbyc.ph</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-6">
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">Links</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<ul className="space-y-2">
								{siteLinks.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-sm font-medium hover:underline"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<div className="space-y-2">
								<h2 className="text-lg font-semibold leading-snug">Legal</h2>
								<div className="border border-t border-slate-500" />
							</div>
							<ul className="space-y-2">
								{legalLinks.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-sm font-medium hover:underline"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="mx-auto grid grid-cols-2 gap-8 pt-6">
						{socialLinks.map(({ title, href, icon: Icon }) => (
							<a
								key={title}
								href={href}
								rel="noreferrer"
								target="_blank"
								className="text-slate-400 transition-colors hover:text-white"
							>
								<Icon className="size-8 shrink-0" />
							</a>
						))}
					</div>
					<div className="mx-auto flex flex-col items-center justify-center pt-4">
						<div className="inline-flex items-center justify-center rounded-lg size-16 bg-white text-primary">
							<Ship className="size-12 shrink-0" />
						</div>
						<div className="pt-4 flex flex-col gap-2 text-center justify-center">
							<Link href="/" className="text-2xl font-bold tracking-tighter">
								Subic Bay Yacht Club
							</Link>
							<span className="text-sm text-slate-500">
								&copy; {new Date().getFullYear()} SBYC. All Rights Reserved.
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const siteLinks = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Membership",
		href: "/membership",
	},
	{
		title: "Accommodation",
		href: "/hotel",
	},
	{
		title: "Marina",
		href: "/marina",
	},
];

const legalLinks = [
	{
		title: "Terms of Service",
		href: "/terms",
	},
	{
		title: "Privacy Policy",
		href: "/privacy",
	},
	{
		title: "Cookie Policy",
		href: "/cookies",
	},
];

const socialLinks = [
	{
		title: "Facebook",
		href: "#",
		icon: Facebook,
	},
	{
		title: "X",
		href: "#",
		icon: X,
	},
	{
		title: "Instagram",
		href: "#",
		icon: Instagram,
	},
	{
		title: "YouTube",
		href: "#",
		icon: YouTube,
	},
];
