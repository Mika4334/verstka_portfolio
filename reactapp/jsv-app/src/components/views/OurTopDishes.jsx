import { H2 } from "../ui-kit/H2";
import { DishCard } from "../views/DishCard";
import { ViewAll } from "../ui-kit/ViewAll";

export function OurTopDishes() {
	return (
		<section className='flex flex-col gap-12.5'>
			<H2
				beforeText='Our Top'
				spanText='Dishes'
				textSize='text-[38px]! sm:text-[100px]!'
			/>
			<div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-y-10'>
				<DishCard
					w='w-[247px]'
					srcImg='/img/dishes/fi1.png'
					badgeText='Healthy'
					badgeColor='y'
				/>
				<DishCard
					w='w-[247px]'
					srcImg='/img/dishes/fi1.png'
					badgeText='Trending'
					badgeColor='r'
				/>
				<DishCard
					w='w-[247px]'
					srcImg='/img/dishes/fi1.png'
					badgeText='Supreme'
					badgeColor='g'
				/>
			</div>
			<ViewAll />
		</section>
	);
}
