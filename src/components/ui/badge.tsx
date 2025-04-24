import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
	"inline-flex items-center justify-center cursor-pointer rounded-md whitespace-nowrap px-2 py-0.5 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-white hover:bg-secondary",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type BadgeBaseComponent = HTMLElementTagNameMap["div"];

type BadgeProps = React.HTMLAttributes<BadgeBaseComponent> &
	VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant, className }))} {...props} />
	);
}
