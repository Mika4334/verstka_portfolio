import { CImage } from '../ui-kit/CImage';
import { useState } from 'react';

export function CartCard({ imgW, imgH, srcImg, alt, price }) {

    let [dishesqnty, setDishesqnty] = useState(1)

    function Increment() {
        setDishesqnty(dishesqnty + 1)

    }

    function Decrement() {
        if (dishesqnty > 0) {
            setDishesqnty(dishesqnty - 1)
        }
    }

    let subTotal = price * dishesqnty

    return (
        <div className='flex items-center justify-between w-full px-4 bg-white rounded-2xl h-min-300 shadow-[0_7px_35px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center gap-5 py-1'>
                <CImage h='h-[100px]' src={srcImg} alt={alt} imgW={imgW} imgH={imgH} shadow='drop-shadow-[-1px_5px_5px_rgba(0,0,0,0.25)]' />
                <div>
                    <h5>Chicken Hell</h5>
                    <h5 className='text-[7px]'>${price}</h5>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center gap-3'>
                    <button className='cursor-pointer' onClick={() => Decrement()}>
                        <CImage src='/svg/subt.svg' alt='subt' w='w-8' />
                    </button>
                    <div>{dishesqnty}</div>
                    <button className='cursor-pointer' onClick={() => Increment()}>
                        <CImage src='/svg/add.svg' alt='add' w='w-8' />
                    </button>
                </div>
                <h5>${subTotal}</h5>
            </div>
        </div>
    )
}