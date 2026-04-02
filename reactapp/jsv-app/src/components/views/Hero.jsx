import { Logo } from "../ui-kit/Logo";
import { HeroLineText } from "../ui-kit/HeroLineText";
import { HeroH1 } from "../ui-kit/HeroH1";
import { HeroP } from "../ui-kit/HeroP";
import { Trustpilot } from "../ui-kit/Truspilot";
import { Stars } from "../ui-kit/Stars";
import { PrimaryButton, SecondaryButton } from "../ui-kit/BaseButton";
import { CImage } from "../ui-kit/CImage";

export function Hero() {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='flex flex-col gap-3'>
				<HeroLineText
					stripeColor='bg-hr'
					textColor='text-hr'
					hlText='OVER 1000 USERS'
				/>
				<HeroH1 />
				<HeroP
					pText='EatLy help you set saving goals, earn cash back offers, Go to disclaimer
				for more details and get paychecks up to two days early. Get a'
					pBonusText='$20 bonus.'
				/>
				<div className='flex justify-between min-h-12 h-15 gap-5 max-w-full'>
					<PrimaryButton textValue='Get Started' />
					<SecondaryButton textValue='Go Pro' />
				</div>
				<div className='flex gap-4 sm:gap-3.5 lg:gap-5 items-center'>
					<Trustpilot width='w-fit' />
					<div className='flex items-center justify-end gap-1'>
						<Stars starsQty={5} width='w-4' gap='gap-1' />
						<HeroLineText noStripe textColor='text-hr' hlText='4900+' />
					</div>
				</div>
			</div>
			<div className='flex justify-between items-center w-full max-w-312'>
				<CImage src='/img/Hero.png' />
			</div>
		</div>
	);
}
