export function DropdownOption({ optionValue, optionText, customStyle }) {
	return (
		<option className={customStyle} value={optionValue}>
			{optionText}
		</option>
	);
}
