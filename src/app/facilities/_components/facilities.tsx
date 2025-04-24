"use client";

import * as React from "react";
import { FilterIcon, SearchIcon } from "lucide-react";
import { FacilitiesList } from "./facilities-list";
import { Input } from "@/components/ui/input";
import { data } from "@/mocked-data/data";
import type { FacilitiesData } from "@/types/FacilitiesData";

export function Facilities() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [statusFilter, setStatusFilter] = React.useState("all");

	const filteredFacilities = data.facilities.filter((item) => {
		const matchesSearch =
			item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.status.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesStatus =
			statusFilter === "all" || item.status === statusFilter;

		return matchesSearch && matchesStatus;
	}) as FacilitiesData[];

	return (
		<section className="py-12 w-full flex flex-col gap-6">
			<div className="px-8 flex flex-col space-y-4 md:px-0 md:mx-auto md:max-w-5xl md:flex-row md:items-center md:justify-between md:w-full md:space-y-0">
				<div className="relative flex items-center">
					<SearchIcon className="absolute left-3 size-5 text-gray-500" />
					<Input
						type="text"
						value={searchTerm}
						placeholder="Search facilities..."
						onChange={(e) => setSearchTerm(e.target.value)}
						className="h-10 w-full md:w-96 pl-10 rounded-lg border-primary/10 hover:border-primary focus-visible:border-primary"
					/>
				</div>
				<div className="flex items-center gap-3">
					<FilterIcon className="size-6 text-gray-500 hidden md:block" />
					<select
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}
						className="bg-transparent border border-primary/10 w-full h-10 inline-flex transition-colors px-3 py-1 rounded-lg focus:outline-none focus:ring-0 focus:border-primary hover:border-primary cursor-pointer appearance-none"
					>
						<option value="all">All</option>
						<option value="operational">Operational</option>
						<option value="maintenance">Maintenance</option>
					</select>
				</div>
			</div>
			<FacilitiesList items={filteredFacilities} />
		</section>
	);
}
