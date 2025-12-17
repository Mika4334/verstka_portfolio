export function LineText({ stripeColor, textColor }) {
    return (
        <div className='flex items-center gap-3 w-[231px]'>
            <div className={`w-[54px] h-0.5 ${stripeColor}`}></div>
            <p className={textColor} >OVER 1000 USERS</p>
        </div>
    )
}