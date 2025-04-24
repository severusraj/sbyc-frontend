import * as React from "react";
import { cn } from "@/lib/utils";

type CardBaseComponent = HTMLElementTagNameMap["div"];

export const Card = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"rounded-xl bg-muted/40 shadow-md border border-border",
			className,
		)}
		{...props}
	/>
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("font-semibold leading-none tracking-tight", className)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("text-sm", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
	CardBaseComponent,
	React.HTMLAttributes<CardBaseComponent>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";
