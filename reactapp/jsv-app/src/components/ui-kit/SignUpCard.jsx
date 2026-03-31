import { CImage } from "./CImage";

export function SignUpCard({ imgSrc, heading, text }) {
	const regex = /[^/]+(?=\.js$)/;
	let altOfimgSrc = imgSrc.match(regex);
	return (
		<div className='flex flex-col justify-center items-center'>
			<CImage src={imgSrc} alt={altOfimgSrc} />
			<h4 className='text-3xl!'>{heading}</h4>
			<p>{text}</p>
		</div>
	);
}
