import type { Route } from "./+types/home";
import { PlanPlate } from "../views/PlanPlate";
import { PricingHero } from "../views/PricingHero";
import { ControlPurchase } from "../views/ControlPurchase";
import { CustomersSay } from "../views/CustomersSay";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Pricing" }, { name: "Pricing", content: "Our Pricing" }];
}

export default function Pricing() {
	return (
		<>
			<PricingHero />
			<PlanPlate allFeatures={undefined} plan0={undefined} plan1={undefined} />
			{/* <PlanPlate allFeatures={features} plan0={planZero} plan1={planOne} /> */}
			<ControlPurchase />
			<CustomersSay />
		</>
	);
}
