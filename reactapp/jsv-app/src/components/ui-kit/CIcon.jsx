export function CIcon({
	w,
	h,
	divH,
	divW,
	relative = "",
	customStyle,
	position,
	src,
	alt,
	hide,
}) {
	return (
		<div
			className={`${divH ?? ""} ${divW ?? ""} h-0 w-0 ${relative && "relative"} ${customStyle ? customStyle : ""}`}
		>
			<img
				className={`max-w-fit ${w} ${h} ${relative && "absolute"} ${position ?? ""} ${hide && "hidden"}`}
				src={src}
				alt={alt}
			/>
		</div>
	);
}
