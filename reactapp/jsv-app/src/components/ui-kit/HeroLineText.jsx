export function HeroLineText({ noStripe, stripeColor, textColor, hlText }) {
	return (
		<div className='flex items-center gap-3 w-57.75'>
			<div
				className={`${noStripe ? "hidden" : ""} w-13.5 h-0.5 ${stripeColor}`}
			></div>
			<p className={textColor}>{hlText}</p>
		</div>
	);
}
