import { Logo } from "../ui-kit/Logo";
import { CImage } from "../ui-kit/CImage";

export function Footer() {
	return (
		<div
			className='w-full flex flex-col gap-10 bg-hr/50 
			pt-13 sm:pt-17 sm:pb-14.25pt-[96px] md:pb-20.25 px-5 lg:px-17 xl:px-23.75
			mt-28'
		>
			<div className='flex justify-between'>
				<Logo withName />
				<div className='flex items-center justify-between w-28.75 sm:hidden'>
					<a href='#'>
						<CImage src='/svg/inst.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/lin.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/fb.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/tw.svg' alt='' h='h-[16px]' />
					</a>
				</div>
				<div
					id='navMenu'
					className='sm:flex sm:flex-row flex-col gap-7.5 hidden'
				>
					<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
						Blog
					</a>
					<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
						Pricing
					</a>
					<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
						About Us
					</a>
					<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
						Contact
					</a>
				</div>
			</div>
			<div id='navMenu' className='flex sm:flex-row flex-col gap-7.5 sm:hidden'>
				<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
					Blog
				</a>
				<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
					Pricing
				</a>
				<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
					About Us
				</a>
				<a className='hover:text-pm uppercase sm:capitalize text-sc' href='#'>
					Contact
				</a>
			</div>
			<hr />
			<div className='flex self-center sm:self-auto justify-between'>
				<p className=' text-sc/70'>© 2023 EATLY All Rights Reserved.</p>
				<div className='sm:flex items-center justify-between w-28.75 hidden'>
					<a href='#'>
						<CImage src='/svg/inst.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/lin.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/fb.svg' alt='' h='h-[16px]' />
					</a>
					<a href='#'>
						<CImage src='/svg/tw.svg' alt='' h='h-[16px]' />
					</a>
				</div>
			</div>
		</div>
	);
}
