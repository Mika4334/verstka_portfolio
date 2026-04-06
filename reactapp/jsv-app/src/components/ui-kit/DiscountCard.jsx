import { CImage } from "./CImage";

export function DiscountCard() {
	return (
		<>
			<div className='hidden sm:flex h-49.75 justify-center mb-20'>
				<div className='flex bg-pm justify-between px-12.5 rounded-xl w-215 w-max-[214px]'>
					<div className='md:w-78 lg:w-109.75 pt-6.5'>
						<h3 className='font-bold text-slate-200'>GET 50%</h3>
						<div className='flex py-1.5 mt-4 h-12 w-full rounded-lg bg-slate-200 justify-between items-center content-center'>
							<input
								placeholder='Email Adress'
								type='text'
								className='pl-1 h-4 mx-3 enabled:bg-slate-200 caret-transparent focus:outline-0'
							/>
							<a
								href='#'
								className='bg-pm px-3.75 mx-3 py-2.5 rounded-lg text-slate-200 text-[10px]'
							>
								SUBSCRIBE
							</a>
						</div>
					</div>
					<div className='max-w-49 w-49 relative -bottom-11.25 lg:-bottom-16'>
						<CImage
							w='w-full'
							h='h-[170px]'
							src='/img/dishes/fi1.png'
							alt='foodplate'
						/>
					</div>
				</div>
			</div>
			<div className='sm:hidden'>
				<div className='flex flex-col px-6.75 pt-9 bg-pm h-64.25 items-center rounded-xl'>
					<h3 className='font-bold text-slate-200 mb-7.5'>GET 50%</h3>
					<div className='flex py-1.5 mt-2 h-12 w-full rounded-lg bg-slate-200 justify-around items-center content-center'>
						<input
							placeholder='Email Adress'
							type='text'
							className='pl-1 h-4 mx-3 enabled:bg-slate-200 caret-transparent focus:outline-0'
						/>
						<a
							href='#'
							className='bg-pm px-3.75 py-2.5 rounded-lg text-slate-200 text-[10px]'
						>
							SUBSCRIBE
						</a>
					</div>
				</div>
				<div className='relative bottom-17 flex justify-center'>
					<CImage
						w='w-90'
						h='h-[170px]'
						src='/img/dishes/fi1.png'
						alt='foodplate'
					/>
				</div>
			</div>
		</>
	);
}
