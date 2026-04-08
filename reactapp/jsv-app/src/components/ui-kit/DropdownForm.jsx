import { DropdownOption } from "./DropdownOption";

export function DropdownForm({ w, h }) {
	let drops = ["Select", "January", "February", "March"];
	let options = drops.map((element, index) => (
		<DropdownOption
			key={index}
			optionValue={element}
			optionText={element}
			customStyle='bg-hr'
		/>
	));
	return (
		<select
			name='123'
			id='months'
			className={`${w} ${h ? h : ""} pl-2.5 rounded-xl bg-hr/30 outline-0`}
		>
			{options}
		</select>
	);
}
