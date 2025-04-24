import * as React from "react";
import type { LucideProps } from "lucide-react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "../ui/card";

type FeatureCardProps = {
	title: string;
	description: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

export function FeatureCard({
	title,
	description,
	icon: Icon,
}: FeatureCardProps) {
	return (
		<Card className="flex flex-col size-full cursor-pointer group transition-shadow hover:shadow-xl">
			<CardHeader>
				<Icon className="size-14 shrink-0" />
			</CardHeader>
			<CardContent className="flex flex-col space-y-2 flex-grow">
				<CardTitle className="group-hover:underline underline-offset-4">
					{title}
				</CardTitle>
				<CardDescription className="text-slate-500 text-balance">
					{description}
				</CardDescription>
			</CardContent>
		</Card>
	);
}
