import { NavLink } from "react-router";
import { NavMenu } from "../ui-kit/NavMenu";
import { SocialLinks } from "../ui-kit/SocialLinks";
import { Logo } from "../ui-kit/Logo";

export function Footer() {
	return (
		<div
			className='w-full flex flex-col gap-10 bg-hr/50 
			py-13 sm:py-17 md:py-20.25 px-5 lg:px-17 xl:px-23.75
			mt-10'
		>
			<div className='flex justify-between'>
				<Logo withName />
				<div className='flex items-center justify-between w-28.75 sm:hidden'>
					<SocialLinks />
				</div>
				<div
					id='navMenu'
					className='sm:flex sm:flex-row flex-col gap-7.5 hidden'
				>
					<NavMenu footerVersion />
				</div>
			</div>
			<div id='navMenu' className='flex sm:flex-row flex-col gap-7.5 sm:hidden'>
				<NavMenu footerVersion />
			</div>
			<hr />
			<div className='flex self-center sm:self-auto justify-between'>
				<p className=' text-sc/70'>© 2023 EATLY All Rights Reserved.</p>
				<div className='sm:flex items-center justify-between w-28.75 hidden'>
					<SocialLinks />
				</div>
			</div>
		</div>
	);
}
