import * as React from "react";
import type { FeatureData } from "@/types/FeatureData";
import { FeaturesList } from "./features-list";

type FeaturesProps = {
	items: FeatureData[];
};

export function Features({ items }: FeaturesProps) {
	return <FeaturesList items={items} />;
}
