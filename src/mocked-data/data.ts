import {
	Dumbbell,
	GlassWater,
	Trophy,
	WavesLadder,
	Anchor,
	Hotel,
	Utensils,
	Calendar,
} from "lucide-react";
import type { PricingDataMap } from "@/types/PricingData";

export const pricingData: {
	berthingRates: PricingDataMap;
	locationFeatures: Record<string, string[]>;
} = {
	berthingRates: {
		"T-HEAD": {
			memberRates: {
				charges: {
					daily: 3500,
					monthly: 60000,
					yearly: 720000,
				},
			},
			nonMemberRates: {
				charges: {
					daily: 105000,
					monthly: 180000,
					yearly: 2160000,
				},
			},
		},
		"BRAVO-CHARLIE": {
			memberRates: {
				charges: {
					daily: 1575,
					monthly: 27000,
					yearly: 324000,
				},
				lengthOccupancy: 82,
				lengthCharges: 315,
			},
			nonMemberRates: {
				charges: {
					daily: 4725,
					monthly: 81000,
					yearly: 972000,
				},
				lengthOccupancy: 82,
				lengthCharges: 943,
			},
		},
		DELTA: {
			memberRates: {
				charges: {
					daily: 2245,
					monthly: 38500,
					yearly: 462000,
				},
				lengthOccupancy: 100,
				lengthCharges: 315,
			},
			nonMemberRates: {
				charges: {
					daily: 6737,
					monthly: 115500,
					yearly: 1386000,
				},
				lengthOccupancy: 100,
				lengthCharges: 943,
			},
		},
		"ECHO-FOXTROT-GOLF": {
			memberRates: {
				charges: {
					daily: 933,
					monthly: 16000,
					yearly: 192000,
				},
				lengthOccupancy: 66,
				lengthCharges: 315,
			},
			nonMemberRates: {
				charges: {
					daily: 2799,
					monthly: 48000,
					yearly: 576000,
				},
				lengthOccupancy: 66,
				lengthCharges: 943,
			},
		},
		"HOTEL-INDIA": {
			memberRates: {
				charges: {
					daily: 875,
					monthly: 15000,
					yearly: 180000,
				},
				lengthOccupancy: 50,
				lengthCharges: 315,
			},
			nonMemberRates: {
				charges: {
					daily: 2625,
					monthly: 45000,
					yearly: 540000,
				},
				lengthOccupancy: 50,
				lengthCharges: 943,
			},
		},
	},
	locationFeatures: {
		"T-HEAD": [
			"Premium location",
			"Direct access to main dock",
			"Extra wide berth",
			"Enhanced security",
		],
		"BRAVO-CHARLIE": [
			"82m length occupancy",
			"Central location",
			"Easy access to facilities",
			"Protected from waves",
		],
		DELTA: [
			"100m length occupancy",
			"Spacious berth",
			"Ideal for larger vessels",
			"Close to marina entrance",
		],
		"ECHO-FOXTROT-GOLF": [
			"66m length occupancy",
			"Quiet location",
			"Sheltered position",
			"Good for medium-sized vessels",
		],
		"HOTEL-INDIA": [
			"50m length occupancy",
			"Budget-friendly option",
			"Perfect for smaller vessels",
			"Easy shore access",
		],
	},
};

export const data = {
	hotel: [
		{
			title: "Romantic Couple's Retreat",
			description:
				"A charming escape for two, this cozy room offers soft mood lighting, a private balcony for sunset views, and a complimentary bottle of wine to set the tone for a perfect evening.",
			price: 10000,
			image: "/room-2.jpg?height=1080&width=1920",
		},
		{
			title: "Deluxe Ocean View",
			description:
				"Wake up to breathtaking ocean views in this beautifully appointed room featuring modern comforts, elegant décor, and floor-to-ceiling windows that let the sea breeze in.",
			price: 12000,
			image: "/room-3.jpg?height=1080&width=1920",
		},
		{
			title: "Marina Suite",
			description:
				"This spacious suite offers stunning marina views, a separate living area for relaxation, and sophisticated furnishings for a truly elevated stay by the water.",
			price: 18000,
			image: "/room-4.jpg?height=1080&width=1920",
		},
		{
			title: "Presidential Suite",
			description:
				"The epitome of luxury, this expansive suite boasts panoramic views, private lounge access, and personalized services designed for guests who expect nothing but the best.",
			price: 25000,
			image: "/room-1.jpg?height=1080&width=1920",
		},
	],
	dining: [
		{
			title: "The Lighthouse",
			description:
				"Indulge in a world-class dining experience featuring globally inspired dishes, elegantly plated and served with sweeping views of the bay’s sparkling waters.",
			tagName: "Fine Dining",
			image: "/dining-4.jpg?height=1080&width=1920",
		},
		{
			title: "Sunset Lounge",
			description:
				"Unwind with handcrafted cocktails, savory tapas, and live music as the sky turns golden—perfect for romantic evenings or laid-back gatherings.",
			tagName: "Bar & Lounge",
			image: "/dining-2.jpg?height=1080&width=1920",
		},
		{
			title: "Marina Café",
			description:
				"Relax in a casual waterfront setting with fresh pastries, light bites, and aromatic coffee—ideal for catch-ups, quick lunches, or solo moments of calm.",
			tagName: "Casual Dining",
			image: "/dining-3.jpg?height=1080&width=1920",
		},
	],
	events: [
		{
			title: "Annual Regatta",
			description:
				"Be part of the excitement at our prestigious annual sailing competition, where elite yachts from across Asia compete in a breathtaking display of skill and speed.",
			location: "Subic Bay Main Harbor",
			date: "09-15-2024",
			image: "/yacht-1.jpg?height=1080&width=1920",
		},
		{
			title: "Summer Yacht Party",
			description:
				"Celebrate summer in style with an unforgettable evening of gourmet dining, vibrant music, and mingling beneath the stars aboard luxury yachts.",
			location: "Subic Bay Yacht Club Marina",
			date: "07-20-2024",
			image: "/party.jpg?height=1080&width=1920",
		},
		{
			title: "Sailing Workshop",
			description:
				"Whether you're a beginner or looking to refine your technique, our hands-on workshop led by seasoned sailors offers the perfect opportunity to enhance your skills on the open water.",
			location: "Subic Bay Yacht Club Training Center",
			date: "05-21-2024",
			image: "/yacht-2.jpg?height=1080&width=1920",
		},
	],
	facilities: [
		{
			title: "Swimming Pool",
			description:
				"Take a refreshing dip in our Olympic-sized infinity pool, offering sweeping views of the bay and a serene atmosphere for both relaxation and recreation.",
			icon: WavesLadder,
			location: "SBYC Main Building",
			status: "operational",
			image: "/pool.jpg?height=1080&width=1920",
			alt: "pool-image",
			lastDateMaintenance: "01-01-2025",
			nextDateMaintenance: "12-12-2025",
		},
		{
			title: "Fitness Center",
			description:
				"Stay in shape with our cutting-edge fitness equipment, spacious training zones, and access to certified personal trainers to guide your workout routine.",
			icon: Dumbbell,
			location: "SBYC East Wing",
			status: "maintenance",
			image: "/gym.jpg?height=1080&width=1920",
			alt: "gym-image",
			lastDateMaintenance: "01-01-2025",
			nextDateMaintenance: "12-12-2025",
		},
		{
			title: "Spa & Wellness",
			description:
				"Unwind in a tranquil sanctuary with a wide range of luxurious treatments, therapeutic massages, and calming relaxation lounges designed to rejuvenate your body and mind.",
			icon: GlassWater,
			location: "SBYC Main Building",
			status: "operational",
			image: "/spa.jpg?height=1080&width=1920",
			alt: "wellness-spa-image",
			lastDateMaintenance: "01-01-2025",
			nextDateMaintenance: "12-12-2025",
		},
		{
			title: "Sports Center",
			description:
				"Challenge yourself with our multi-sport facilities, including indoor courts and open play areas—perfect for tennis, basketball, and other recreational games.",
			icon: Trophy,
			location: "SBYC Outdoor Area",
			status: "maintenance",
			image: "/sports-center.jpg?height=1080&width=1920",
			alt: "sports-center-image",
			lastDateMaintenance: "01-01-2025",
			nextDateMaintenance: "12-12-2025",
		},
	],
	features: [
		{
			title: "World-Class Marina",
			description:
				"Experience top-tier berthing with advanced docking technology, full-service maintenance, and seamless access to open waters.",
			icon: Anchor,
		},
		{
			title: "Luxury Accommodations",
			description:
				"Stay in elegantly designed rooms and suites featuring modern comforts, personalized service, and panoramic views of the sea.",
			icon: Hotel,
		},
		{
			title: "Fine Dining",
			description:
				"Savor exceptional cuisine crafted by renowned chefs, combining fresh local ingredients with international culinary artistry.",
			icon: Utensils,
		},
		{
			title: "Exclusive Events",
			description:
				"Join a year-round lineup of curated social events, regattas, and private gatherings designed for a refined lifestyle.",
			icon: Calendar,
		},
	],
	club: [
		{
			title: "Royal Hong Kong Yacht Club",
			description:
				"Steeped in over 150 years of tradition, this iconic club blends heritage with world-class sailing events and exclusive waterfront amenities.",
			country: "Hong Kong",
			image: "/hongkong-yacht-club.jpg?height=1080&width=1920",
		},
		{
			title: "Singapore Yacht Club",
			description:
				"Renowned for its state-of-the-art marina and warm hospitality, this elite club offers members a luxurious sailing experience in the heart of Southeast Asia.",
			country: "Singapore",
			image: "/singapore-yacht-club.jpg?height=1080&width=1920",
		},
		{
			title: "Royal Sydney Yacht Squadron",
			description:
				"Australia’s oldest and most prestigious sailing club, offering breathtaking views of Sydney Harbour along with elite racing, dining, and social facilities.",
			country: "Australia",
			image: "/sydney-yacht-club.jpg?height=1080&width=1920",
		},
	],
	testimonials: [
		{
			name: "James Harrison",
			role: "Member since 2018",
			description:
				"Joining Subic Bay Yacht Club was the best decision I've made. The facilities are immaculate, and the staff goes above and beyond to ensure every sailing experience is perfect.",
		},
		{
			name: "Sophia Chen",
			role: "Member since 2020",
			description:
				"As a new sailor, I was nervous about joining such a prestigious club. The community here has been incredibly welcoming, and the training programs helped me become confident on the water.",
		},
		{
			name: "Robert Miller",
			role: "Member since 2015",
			description:
				"The networking opportunities alone make membership worthwhile. I've made lifelong friends and business connections while enjoying world-class sailing and social events.",
		},
		{
			name: "Elena Rodriguez",
			role: "Member since 2019",
			description:
				"From sunset cruises to competitive regattas, Subic Bay Yacht Club offers something for every sailing enthusiast. The yacht maintenance services are exceptional - my vessel has never been in better condition.",
		},
		{
			name: "Michael Thompson",
			role: "Member since 2017",
			description:
				"The dining experience at the clubhouse rivals the finest restaurants in the city. After a day on the water, there's nothing better than enjoying gourmet cuisine with that spectacular ocean view.",
		},
		{
			name: "Olivia Parker",
			role: "Member since 2021",
			description:
				"As someone who values exclusivity and luxury, Subic Bay Yacht Club exceeds all expectations. The private events and seasonal galas are highlights of my social calendar every year.",
		},
	],
	moments: [
		{
			image: "/yacht-5.jpg?height=1080&width=1920",
			alt: "moment-1",
		},
		{
			image: "/yacht-6.jpg?height=1080&width=1920",
			alt: "moment-2",
		},
		{
			image: "/yacht-7.jpg?height=1080&width=1920",
			alt: "moment-3",
		},
		{
			image: "/yacht-4.jpg?height=1080&width=1920",
			alt: "moment-4",
		},
	],
	marina: [
		{
			title: "Premium Berthing",
			description:
				"Spacious, state-of-the-art berths equipped with full utilities and 24/7 security for peace of mind.",
			image: "/yacht-4.jpg?height=1080&width=1920",
		},
		{
			title: "Security Services",
			description:
				"Enjoy round-the-clock protection with advanced surveillance systems and professional on-site personnel.",
			image: "/cctv.jpg?height=1080&width=1920",
		},
		{
			title: "Maintenance",
			description:
				"From routine upkeep to expert repairs, our team ensures your yacht stays in peak condition.",
			image: "/maintenance.jpg?height=1080&width=1920",
		},
		{
			title: "Weather Updates",
			description:
				"Access accurate, real-time weather reports and forecasts to ensure safe and informed sailing.",
			image: "/weather.jpg?height=1080&width=1920",
		},
	],
};
