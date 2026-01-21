import { CIcon } from '../ui-kit/CIcon';

export function WeekendCard({ cardNumber }) {
    return (
        <div className='flex mb-7.5 sm:mb-10 xl:mb-20'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col pl-6 justify-center bg-pm rounded-xl 
                w-76.5 h-25.25 sm:w-134.75 sm:h-48 xl:w-189.5 xl:h-62.75'>
                    <h4 className='font-bold text-slate-200'>GET 50% n{cardNumber}</h4>
                    <h4 className='p4'>WEEKEND</h4>
                </div>
            </div>
            <CIcon relative w='w-fit' h='h-[100px] sm:h-[180px] xl:h-[255px]' position='top-[30px] -left-[105px] sm:-left-[200px] sm:top-[40px] xl:-left-[300px] xl:top-[70px]' src='/img/dishes/fi1.png' alt='foodplate' />
        </div>
    )
}