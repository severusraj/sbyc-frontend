import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md gap-2 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-white hover:bg-secondary",
				destructive: "bg-red-600 text-white hover:bg-red-600/90",
				ghost: "hover:bg-primary/5",
				outline: "border border-primary hover:bg-primary/5",
				link: "p-0 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				xs: "h-8 px-2 py-1",
				sm: "h-9 px-3 py-1",
				lg: "h-11 px-6 py-2",
				xl: "h-16 px-8 py-4 text-lg font-bold",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonBaseElement = HTMLElementTagNameMap["button"];

type ButtonProps = React.ButtonHTMLAttributes<ButtonBaseElement> &
	VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<ButtonBaseElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";
