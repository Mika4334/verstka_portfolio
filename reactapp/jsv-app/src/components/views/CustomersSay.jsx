import { H2 } from "../ui-kit/H2";
import { ReviewSlider } from "../ui-kit/ReviewSlider";

const slides = [
	{
		revName: "Aaaa",
		years: "01",
		comment:
			"some commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment:
			"some commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome commentsome comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
	{
		revName: "Aaaa",
		years: "01",
		comment: "some comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
	{
		revName: "Aaaa",
		years: "01",
		comment: "some comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
];

// export function CustomersSay() {
// 	return (
// 		<div className='flex flex-col gap-10'>
// 			<H2 spanText='Customer' afterText='Say' textSize='text-[100px]' />
// 			<section className='flex flex-col w-full'>
// 				<ReviewSlider slides={slides} />
// 			</section>
// 		</div>
// 	);
// }
export function CustomersSay() {
	return (
		<div className='relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw] pl-10 flex flex-col gap-10'>
			<H2
				spanText='Customer'
				afterText='Say'
				textSize='text-[38px]! sm:text-[100px]!'
			/>
			<ReviewSlider slides={slides} />
		</div>
	);
}
