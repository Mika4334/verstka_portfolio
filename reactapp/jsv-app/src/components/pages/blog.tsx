import type { Route } from "./+types/home";
import { DiscountCard } from "../ui-kit/DiscountCard";
import { FAQ } from "../views/FAQ";
import { LastArticles } from "../views/LastArticles";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Pricing" }, { name: "Pricing", content: "Our Pricing" }];
}

const qa = [
	{
		question: "How long does delivery take?",
		answer: "AAAAAAAAA",
	},
	{
		question: "How Does It Work ?",
		answer: "BBBBBB",
	},
	{
		question: "How does your food delivery service work?",
		answer: "CCCCCCC",
	},
	{
		question: "What payment options do you accept?",
		answer: "DDDDDDDDD",
	},
	{
		question: "Do you offer discounts or promotions?",
		answer: "EEEEEEEEEE",
	},
];

export default function Articles() {
	return (
		<>
			<DiscountCard />
			<LastArticles />
			<FAQ qa={qa} />
		</>
	);
}
