import React, { useState } from "react";
import { CIcon } from "./CIcon";

function SliderButton({ onButtonClick, isActive, white }) {
	return (
		<button
			onClick={onButtonClick}
			className={`${white && isActive ? "bg-white" : ""} bg-hr w-5.25 h-2 rounded-md ${isActive ? "bg-pm w-10.75" : ""}`}
		></button>
	);
}

export function WeekendSlider({
	children,
	// iconHide = false,
	whiteTheme = false,
}) {
	let slides = React.Children.toArray(children);
	let [index, setIndex] = useState(0);
	let buttons = [];

	for (let i = 0; i < slides.length; i++) {
		buttons.push(
			<SliderButton
				key={i}
				onButtonClick={() => setIndex(i)}
				isActive={i === index}
				white={whiteTheme}
			/>,
		);
	}

	return (
		<>
			{/* <CIcon
				hide={iconHide}
				relative
				w='w-14'
				divW='w-10'
				h='h-10'
				position='-top-5 left-[34vh] sm:-top-5 sm:left-[59vh] xl:-top-5 xl:left-[82vh]'
				src='/svg/il1.svg'
				alt='il1'
			/> */}
			<div
				className={`${whiteTheme ? "text-white!" : ""} flex overflow-x-hidden`}
			>
				{slides[index]}
			</div>

			<div className='sm:flex justify-center gap-3 w-full hidden'>
				{buttons}
			</div>
		</>
	);
}

// export function ReviewCarousel({ children, slideW }) {

//     let slides = React.Children.toArray(children)
//     let [index, setIndex] = useState(0)

//     function nextPrev(i) {
//         if (i > 0)
//             if (index > 0) setIndex(index - 1)
//         if (i < 0)
//             if (index < slides.length - 1) setIndex(index + 1)
//     }

//     return (
//         <>
//             <div className={`flex overflow - x - scroll`}>
//                 {
//                     slides[index]
//                 }
//             </div >
//             <div className='flex justify-around w-full bg-pm'>
//                 <button onClick={() => nextPrev(1)} id='backward' className='bg-red'>backward</button>

//                 <button onClick={() => nextPrev(-1)} id='forward' className='bg-red'>forward</button>
//             </div>
//         </>
//     )
// }
