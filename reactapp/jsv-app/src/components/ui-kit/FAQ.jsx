import { CIcon } from '../ui-kit/CIcon';
import { H2 } from '../ui-kit/H2';
import React from 'react';

export function FAQ({ children }) {
    let questionsAnswers = React.Children.toArray(children)
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-max-full w-full flex'>
                <H2 spanText='Frequently Asked' Sbrk afterText='Questions' />
                <CIcon divW='w-10' h='h-10' position='-mt-5 sm:-ml-0 -rotate-30' src='/svg/il1.svg' alt='il1' />
            </div>
            <div className='flex flex-col gap-3'>
                {questionsAnswers}
            </div>
        </div>
    )
}