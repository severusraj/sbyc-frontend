"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X } from "lucide-react";
import { Button } from "./ui/button";
import type { NavData } from "@/types/NavData";

type MobileNavProps = {
	items: NavData[];
};

export function MobileNav({ items }: MobileNavProps) {
	const pathname = usePathname();
	const [interacted, setInteracted] = React.useState<boolean>(false);

	function toggleMenu() {
		setInteracted(!interacted);
	}

	return (
		<div className="relative z-50 md:hidden">
			{!interacted && (
				<Button
					variant="ghost"
					size="icon"
					className="size-7 z-50 px-2 py-1 md:hidden"
					onClick={toggleMenu}
					aria-label="Open Menu"
				>
					<AlignRight size={28} />
				</Button>
			)}
			<AnimatePresence>
				{interacted && (
					<motion.div
						initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
						animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
						exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="fixed top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center space-y-6 z-50"
					>
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-8 right-8 size-7 px-2 py-1 rounded-lg"
							onClick={toggleMenu}
							aria-label="Close Menu"
						>
							<X size={28} />
						</Button>
						{items.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								onClick={toggleMenu}
								className={`relative whitespace-nowrap text-lg font-semibold transition hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
									pathname === item.href
										? "text-secondary after:w-full"
										: "after:w-0 hover:after:w-full"
								}`}
							>
								{item.title}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
