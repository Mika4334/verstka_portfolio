import type { Route } from "./+types/home";
import { Hero } from "../views/Hero";
import { Download } from "../views/Download";
import { OurTopRest } from "../views/OurTopRest";
import { OurTopDishes } from "../views/OurTopDishes";
import { ControlPurchase } from "../views/ControlPurchase";
import { CustomersSay } from "../views/CustomersSay";
import { Features } from "../ui-kit/Features";
import { DiscountCard } from "../ui-kit/DiscountCard";
import { HR } from "../ui-kit/HR";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Eatly" },
		{ name: "delivery food service", content: "Welcome to Eatly" },
	];
}

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Download />
			<HR />
			<OurTopRest viewAllOnTop='hidden' viewAllOnBottom='flex self-end' />
			<HR />
			<OurTopDishes viewAllOnTop='hidden' viewAllOnBottom='flex self-end' />
			<HR />
			<ControlPurchase />
			<HR />
			<CustomersSay />
			<DiscountCard />
		</>
	);
}
