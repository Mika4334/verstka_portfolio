import { CImage } from '../ui-kit/CImage';

export function WeekendCard({ cardNumber }) {
    return (
        <div className='flex flex-row justify-between bg-pm px-[50px] rounded-xl'>
            <div className='md:w-[312px] lg:w-[439px] pt-[26px]'>
                <h3 className='font-bold text-slate-200'>GET 50% n{cardNumber}</h3>
                <h3 className='font-bold text-slate-200/50'>WEEKEND</h3>
            </div>
            <CImage h='h-[170px]' src='/img/dishes/fi1.png' alt='foodplate' />
        </div>
    )
}