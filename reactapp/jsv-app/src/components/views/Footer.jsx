import { Logo } from '../ui-kit/Logo';
import { CImage } from '../ui-kit/CImage';

export function Footer() {
    return (
        <div className="w-full flex flex-col gap-[40px] px-[30px] bg-foot pt-[55px] pb-[36px]
        sm:px-[70px] md:px-[95px] sm:pt-[68px] sm:pb-[57px] md:pt-[96px] md:pb-[81px]">
            <div className='flex justify-between'>
                <Logo />
                <div className='flex items-center justify-between w-[115px] sm:hidden'>
                    <a href="#">
                        <CImage src='/svg/inst.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/lin.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/fb.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/tw.svg' alt='' h='h-[16px]' />
                    </a>
                </div>
                <div id="navMenu" className='navMenu sm:flex sm:flex-row flex-col gap-[30px] hidden'>
                    <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#" >Blog</a>
                    <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">Pricing</a>
                    <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">About Us</a>
                    <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">Contact</a>
                </div >
            </div>
            <div id="navMenu" className='navMenu flex sm:flex-row flex-col gap-[30px] sm:hidden'>
                <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#" >Blog</a>
                <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">Pricing</a>
                <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">About Us</a>
                <a className="hover:text-pm uppercase sm:capitalize text-sc" href="#">Contact</a>
            </div >
            <hr />
            <div className='flex self-center sm:self-auto justify-between'>
                <p className=' text-sc/70'>© 2023 EATLY All Rights Reserved.</p>
                <div className='sm:flex items-center justify-between w-[115px] hidden'>
                    <a href="#">
                        <CImage src='/svg/inst.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/lin.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/fb.svg' alt='' h='h-[16px]' />
                    </a>
                    <a href="#">
                        <CImage src='/svg/tw.svg' alt='' h='h-[16px]' />
                    </a>
                </div>
            </div>
        </div >
    )
}