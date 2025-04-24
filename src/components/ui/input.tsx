import * as React from "react";
import { cn } from "@/lib/utils";

type InputBaseComponent = HTMLElementTagNameMap["input"];

export const Input = React.forwardRef<
	InputBaseComponent,
	React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"h-9 flex w-full rounded-md border border-primary bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-navy-900 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-0",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";
