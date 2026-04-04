import type { Route } from "./+types/home";
import { Hero } from "../views/Hero";
import { Download } from "../views/Download";
import { OurTopRest } from "../views/OurTopRest";
import { OurTopDishes } from "../views/OurTopDishes";
import { ControlPurchase } from "../views/ControlPurchase";
import { CustomersSay } from "../views/CustomersSay";
import { Features } from "../ui-kit/Features";
import { DiscountCard } from "../ui-kit/DiscountCard";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Eatly" },
		{ name: "delivery food service", content: "Welcome to Eatly" },
	];
}

// ADD BURGER MENU
export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Download />
			<hr className='bg-hr h-0.5 border-0' />
			<OurTopRest />
			<hr className='bg-hr h-0.5 border-0' />
			<OurTopDishes />
			<hr className='bg-hr h-0.5 border-0' />
			<ControlPurchase />
			<hr className='bg-hr h-0.5 border-0' />
			<CustomersSay />
			<DiscountCard />
		</>
	);
}
