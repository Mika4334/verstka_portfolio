import { CImage } from "../ui-kit/CImage";

export function PricingHero() {
	return (
		<>
			<div className='hidden md:flex justify-center'>
				<CImage src='/img/our_pricing.png' />
			</div>
			<div className='flex md:hidden relative left-1/2 right-1/2 w-screen -ml-[40vw] mr-[50vw]'>
				<CImage src='/img/our_pricing_mobile.png' />
			</div>
		</>
	);
}
