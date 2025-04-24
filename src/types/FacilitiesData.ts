import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export type FacilitiesData = {
	title: string;
	description: string;
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
	status: "operational" | "maintenance";
	location: string;
	lastDateMaintenance: string;
	nextDateMaintenance: string;
	image: string;
	alt: string;
};
