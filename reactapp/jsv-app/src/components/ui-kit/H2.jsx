export function H2({ beforeText, spanText, afterText, textSize, Sbrk, brkS }) {
	return (
		<h2 className={textSize}>
			{beforeText}
			{brkS && <br />}
			<span className='text-pm'>{spanText}</span>
			{Sbrk && <br />}
			{afterText}
		</h2>
	);
}
