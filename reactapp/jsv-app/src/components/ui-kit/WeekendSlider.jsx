import React, { useState } from 'react';

function SliderButton({ onButtonClick, isActive }) {
    return (
        <button onClick={onButtonClick} className={`bg-hr w-5.25 h-2 rounded-md ${isActive ? 'bg-pm w-10.75' : ''}`}></button>
    )
}


export function WeekendSlider({ children }) {

    let slides = React.Children.toArray(children)
    let [index, setIndex] = useState(0)
    let buttons = []

    for (let i = 0; i < slides.length; i++) {
        buttons.push(<SliderButton key={i} onButtonClick={() => setIndex(i)} isActive={i === index} />);
    }

    return (
        <>
            <div className={`flex overflow-x-hidden`}>
                {
                    slides[index]
                }
            </div >
            <div className='sm:flex justify-center gap-3 w-full hidden'>
                {
                    buttons
                }
            </div>
        </>
    )
}


// export function ReviewCarousel({ children, slideW }) {

//     let slides = React.Children.toArray(children)
//     let [index, setIndex] = useState(0)

//     function nextPrev(i) {
//         if (i > 0)
//             if (index > 0) setIndex(index - 1)
//         if (i < 0)
//             if (index < slides.length - 1) setIndex(index + 1)
//     }

//     return (
//         <>
//             <div className={`flex overflow - x - scroll`}>
//                 {
//                     slides[index]
//                 }
//             </div >
//             <div className='flex justify-around w-full bg-pm'>
//                 <button onClick={() => nextPrev(1)} id='backward' className='bg-red'>backward</button>

//                 <button onClick={() => nextPrev(-1)} id='forward' className='bg-red'>forward</button>
//             </div>
//         </>
//     )
// }