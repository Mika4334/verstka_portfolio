import { CIcon } from "./CIcon";
import { useState } from "react";
import { HR } from "../ui-kit/HR";

export function QuestionsAnswers({ question, answer }) {
	let [isPressed, setIfPressed] = useState(true);

	return (
		<>
			<button
				className='flex justify-between w-full cursor-pointer'
				href='#'
				onClick={() => {
					// ПРИДУМАТЬ АНИМАЦИЮ ДЛЯ ПЕРЕКЛЮЧЕНИЯ
					setIfPressed(!isPressed);
				}}
			>
				<h5>{question}</h5>
				<CIcon
					w='w-5'
					divW='w-5'
					h='h-5'
					src={isPressed ? "/svg/plus.svg" : "/svg/stick.svg"}
					alt='stick'
				/>
			</button>
			<p className={isPressed ? "hidden" : ""}>{answer}</p>
			<HR />
		</>
	);
}
