import { CIcon } from '../ui-kit/CIcon';
import { useState } from 'react';

export function QuestionsAnswers({ question, answer }) {
    let [isPressed, setIfPressed] = useState(true)

    return (
        <div>
            <button className='flex justify-between w-full cursor-pointer' href='#' onClick={() => {
                // ПРИДУМАТЬ АНИМАЦИЮ ДЛЯ ПЕРЕКЛЮЧЕНИЯ
                setIfPressed(isPressed = !isPressed)
            }}>
                <h5>
                    {question}
                </h5>
                <CIcon w='w-5' h='h-5' src={isPressed ? '/svg/plus.svg' : '/svg/stick.svg'} alt='stick' />
            </button>
            <p className={isPressed ? 'hidden' : ''}>{answer}</p>
        </div>
    )
}