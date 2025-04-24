import * as React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

type TestimonialCardProps = {
	name: string;
	role: string;
	description: string;
};

export function TestimonialCard({
	name,
	role,
	description,
}: TestimonialCardProps) {
	return (
		<Card className="overflow-hidden shadow-xl">
			<CardHeader>
				<Quote className="size-12 shrink-0 text-primary" />
			</CardHeader>
			<CardContent className="p-6">
				<p className="whitespace-pre-wrap">{description}</p>
			</CardContent>
			<CardFooter className="mt-auto pt-4 flex flex-col space-y-2 justify-start items-start">
				<div className="flex items-center gap-3">
					<Avatar className="size-10">
						<AvatarFallback>
							{name.trim().charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col space-y-1">
						<h2 className="font-bold leading-none">{name}</h2>
						<span className="text-sm text-slate-500">{role}</span>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
