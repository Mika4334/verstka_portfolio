import type { Route } from "./+types/home";
import { Hero } from "../views/Hero";
import { Download } from "../views/Download";
import { OurTopRest } from "../views/OurTopRest";
import { Features } from "../ui-kit/Features";

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
			<OurTopRest />
		</>
	);
}
