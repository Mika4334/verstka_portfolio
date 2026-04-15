import type { Route } from "./+types/home";
import { PlanPlate } from "../views/PlanPlate";
import { PricingHero } from "../views/PricingHero";
import { ControlPurchase } from "../views/ControlPurchase";
import { CustomersSay } from "../views/CustomersSay";
import { FeatureItem, FeatureListItem } from "../ui-kit/FeatureItem";
import { PlanCard } from "../ui-kit/PlanCard";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Pricing" }, { name: "Pricing", content: "Our Pricing" }];
}

const basicPlan = [
	{
		allowed: true,
		feature: "Support 24/7",
	},
	{
		allowed: true,
		feature: "Fast Delivery",
	},
	{
		allowed: true,
		feature: "20% Off Food Deals",
	},
	{
		allowed: false,
		feature: "Transaction History",
	},
	{
		allowed: false,
		feature: "Weekend Deals",
	},
	{
		allowed: false,
		feature: "Dashboard Access",
	},
	{
		allowed: false,
		feature: "Premium Group Access",
	},
];

const premiumPlan = [
	{
		allowed: true,
		feature: "Support 24/7",
	},
	{
		allowed: true,
		feature: "Fast Delivery",
	},
	{
		allowed: true,
		feature: "20% Off Food Deals",
	},
	{
		allowed: true,
		feature: "Transaction History",
	},
	{
		allowed: true,
		feature: "Weekend Deals",
	},
	{
		allowed: true,
		feature: "Dashboard Access",
	},
	{
		allowed: true,
		feature: "Premium Group Access",
	},
];

let basic = basicPlan.map((element, index) => (
	<FeatureItem
		key={`feaID ${index}`}
		allow={element.allowed}
		text={element.feature}
	/>
));
let premium = premiumPlan.map((element, index) => (
	<FeatureItem
		key={`feaID ${index}`}
		allow={element.allowed}
		text={element.feature}
	/>
));
let allPlansFeatures = [
	...new Set([
		...basicPlan.map((item) => item.feature),
		...premiumPlan.map((item) => item.feature),
	]),
].map((element, index) => (
	<FeatureListItem key={`fliID ${index}`} text={element} />
));

let basicForPlate = basicPlan.map((element, index) => (
	<FeatureItem key={`feaID ${index}`} allow={element.allowed} text='' />
));
let premiumForPlate = premiumPlan.map((element, index) => (
	<FeatureItem key={`feaID ${index}`} allow={element.allowed} text='' />
));

export default function Pricing() {
	return (
		<>
			<PricingHero />
			<PlanCard planName='basic' price='0' featureItems={basic} />
			<PlanCard planName='premium' price='9' featureItems={premium} />
			<PlanPlate
				allFeatures={allPlansFeatures}
				plan0={basicForPlate}
				plan1={premiumForPlate}
			/>
			{/* <PlanPlate allFeatures={features} plan0={planZero} plan1={planOne} /> */}
			<ControlPurchase />
			<CustomersSay />
		</>
	);
}
