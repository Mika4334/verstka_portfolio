import type { Route } from "./+types/home";
import { Cart } from "../views/Cart";
import { DiscountCard } from "../ui-kit/DiscountCard";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Cart" }, { name: "Cart", content: "Cart" }];
}

const coupons = [
	{
		code: "SAVE10",
		type: "percentage",
		value: 10,
		minOrder: 50,
		maxDiscount: 30,
		expiryDate: "2026-12-31",
	},
	{
		code: "FIXED20",
		type: "fixed",
		value: 20, // $20 скидки
		minOrder: 100,
		expiryDate: "2024-12-31",
	},
	{
		code: "WELCOME15",
		type: "percentage",
		value: 15,
		maxDiscount: 50,
	},
];

const pOrder = [
	{
		productName: "Chicken Hell",
		imgSrc: "/img/dishes/fi1.png",
		price: 5.0,
	},
	{
		productName: "Swe Dish",
		imgSrc: "/img/dishes/fi2.png",
		price: 5.0,
	},
	{
		productName: "Sweet Salad",
		imgSrc: "/img/dishes/fi3.png",
		price: 5.0,
	},
	{
		productName: "File'o fish",
		imgSrc: "/img/dishes/fi4.png",
		price: 5.0,
	},
];

export default function MainCart() {
	return (
		<>
			<Cart
				preOrder={pOrder}
				customerAdress='Pushkina streeet'
				coupons={coupons}
			/>
			<DiscountCard />
		</>
	);
}
