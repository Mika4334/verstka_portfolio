import { WeekendSlider } from "../ui-kit/WeekendSlider";
import { WeekendCard } from "../ui-kit/WeekendCard";
import { SearchBar } from "../ui-kit/SearchBar";
import { CImage } from "../ui-kit/CImage";
import { CIcon } from "../ui-kit/CIcon";
import { FoodCategorySort } from "../ui-kit/FoodCategorySort";
import { PrimaryButton, SecondaryButton } from "../ui-kit/BaseButton";

export function FilterControl() {
	return (
		<section className='flex flex-col gap-10 lg:flex-row lg:justify-between items-center'>
			<div className='flex'>
				<div className='flex flex-col gap-10 h-full'>
					<div className='h-full'>
						<WeekendSlider>
							<WeekendCard cardNumber={1} />
							<WeekendCard cardNumber={2} />
							<WeekendCard cardNumber={3} />
						</WeekendSlider>
					</div>
					<SearchBar />
					<div className='flex h-18'>
						<SecondaryButton textValue='Food' />
						<PrimaryButton textValue='Restaurants' />
					</div>
				</div>
				<CImage
					src='/svg/il0.svg'
					imgW=''
					w='w-10'
					customStyle='self-start -mt-10 hidden md:flex'
				/>
				<CIcon src='/svg/il0.svg' w='w-9' customStyle='-mt-7 block md:hidden' />
			</div>
			<FoodCategorySort h='h-147' />
		</section>
	);
}
