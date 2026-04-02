import { H2 } from "../ui-kit/H2";
import { RestCard } from "../views/RestCard";
import { ViewAll } from "../ui-kit/ViewAll";

export function OurTopRest() {
	return (
		<section className='flex flex-col gap-12.5'>
			<H2 beforeText='Our Top' spanText='Restarunt' />
			<div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-y-10'>
				<RestCard
					w='w-[396px]'
					h='h-[298px]'
					srcImg={`bg-[url(/img/rest/kfc.png)]`}
					href='#'
					badgeColor='y'
					badgeText='Healthy'
				/>
				<RestCard
					w='w-[396px]'
					h='h-[298px]'
					srcImg={`bg-[url(/img/rest/bk.png)]`}
					href='#'
					badgeColor='r'
					badgeText='Trending'
				/>
				<RestCard
					w='w-[396px]'
					h='h-[298px]'
					srcImg={`bg-[url(/img/rest/kfc.png)]`}
					href='#'
					badgeColor='y'
					badgeText='Healthy'
				/>
			</div>
			<ViewAll />
		</section>
	);
}
