import React from "react";
import { ReviewCard } from "../ui-kit/ReviewCard";

export function ReviewSlider({ slides }) {
	// let slides = React.Children.toArray(children)
	// let slides = Array.from(children)
	let revs = slides.map((element, index) => (
		<ReviewCard
			key={`revID${index}`}
			w='w-[314px]'
			revName={element.revName}
			years={element.years}
			comment={element.comment}
			stars={element.stars}
		/>
	));
	return (
		<div className='bg-green-500 flex justify-center items-center overflow-hidden pl-0 xl:pl-25.75 lg:pl-18.25'>
			<div className='reviewSlider carouselScroll'>{revs}</div>
		</div>
	);
}

// import { ReviewCard } from '../ui-kit/ReviewCard';

// export function ReviewSlider({ slides }) {
//     // let slides = React.Children.toArray(children)
//     // let slides = Array.from(children)
//     let revs = slides.map((element, index) => <ReviewCard id={`card${index}`} anchor={`#card${index}`} key={`revID${index}`} w='w-[314px]' revName={element.revName} years={element.years} comment={element.comment} stars={element.stars} />);
//     return (
//         <div className='bg-green-500 flex justify-center items-center overflow-hidden pl-40'>
//             <div className="reviewSlider carouselScroll">
//                 {revs}
//             </div>
//         </div>
//     )
// }
