import { CImage } from '../ui-kit/CImage';

export function StatusCard({ w, h, imgW, imgH, srcImg, alt, statusText, statusTextColor, timeDate }) {
    console.log(w, h);
    return (
        <div className={`${w} ${h} flex items-center justify-between bg-white rounded-2xl overflow-hidden max-w-full h-min-300 shadow-[0_40px_35px_rgba(0,0,0,0.25)]`}>
            <div className='flex h-full items-center gap-[20px] pl-[11px]'>
                <CImage h='h-[50px]' src={srcImg} alt={alt} imgW={imgW} imgH={imgH} shadow='drop-shadow-[-1px_5px_5px_rgba(0,0,0,0.25)]' />
                <div className='h-8'>
                    <h5>Chicken Hell</h5>
                    <p className={`text-[7px] ${statusTextColor}`}>{statusText}</p>
                </div>
            </div>
            <p className='self-end pr-[7px] pb-1.5 text-[8px] text-hr/90'>
                {timeDate}
            </p>
        </div>
    )
}