import { CImage } from '../ui-kit/CImage';

export function DiscountCard({ w }) {
    return (
        <>
            <div className='sm:hidden'>
                <div className='flex flex-col px-[27px] pt-[36px] bg-pm h-[257px] items-center rounded-xl'>
                    <h3 className='font-bold text-slate-200'>GET 50%</h3>
                    <div className='flex py-[6px] mt-[16px] h-[48px] w-full rounded-lg bg-slate-200 justify-around items-center content-center'>
                        <input placeholder='Email Adress' type="text" className='pl-1 h-4 enabled:bg-slate-200 caret-transparent focus:outline-0' />
                        <a href='#' className='bg-pm px-[15px] py-[10px] rounded-lg text-slate-200 text-[10px]'>SUBSCRIBE</a>
                    </div>
                </div>
                <div className='relative bottom-17'>
                    <CImage w='w-90' h='h-[170px]' src='/img/dishes/fi1.png' alt='foodplate' />
                </div>
            </div>
            <div className='hidden sm:flex h-[199px] h-max-[280px]'>
                <div className='flex flex-row bg-pm justify-between px-[50px] rounded-xl w-[863px] w-max-[1214px]'>
                    <div className='md:w-[312px] lg:w-[439px] pt-[26px]'>
                        <h3 className='font-bold text-slate-200'>GET 50%</h3>
                        <div className='flex py-[6px] mt-[16px] h-[48px] w-full rounded-lg bg-slate-200 justify-around items-center content-center'>
                            <input placeholder='Email Adress' type="text" className='pl-1 h-4 enabled:bg-slate-200 caret-transparent focus:outline-0' />
                            <a href='#' className='bg-pm px-[15px] py-[10px] rounded-lg text-slate-200 text-[10px]'>SUBSCRIBE</a>
                        </div>
                    </div>
                    <div className='max-w-[196px] w-[196px] relative -bottom-[45px] lg:-bottom-[64px]'>
                        <CImage w='w-full' h='h-[170px]' src='/img/dishes/fi1.png' alt='foodplate' />
                    </div>
                </div>
            </div>
        </>
    )
}