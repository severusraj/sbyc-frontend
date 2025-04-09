"use client";
 
 import * as React from "react";
 import { usePathname, useSearchParams } from "next/navigation";
 import { motion, AnimatePresence } from "framer-motion";
 
 export function PageTransition({
 	children,
 }: {
 	readonly children: React.ReactNode;
 }) {
 	const pathname = usePathname();
 	const searchParams = useSearchParams();
 	const [isFirstMount, setIsFirstMount] = React.useState(true);
 
 	const routeKey = pathname + searchParams.toString();
 
 	React.useEffect(() => {
 		if (isFirstMount) {
 			setIsFirstMount(false);
 		}
 	}, [isFirstMount]);
 
 	const variants = {
 		hidden: { opacity: 0, x: 0, y: 20 },
 		enter: { opacity: 1, x: 0, y: 0 },
 		exit: { opacity: 0, x: 0, y: -20 },
 	};
 
 	return (
 		<AnimatePresence mode="wait">
 			<motion.div
 				key={routeKey}
 				initial={isFirstMount ? false : "hidden"}
 				animate="enter"
 				exit="exit"
 				variants={variants}
 				transition={{ duration: 0.3, ease: "easeInOut" }}
 				className="w-full"
 			>
 				{children}
 			</motion.div>
 		</AnimatePresence>
 	);
 }