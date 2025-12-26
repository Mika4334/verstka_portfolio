import { Badge } from './../ui-kit/Badge';
import { Stars } from './../ui-kit/Stars';
import { Bookmark } from './../ui-kit/Bookmark';
import { CImage } from '../ui-kit/CImage';
import { CIcon } from '../ui-kit/CIcon';

export function DishCard({ w, imgW, h, srcImg, alt, href = '#', badgeText, badgeColor }) {
    return (
        <div className={`${w} ${h} flex flex-col justify-between bg-white rounded-4xl overflow-hidden max-w-full h-min-300 shadow-[0_40px_35px_rgba(0,0,0,0.25)]`}>
            <div className='flex justify-between'>
                <div></div>
                <a href="#">
                    <CIcon divH='h-10' divW='w-full' relative w='w-50' h='h-8' position='right-[15px] top-[15px]' src=' /svg/heart.svg' alt='CurlArrow' />
                </a>
            </div>
            <CImage src={srcImg} alt={alt} imgW={imgW} shadow='drop-shadow-[-10px_20px_15px_rgba(0,0,0,0.25)]' />
            <div className='flex justify-between pl-6.75 pr-5.25 pb-3.25 pt-2 lg:pl-8.5 lg:pr-6.5 lg:pb-3'>
                <div className='flex flex-col'>
                    <Badge textValue={badgeText} badgeColor={badgeColor} />
                    <h4>The Chicken King</h4>
                    <div className='flex items-center gap-1.5'>
                        <p>24min •</p>
                        <Stars starsQty='1' width='w-5' overlayColor='var(--color-pm)' />
                        <p>4.8</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='dishPrice font-bold'>$12<span className='font-normal text-hr'>.99</span></p>
                        </div>
                        <a href={href} >
                            <CImage src='/svg/add.svg' alt='' w='w-[29px]' />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}