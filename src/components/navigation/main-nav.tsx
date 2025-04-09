"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export function MainNav() {
	const pathname = usePathname();

	return (
		<>
			<nav className="hidden flex-1 items-center space-x-6 md:flex">
				{mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={`relative capitalize whitespace-nowrap text-sm font-medium transition hover:text-blue-600/80 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600/80 after:transition-all after:duration-300 ${
							pathname === item.href
								? "text-blue-600/80 after:w-full"
								: "after:w-0 hover:after:w-full"
						}`}
					>
						{item.name}
					</Link>
				))}
			</nav>
			<div className="hidden flex-1 md:flex items-center justify-end">
				<Link href="/sign-in" className={cn(buttonVariants())}>
					Sign In
				</Link>
			</div>
		</>
	);
}