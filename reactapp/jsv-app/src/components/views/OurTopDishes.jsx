import { H2 } from "../ui-kit/H2";
import { DishCard } from "../views/DishCard";
import { ViewAll } from "../ui-kit/ViewAll";

export function OurTopDishes({
	beforeText = "Our Top ",
	spanText = "Dishes",
	textSize = "text-[38px]! sm:text-[50px]! xl:text-[100px]!",
	viewAllOnTop,
	viewAllOnBottom,
}) {
	let dishCards = [];
	for (let i = 0; i < 5; i++) {
		dishCards.push(
			<DishCard
				key={i}
				w='w-56 min-w-56'
				srcImg='/img/dishes/fi1.png'
				badgeText='Healthy'
				badgeColor='y'
			/>,
		);
	}
	return (
		<section className='flex flex-col gap-12.5'>
			<div className='flex justify-between items-center'>
				<H2 beforeText={beforeText} spanText={spanText} textSize={textSize} />
				<div className={viewAllOnTop ? viewAllOnTop : ""}>
					<ViewAll />
				</div>
			</div>
			<div className='flex flex-wrap flex-col justify-center items-center lg:justify-around lg:flex-row gap-7'>
				{dishCards}
			</div>
			<div className={viewAllOnBottom ? viewAllOnBottom : ""}>
				<ViewAll />
			</div>
		</section>
	);
}
// export function OurTopDishes({ viewAllOnTop, viewAllOnBottom }) {
// 	return (
// 		<section className='flex flex-col gap-12.5'>
// 			<div className='flex justify-between items-center'>
// 				<H2
// 					beforeText='Our Top '
// 					spanText='Dishes'
// 					textSize='text-[38px]! sm:text-[50px]! xl:text-[100px]!'
// 				/>
// 				<div className={viewAllOnTop ? viewAllOnTop : ""}>
// 					<ViewAll />
// 				</div>
// 			</div>
// 			<div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-7'>

// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Healthy'
// 					badgeColor='y'
// 				/>
// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Trending'
// 					badgeColor='r'
// 				/>
// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Supreme'
// 					badgeColor='g'
// 				/>
// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Supreme'
// 					badgeColor='g'
// 				/>
// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Supreme'
// 					badgeColor='g'
// 				/>
// 				<DishCard
// 					w='w-56'
// 					srcImg='/img/dishes/fi1.png'
// 					badgeText='Supreme'
// 					badgeColor='g'
// 				/>
// 			</div>
// 			<div className={viewAllOnBottom ? viewAllOnBottom : ""}>
// 				<ViewAll />
// 			</div>
// 		</section>
// 	);
// }
