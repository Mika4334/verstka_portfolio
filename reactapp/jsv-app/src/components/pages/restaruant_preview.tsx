import type { Route } from "./+types/home";
import { RestCard } from "../views/RestCard";
import { OurTopDishes } from "../views/OurTopDishes";
import { FAQ } from "../views/FAQ";
import { HR } from "../ui-kit/HR";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Restaurant:ID" },
		{ name: "rest name", content: "rest name content" },
	];
}

const qa = [
	{
		question: "How long does delivery take?",
		answer:
			"You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
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
		answer: "DDDDDDDDD",
	},
];

export default function RestPreview() {
	return (
		<>
			<RestCard
				w='w-full'
				h='h-124'
				srcImg={`bg-[url(/img/rest/kfc.png)]`}
				imgH='h-100'
				alt='kfc'
				href='#'
				badgeColor='y'
				badgeText='Healthy'
				badgeHide={true}
				restPreview={true}
			/>
			<OurTopDishes
				viewAllOnTop='hidden'
				viewAllOnBottom='hidden'
				beforeText='Popular 🔥'
				spanText=''
				textSize='text-[38px]! sm:text-[50px]!'
			/>
			<OurTopDishes
				viewAllOnTop='hidden'
				viewAllOnBottom='hidden'
				beforeText='Chicken Vegetables'
				spanText=''
				textSize='text-[38px]! sm:text-[50px]!'
			/>
			<HR />
			<FAQ qa={qa} />
		</>
	);
}
