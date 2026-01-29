import { CImage } from '../ui-kit/CImage';
import { PrimaryButton } from '../ui-kit/BaseButton';
import { useState, useCallback } from 'react'

export function FoodCategorySort({ h }) {
    let [price, setPrice] = useState(0);

    let handlePriceChange = useCallback((e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 4) {
            return;
        }
        let value = Math.max(0, Math.min(1000, Number(inputValue)));
        setPrice(value);
    }, []);

    return (
        <div className={`flex flex-col bg-white rounded-2xl justify-around px-6.75 w-max-full ${h ? h : ''}`}>
            <h5>Category</h5>
            <div className='flex justify-between'>
                <a href="#" className='CategoryCard bg-yellow-200 text-yellow-600'>
                    <CImage w='w-9' h='h-9' src='/img/category/pizza.png' alt='pizza' />
                    <p>Pizza</p>
                </a>
                <a href="#" className='CategoryCard bg-red-200 text-red-600'>
                    <CImage shadow w='w-9' h='h-9' src='/img/category/hotdog.png' alt='hotdog' />
                    <p>Asian</p>
                </a>
                <a href="#" className='CategoryCard bg-orange-200 text-orange-600'>
                    <CImage w='w-9' h='h-9' src='/img/category/donut.png' alt='donut' />
                    <p>Donat</p>
                </a>
                <a href="#" className='CategoryCard bg-blue-200 text-blue-600'>
                    <CImage w='w-9' h='h-9' src='/img/category/ice.png' alt='ice' />
                    <p>Ice</p>
                </a>
            </div>

            <h5>Sort By</h5>
            <div className='font-medium text-[12px]/[24px]'>
                <div className='flex justify-between'>
                    <p className='text-hr'>Recomended</p>
                    <p className='text-pm'>Fast Delivery</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-hr'>Most Popular</p>
                    <p className='text-pm'>-</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <h5>Price</h5>
                <div className='flex items-center'>
                    <p className='text-pm'>$</p>
                    <input onChange={handlePriceChange} value={price} type="number" min="0" max="1000" maxLength="4" size="4" placeholder="0" className=' bg-slate-200/50 h-5.5 pl-3 placeholder:text-pm focus:outline-2 focus:outline-pm focus:border-pm focus:border' />
                </div>
            </div>
            <input type="text" maxLength="4" size="4"></input>
            <div className='flex flex-col gap-3'>
                <input onChange={handlePriceChange} value={price} type="range" list="markers" name="" id="" min="0" max="1000" maxLength="4" size="4" step="25" className='RangeSlider' />
                <datalist id="markers" className='flex justify-between text-hr'>
                    <option value="0">$0</option>
                    <option value="250">$250</option>
                    <option value="500">$500</option>
                    <option value="750">$750</option>
                    <option value="1000">$1000</option>
                </datalist>
            </div>
            <PrimaryButton textValue='Apply' height='h-[50px]' />
        </div>

    )
}