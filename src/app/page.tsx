import * as React from "react";
import { SectionList } from "@/components/section-list";
import {
	Hero,
	Features,
	Moments,
	Pricing,
	Hotel,
	Dining,
	Events,
	Facilities,
	Clubs,
	Testimonials,
	CallToAction,
} from "@/components/sections";
import { headingAndDescription } from "@/lib/constants";
import { data } from "@/mocked-data/data";
import type { FacilitiesData } from "@/types/FacilitiesData";

export default function HomePage() {
	return (
		<>
			<Hero
				title={headingAndDescription.heroSection.title}
				description={headingAndDescription.heroSection.description}
			/>
			<SectionList
				id="features"
				title={headingAndDescription.featuresSection.title}
				description={headingAndDescription.featuresSection.description}
			>
				<Features items={data.features} />
			</SectionList>
			<SectionList
				id="moments"
				title={headingAndDescription.momentsSection.title}
				description={headingAndDescription.momentsSection.description}
				className="bg-secondary/5"
			>
				<Moments items={data.moments} />
			</SectionList>
			<SectionList
				id="pricing"
				title={headingAndDescription.pricingSection.title}
				description={headingAndDescription.pricingSection.description}
			>
				<Pricing
					title={headingAndDescription.pricingSection.footer.title}
					description={headingAndDescription.pricingSection.footer.description}
				/>
			</SectionList>
			<SectionList
				id="hotel"
				title={headingAndDescription.hotelSection.title}
				description={headingAndDescription.hotelSection.description}
				className="bg-secondary/5"
			>
				<Hotel items={data.hotel} />
			</SectionList>
			<SectionList
				id="dining"
				title={headingAndDescription.diningSection.title}
				description={headingAndDescription.diningSection.description}
			>
				<Dining items={data.dining} />
			</SectionList>
			<SectionList
				id="events"
				title={headingAndDescription.eventsSection.title}
				description={headingAndDescription.eventsSection.description}
				className="bg-secondary/5"
			>
				<Events items={data.events} />
			</SectionList>
			<SectionList
				id="facilities"
				title={headingAndDescription.facilitiesSection.title}
				description={headingAndDescription.facilitiesSection.description}
			>
				<Facilities items={data.facilities as FacilitiesData[]} />
			</SectionList>
			<SectionList
				id="clubs"
				title={headingAndDescription.clubSection.title}
				description={headingAndDescription.clubSection.description}
				className="bg-secondary/5"
			>
				<Clubs items={data.club} />
			</SectionList>
			<SectionList
				id="testimonials"
				title={headingAndDescription.testimonialsSection.title}
				description={headingAndDescription.testimonialsSection.description}
			>
				<Testimonials items={data.testimonials} />
			</SectionList>
			<SectionList
				id="call-to-action"
				title={headingAndDescription.ctaSection.title}
				description={headingAndDescription.ctaSection.description}
				className="bg-secondary/5"
			>
				<CallToAction />
			</SectionList>
		</>
	);
}
