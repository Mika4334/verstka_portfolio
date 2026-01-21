import { CImage } from '../ui-kit/CImage';

export function DiscountCard() {
    return (
        <>
            <div className='sm:hidden'>
                <div className='flex flex-col px-6.75 pt-9 bg-pm h-64.25 items-center rounded-xl'>
                    <h3 className='font-bold text-slate-200'>GET 50%</h3>
                    <div className='flex py-1.5 mt-4 h-12 w-full rounded-lg bg-slate-200 justify-around items-center content-center'>
                        <input placeholder='Email Adress' type="text" className='pl-1 h-4 enabled:bg-slate-200 caret-transparent focus:outline-0' />
                        <a href='#' className='bg-pm px-3.75 py-2.5 rounded-lg text-slate-200 text-[10px]'>SUBSCRIBE</a>
                    </div>
                </div>
                <div className='relative bottom-17'>
                    <CImage w='w-90' h='h-[170px]' src='/img/dishes/fi1.png' alt='foodplate' />
                </div>
            </div>
            <div className='hidden sm:flex h-49.75 h-max-[280px]'>
                <div className='flex flex-row bg-pm justify-between px-12.5 rounded-xl w-215.75 w-max-[1214px]'>
                    <div className='md:w-78 lg:w-109.75 pt-6.5'>
                        <h3 className='font-bold text-slate-200'>GET 50%</h3>
                        <div className='flex py-1.5 mt-4 h-12 w-full rounded-lg bg-slate-200 justify-around items-center content-center'>
                            <input placeholder='Email Adress' type="text" className='pl-1 h-4 enabled:bg-slate-200 caret-transparent focus:outline-0' />
                            <a href='#' className='bg-pm px-3.75 py-2.5 rounded-lg text-slate-200 text-[10px]'>SUBSCRIBE</a>
                        </div>
                    </div>
                    <div className='max-w-49 w-49 relative -bottom-11.25 lg:-bottom-16'>
                        <CImage w='w-full' h='h-[170px]' src='/img/dishes/fi1.png' alt='foodplate' />
                    </div>
                </div>
            </div>
        </>
    )
}