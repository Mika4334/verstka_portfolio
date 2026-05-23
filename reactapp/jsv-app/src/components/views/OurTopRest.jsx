import { H2 } from "../ui-kit/H2";
import { RestCard } from "../views/RestCard";
import { ViewAll } from "../ui-kit/ViewAll";

export function OurTopRest({ viewAllOnTop, viewAllOnBottom }) {
	// let restCards = [];
	// for (let i = 0; i < 7; i++) {
	// 	restCards.push(
	// 		<RestCard
	// 			key={i}
	// 			w='w-99'
	// 			h='max-h-74'
	// 			srcImg={`bg-[url(/img/rest/kfc.png)]`}
	// 			href='#'
	// 			badgeColor='y'
	// 			badgeText='Healthy'
	// 		/>,
	// 	);
	// }
	return (
		<section className='flex flex-col gap-12.5'>
			<div className='flex justify-between items-center'>
				<H2
					beforeText='Our Top '
					spanText='Restarunt'
					textSize='text-[38px]! sm:text-[50px]! xl:text-[100px]!'
				/>
				<div className={viewAllOnTop ? viewAllOnTop : ""}>
					<ViewAll />
				</div>
			</div>
			<div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-10'>
				<RestCard
					w='w-99'
					h='max-h-74'
					srcImg={`bg-[url(/img/rest/kfc.png)]`}
					href='#'
					badgeColor='y'
					badgeText='Healthy'
				/>
				<RestCard
					w='w-99'
					h='max-h-74'
					srcImg={`bg-[url(/img/rest/bk.png)]`}
					href='#'
					badgeColor='r'
					badgeText='Trending'
				/>
				<RestCard
					w='w-99'
					h='max-h-74'
					srcImg={`bg-[url(/img/rest/kfc.png)]`}
					href='#'
					badgeColor='y'
					badgeText='Healthy'
				/>
			</div>
			<div className={viewAllOnBottom ? viewAllOnBottom : ""}>
				<ViewAll />
			</div>
		</section>
	);
}
