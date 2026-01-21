import React, { useRef, useState } from 'react';

export function ReviewCarousel({ children }) {
    let slides = React.Children.toArray(children)

    return (
        <div className={`flex w-78.5 pb-11.25 overflow-x-scroll carouselScroll`}>
            {slides}
        </div >
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
//             <div className={`flex overflow-x-scroll`}>
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



