import * as React from "react";
import { cn } from "@/lib/utils";

type SectionListBaseElement = HTMLElementTagNameMap["section"];

type SectionListProps = React.HTMLAttributes<SectionListBaseElement> & {
	title: string;
	description: string;
};

export function SectionList({
	title,
	description,
	className,
	id,
	children,
	...props
}: SectionListProps) {
	return (
		<section
			id={id}
			className={cn("w-full py-14 md:py-24 lg:py-32", className)}
			{...props}
		>
			<div className="flex flex-col gap-6">
				<div className="container">
					<div className="space-y-2">
						<h1 className="heading">{title}</h1>
						<p className="paragraph">{description}</p>
					</div>
				</div>
				{children}
			</div>
		</section>
	);
}
