"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import type { NavData } from "@/types/NavData";
import { cn } from "@/lib/utils";

type MainNavProps = {
	items: NavData[];
};

export function MainNav({ items }: MainNavProps) {
	const pathname = usePathname();

	return (
		<>
			<nav className="hidden items-center justify-center gap-x-5 md:flex">
				{items.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className={`relative whitespace-nowrap font-semibold transition hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
							pathname === item.href
								? "text-secondary after:w-full"
								: "after:w-0 hover:after:w-full"
						}`}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</>
	);
}
