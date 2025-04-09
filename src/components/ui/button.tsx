import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md gap-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-blue-900 text-blue-50 hover:bg-blue-900/90",
				destructive:
					"border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
				ghost: "hover:bg-blue-200/60",
				outline: "border border-blue-600/60 hover:bg-blue-200/60",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				xs: "h-8 px-2 py-0.5",
				sm: "h-9 px-3 py-1",
				lg: "h-11 px-8 py-2",
				xl: "h-16 px-10 py-4 text-lg font-bold",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonBaseComponent = HTMLElementTagNameMap["button"];

type ButtonProps = React.ButtonHTMLAttributes<ButtonBaseComponent> &
	VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<ButtonBaseComponent, ButtonProps>(
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