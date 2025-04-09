"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ship } from "lucide-react";
import { mobileNav } from "@/lib/nav";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);

	function toggleMenu() {
		setOpen((prev) => !prev);
	}

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		function handleClickOutside() {
			if (open) {
				setOpen(false);
			}
		}

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
			document.body.style.overflow = "auto";
		};
	}, [open]);

	function handleMenu(e: React.MouseEvent) {
		e.stopPropagation();
	}

	return (
		<div className="relative">
			<Button
				variant="ghost"
				className="size-6 px-2 py-1 md:hidden"
				size="icon"
				onClick={(e) => {
					e.stopPropagation();
					toggleMenu();
				}}
				aria-label="Toggle menu"
			>
				<Menu className="size-4" />
			</Button>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-white backdrop-blur-sm z-50 md:hidden"
					>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="fixed inset-0 w-full h-full p-6 bg-white"
							onClick={handleMenu}
						>
							<div className="flex items-center justify-between w-full px-6">
								<Link
									href="/"
									className="flex items-center space-x-2"
									onClick={() => setOpen(false)}
								>
									<Ship className="size-8" />
									<h1 className="text-lg font-bold leading-none tracking-tighter">
										Subic Bay Yacht Club
									</h1>
								</Link>
								<div className="flex items-center">
									<Button
										variant="ghost"
										size="icon"
										className="size-6 px-2 py-1"
										onClick={toggleMenu}
										aria-label="Toggle menu"
									>
										<X className="size-4" />
									</Button>
								</div>
							</div>
							<div className="mt-8 flex flex-col gap-5">
								<div className="flex flex-col space-y-2">
									{mobileNav.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={`inline-flex items-center gap-2 px-4 py-2 rounded-md h-10 transition-colors text-lg font-semibold capitalize hover:bg-blue-200/60 ${
												pathname === item.href ? "bg-blue-200/60" : ""
											}`}
										>
											<item.icon className="size-5" />
											{item.name}
										</Link>
									))}
								</div>
								<div className="border-t py-4 border-blue-200/40">
									<Link
										href="/sign-in"
										className={cn(buttonVariants({ className: "w-full" }))}
									>
										Sign In
									</Link>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}