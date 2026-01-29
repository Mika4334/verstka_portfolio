import { CImage } from '../ui-kit/CImage';

export function FeatureItem({ text, allow }) {
    return (
        <>
            <li className="flex items-center gap-4">
                <CImage h='h-[18px]' src={allow ? '/svg/tick.svg' : '/svg/cross.svg'} alt='tick' />
                <p className='text-[18px] text-sc'>{text}</p>
            </li>
        </>
    )
}