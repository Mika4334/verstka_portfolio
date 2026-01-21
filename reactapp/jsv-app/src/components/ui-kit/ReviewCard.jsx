import { CImage } from '../ui-kit/CImage';
import { Stars } from '../ui-kit/Stars';

export function ReviewCard({ w, revName, years, comment, stars }) {
    return (
        <div className={`w-max-full ${w ?? ''} min-w-78.5 p-5.75 flex flex-col gap-5 rounded-3xl bg-white drop-shadow-[0px_10px_10px_rgba(0,0,0,0.20)]`}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <CImage imgH='h-30' src='/img/etc//profilepic_customer.png' alt='profilepic_customer' />
                    <div className='pl-3'>
                        <h5>{revName}</h5>
                        <p className='text-[9px]/[150%] font-[500px]'>{years} Year With Us </p>
                    </div>
                </div>
                <CImage h='h-[27px]' src='/svg/quotes.svg' alt='quotes' />
            </div>
            <div>
                <p className='text-justify italic text-[10px]/[145%] font-[400px] text-zinc-500'>
                    {comment}
                </p>
            </div>
            <Stars starsQty={stars} width='w-5' gap='gap-[3px]' />
        </div>
    )
}