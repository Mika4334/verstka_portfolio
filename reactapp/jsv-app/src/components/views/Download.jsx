import { CImage } from "../ui-kit/CImage";
import { H2 } from "../ui-kit/H2";
import { PrimaryButton } from "../ui-kit/BaseButton";
import { CIcon } from "../ui-kit/CIcon";

export function Download() {
	return (
		<section className='flex flex-col-reverse md:flex-row justify-around items-center gap-10'>
			<div className='w-full'>
				<CImage h='h-full' src='/img/MobileScreen.png' alt='MobileScreen' />
			</div>
			<div className='flex flex-col gap-10'>
				<H2
					beforeText='Premium'
					spanText='Quality'
					afterText='for your health'
					textSize='text-[100px]'
				/>
				<ul className='w-full list-disc list-inside text-sc'>
					<li>
						Premium quality food is made with ingredients that are packed with
						essential vitamins, minerals.
					</li>
					<li>
						These foods promote overall wellness by support healthy digestion
						and boosting immunity
					</li>
				</ul>
				<div className='md:hidden flex'>
					<CIcon
						relative
						w='w-50'
						h='h-20'
						divW='w-1/2'
						divH='h-50'
						position='-left-15 top-20 -rotate-70 -scale-100'
						src='/svg/CurlArrow.svg'
						alt='CurlArrow'
					/>
					<PrimaryButton
						width='w-full mr-20'
						height='h-[63px] '
						textValue='Download'
						icon
					/>
				</div>
				<PrimaryButton
					width='w-[186px]'
					height='h-[63px]'
					textValue='Download'
					icon
				/>
				<CIcon
					relative
					w='w-50'
					h='h-20'
					position='-top-15 left-45 -rotate-180 -scale-100'
					src='/svg/CurlArrow.svg'
					alt='CurlArrow'
					customStyle='hidden md:flex'
				/>
			</div>
		</section>
	);
}
