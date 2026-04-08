export function HR({ color = "bg-hr", customStyle = "h-0.5 border-0" }) {
	return (
		<hr className={`${color ? color : ""} ${customStyle ? customStyle : ""}`} />
	);
}
