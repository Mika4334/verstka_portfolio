import { CIcon } from "./CIcon";
import React, { useState, useRef, useEffect } from "react";

// Продумать как уменьшить количество показываемых элементов
// в зависимости от ширины экрана ( md )

export function ArticleSlider({
	children,
	forceCol,
	visibleCardsQty = 6,
	showButton,
}) {
	let [cStep, setStep] = useState(0);
	const childrensQnty = React.Children.count(children);
	let totalSteps = childrensQnty;
	const divRef = useRef(null);

	if (visibleCardsQty > 6) visibleCardsQty = 6; // Корректно ли?

	useEffect(() => {
		if (divRef.current) {
			divRef.current.classList.remove("animate-fancy");
			divRef.current.offsetWidth;
			divRef.current.classList.add("animate-fancy");
		}
	}, [cStep]);

	const nextSlide = () => {
		if (cStep < totalSteps - visibleCardsQty) {
			setStep((prev) => prev + visibleCardsQty);
		}
	};

	const prevSlide = () => {
		if (cStep > 0) {
			setStep((prev) => prev - visibleCardsQty);
		}
	};

	return (
		<>
			<div className='max-w-full flex overflow-x-hidden py-2 pr-4 pb-4 sm:pr-10 sm:pb-10'>
				<div
					ref={divRef}
					className={
						forceCol
							? "grid grid-flow-row! gap-10"
							: "grid gap-11 grid-rows-2 grid-flow-row md:grid-flow-col animate-fancy"
					}
				>
					{children.slice(cStep, cStep + visibleCardsQty)}
				</div>
			</div>
			<div
				className={`${forceCol ? (showButton ? "flex items-center gap-10 justify-center" : "hidden") : "flex gap-10 p-10"} `}
			>
				<button
					onClick={prevSlide}
					disabled={cStep === 0}
					className='cursor-pointer'
				>
					<CIcon
						src={
							cStep > 0
								? "/svg/arrow_forward.svg"
								: "/svg/arrow_forward_disabled.svg"
						}
						divH='h-fit'
						divW='w-full'
						position='rotate-180'
					/>
				</button>
				<button
					onClick={nextSlide}
					disabled={cStep + visibleCardsQty >= totalSteps}
					className='cursor-pointer'
				>
					<CIcon
						src={
							cStep + visibleCardsQty >= totalSteps
								? "/svg/arrow_forward_disabled.svg"
								: "/svg/arrow_forward.svg"
						}
						divH='h-fit'
						divW='w-full'
						position=''
					/>
				</button>
			</div>
		</>
	);
}
