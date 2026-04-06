import { H2 } from "../ui-kit/H2";
import { StatusCard } from "../ui-kit/StatusCard";
import { CIcon } from "../ui-kit/CIcon";
import { ExpensesCard } from "../ui-kit/ExpensesCard";

export function ControlPurchase() {
	return (
		<section className='flex flex-col gap-12.5'>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-2.5 max-w-2/3'>
					<H2
						beforeText='Control'
						spanText=' Purchases'
						afterText='Via Dashboard'
						textSize='text-[38px]! sm:text-[55px]! text-start!'
						Sbrk
					/>
					<StatusCard
						w='w-[227px]'
						h='h-15'
						srcImg='/img/dishes/fi1.png'
						alt='dish'
						statusText='On the way'
						statusTextColor='text-red-500'
						timeDate='3:00PM'
					/>
					<StatusCard
						w='w-[227px]'
						h='h-15'
						srcImg='/img/dishes/fi1.png'
						alt='dish'
						statusText='On the way'
						statusTextColor='text-red-500'
						timeDate='3:00PM'
					/>
					<StatusCard
						w='w-[227px]'
						h='h-15'
						srcImg='/img/dishes/fi1.png'
						alt='dish'
						statusText='On the way'
						statusTextColor='text-red-500'
						timeDate='3:00PM'
					/>
					<CIcon
						relative
						w='w-38'
						h='h-[111px]'
						divH='h-20'
						position='-top-10 left-50 rotate-90 -scale-100'
						src='/svg/CurlArrow.svg'
						alt='CurlArrow'
						customStyle='flex sm:hidden'
					/>
				</div>
				<ExpensesCard
					w='w-140 min-w-80'
					h='h-fit'
					customStyle='hidden md:flex'
				/>
			</div>
			<div className='flex md:hidden justify-center'>
				<ExpensesCard w='w-140 min-w-80' />
			</div>
		</section>
	);
}
