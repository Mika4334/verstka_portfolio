export function PrimaryButton({
	textValue,
	width,
	height,
	fontFamily,
	icon,
	uppercase,
	type,
}) {
	let buttonClass = `flex justify-around items-center text-white bg-pm border-[2px] border-pm rounded-xl hover:bg-pmhover hover:border-white cursor-pointer
        ${width ?? "w-full"} ${height ?? "h-full"} ${fontFamily ?? ""} ${uppercase ? "uppercase" : ""}
        `;
	return (
		<button className={buttonClass} type={type ? type : "button"}>
			{textValue}
			<img
				src='/svg/arrow_right.svg'
				alt='arrow_right'
				className={icon ? "" : "hidden h-0 w-0"}
			/>
		</button>
	);
}

export function SecondaryButton({
	textValue,
	width,
	height,
	fontFamily,
	uppercase,
	type,
}) {
	let buttonClass = `text-pm bg-transparent rounded-xl border-[2px] hover:bg-pm hover:text-white cursor-pointer
        ${width ?? "w-full"} ${height ?? "h-full"} ${fontFamily ?? ""} ${uppercase ? "uppercase" : ""}
        `;
	return (
		<button className={buttonClass} type={type ? type : "button"}>
			{textValue}
		</button>
	);
}

export function LoginButton({
	textValue,
	width,
	height,
	fontFamily,
	uppercase,
	type,
}) {
	let buttonClass = `text-pm bg-transparent rounded-xl hover:bg-pm hover:text-white cursor-pointer
        ${width ?? "w-full"} ${height ?? "h-full"} ${fontFamily ?? ""} ${uppercase ? "uppercase" : ""}
        `;
	return (
		<button className={buttonClass} type={type ? type : "button"}>
			{textValue}
		</button>
	);
}
