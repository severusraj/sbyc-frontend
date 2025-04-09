import * as React from "react";
 import { BrandName } from "./brand-name";
 import { MainNav } from "./main-nav";
 import { MobileNav } from "./mobile-nav";
 
 export function Navbar() {
 	return (
 		<header className="sticky top-0 z-50 w-full bg-white">
 			<div className="container max-w-7xl flex items-center justify-between h-16">
 				<BrandName />
 				<MainNav />
 				<MobileNav />
 			</div>
 		</header>
 	);
 }