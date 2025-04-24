import * as React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function MembershipForm() {
	return (
		<form>
			<Card className="flex flex-col size-full shadow-xl">
				<CardHeader>
					<CardTitle className="text-xl md:text-2xl">
						Membership Application
					</CardTitle>
					<CardDescription>
						Start your journey with us — complete the form below to apply for
						membership.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-6 flex-1 flex-grow">
					<div className="space-y-2">
						<label className="font-medium leading-snug">
							Name <span className="text-red-600">*</span>
						</label>
						<div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
							<Input
								type="text"
								placeholder="First"
								className="rounded-lg h-10 border-primary/10 hover:border-primary focus-visible:border-primary"
							/>
							<Input
								type="text"
								placeholder="Last"
								className="rounded-lg h-10 border-primary/10 hover:border-primary focus-visible:border-primary"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<label className="font-medium leading-snug">
								Email <span className="text-red-600">*</span>
							</label>
							<Input
								type="email"
								placeholder="name@example.com"
								className="rounded-lg h-10 border-primary/10 hover:border-primary focus-visible:border-primary"
							/>
						</div>
						<div className="space-y-2">
							<label className="font-medium leading-snug">
								Phone Number <span className="text-red-600">*</span>
							</label>
							<Input
								type="number"
								className="rounded-lg h-10 border-primary/10 hover:border-primary focus-visible:border-primary"
							/>
						</div>
						<div className="space-y-2">
							<label className="font-medium leading-snug">Occupation</label>
							<Input
								type="text"
								className="rounded-lg h-10 border-primary/10 hover:border-primary focus-visible:border-primary"
							/>
						</div>
						<div className="space-y-2">
							<label className="font-medium leading-snug">
								Are you a boat owner?
							</label>
							<select className="bg-transparent shadow-sm rounded-lg border border-primary/10 w-full h-10 inline-flex transition-colors px-3 py-1 focus:outline-none focus:ring-0 focus:border-primary hover:border-primary cursor-pointer appearance-none">
								<option>Select</option>
								<option>Yes</option>
								<option>No</option>
							</select>
						</div>
					</div>
					<div className="space-y-2">
						<label className="font-medium leading-snug">
							Membership Type <span className="text-red-600">*</span>
						</label>
						<select className="bg-transparent shadow-sm rounded-lg border border-primary/10 w-full h-10 inline-flex transition-colors px-3 py-1 focus:outline-none focus:ring-0 focus:border-primary hover:border-primary cursor-pointer appearance-none">
							<option>Regular Membership</option>
							<option>Corporate Membership</option>
							<option>Family Membership</option>
						</select>
					</div>
					<div className="space-y-2">
						<label className="font-medium leading-snug">
							Additional Information
						</label>
						<Textarea
							placeholder="Tell us why you'd like to join Subic Bay Yacht Club..."
							className="rounded-lg h-32 transition-colors border-primary/10 hover:border-primary focus-visible:border-primary"
						/>
					</div>
				</CardContent>
				<CardFooter className="mt-auto">
					<Button className="w-full rounded-lg">Submit Application</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
