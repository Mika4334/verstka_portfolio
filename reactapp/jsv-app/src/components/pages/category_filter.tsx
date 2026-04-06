import type { Route } from "./+types/home";
import { FilterControl } from "../views/FilterControl";
import { OurTopRest } from "../views/OurTopRest";
import { OurTopDishes } from "../views/OurTopDishes";
import { FAQ } from "../views/FAQ";
import { HR } from "../ui-kit/HR";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Categories" },
		{ name: "filter by category", content: "filter by category" },
	];
}

const qa = [
	{
		question: "Question  #01",
		answer: "AAAAAAAAA",
	},
	{
		question: "Question  #02",
		answer: "BBBBBB",
	},
	{
		question: "Question  #03",
		answer: "CCCCCCC",
	},
	{
		question: "Question  #04",
		answer: "DDDDDDDDD",
	},
];

export default function CategoryFilter() {
	return (
		<>
			<FilterControl />
			<OurTopRest
				viewAllOnTop='hidden md:flex'
				viewAllOnBottom='md:hidden flex self-end'
			/>
			<HR />
			<OurTopDishes
				viewAllOnTop='hidden md:flex'
				viewAllOnBottom='md:hidden flex self-end'
			/>
			<HR />
			<FAQ qa={qa} />
		</>
	);
}
