import { PrimaryButton } from '../ui-kit/BaseButton';
import { Dropdown } from '../ui-kit/Dropdown';

export function PlanCard({ planName, price, featureItems }) {
    return (
        <div className='w-max-full w-78 px-6 py-8 bg-white rounded-lg flex flex-col justify-around gap-5'>
            <h4 className='capitalize'>{planName.toLowerCase()}</h4>
            <div className='flex items-center h-13'>
                <p className='self-start pt-1'>$</p>
                <h4>{price}</h4>
                <p className='self-end text-sc'>/month</p>
            </div>
            <PrimaryButton uppercase textValue='start pro' height='h-10.5' width='w-26' />
            <hr className='border-0.5 text-hr' />
            <p className='text-sc text-[12px]/[17px]'>Completely 100% <br /> Free Plan</p>
            <Dropdown head='See features'>
                {featureItems}
            </Dropdown >
        </div>
    )
}