export function LineText({ stripeColor, textColor }) {
    return (
        <div className='flex items-center gap-3 w-57.75'>
            <div className={`w-13.5 h-0.5 ${stripeColor}`}></div>
            <p className={textColor} >OVER 1000 USERS</p>
        </div>
    )
}