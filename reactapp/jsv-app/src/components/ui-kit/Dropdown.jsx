import { CIcon } from '../ui-kit/CIcon';
import React from 'react';

export function Dropdown({ head, children }) {

    let listItems = React.Children.toArray(children)

    return (
        <div className="flex flex-col w-full text-sm gap-6">
            <button type="button" className="peer group w-full flex items-center gap-5 text-left pr-2 ">
                <span className='text-[14px]/[20px] font-bold'>{head}</span>
                <CIcon divH='h-full' position='rotate-180' src='/svg/arrowup.svg' alt='arrowup' />
            </button>

            <ul className="hidden peer-focus:flex flex-col gap-5 w-full mt-1">
                {listItems}
            </ul>
        </div>
    )
}