import { CIcon } from '../ui-kit/CIcon';
import React, { useState, useRef, useEffect } from 'react';


export function ArticleSlider({ children, forceCol }) {
    let [cStep, setStep] = useState(0);
    const childrensQnty = React.Children.count(children);
    let totalSteps = childrensQnty
    const divRef = useRef(null);

    // ПЕРЕДЕЛАТЬ В УНИВЕРСАЛЬНЫЙ !

    useEffect(() => {
        if (divRef.current) {
            divRef.current.classList.remove('animate-fancy');
            void divRef.current.offsetWidth;
            divRef.current.classList.add('animate-fancy');
        }
    }, [cStep]);


    const nextSlide = () => {
        if (cStep < totalSteps - 6) {
            setStep(prev => prev + 6);
        }
    };

    const prevSlide = () => {
        if (cStep > 0) {
            setStep(prev => prev - 6);
        }
    };

    return (
        <>
            <div className="max-w-full flex overflow-x-hidden">
                <div ref={divRef} className={forceCol ? 'grid-flow-col!' : 'grid gap-11 grid-rows-2 grid-flow-row md:grid-flow-col animate-fancy'}>
                    {children.slice(cStep, cStep + 6)}
                </div>
            </div>
            <div className={forceCol ? 'hidden' : 'sm:flex items-center gap-10 hidden'}>
                <button onClick={prevSlide} disabled={cStep === 0} className='cursor-pointer'>
                    <CIcon src={cStep > 0 ? '/svg/arrow_forward.svg' : '/svg/arrow_forward_disabled.svg'} divW='w-full' position='rotate-180' />
                </button>
                <button onClick={nextSlide} disabled={cStep + 6 >= totalSteps} className='cursor-pointer'>
                    <CIcon src={cStep + 6 >= totalSteps ? '/svg/arrow_forward_disabled.svg' : '/svg/arrow_forward.svg'} divW='w-full' position='' />
                </button>
            </div>
        </>
    )
}