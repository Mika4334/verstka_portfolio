export function PrimaryButton({ textValue, width, height, fontFamily, icon, uppercase }) {
    let buttonClass =
        `flex justify-around items-center text-white bg-pm border-[2px] border-pm rounded-2xl hover:bg-pmhover hover:border-white
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''} ${uppercase ? 'uppercase' : ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue}
            <img src="/svg/arrow_right.svg" alt="arrow_right" className={icon ? '' : 'hidden h-0 w-0'} />
        </button >
    )
}

export function SecondaryButton({ textValue, width, height, fontFamily, uppercase }) {
    let buttonClass =
        `text-pm bg-transparent rounded-2xl border-[2px] hover:bg-pm hover:text-white
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''} ${uppercase ? 'uppercase' : ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue}
        </button >
    )
}

export function LoginButton({ textValue, width, height, fontFamily, uppercase }) {
    let buttonClass =
        `text-pm bg-transparent rounded-2xl hover:bg-pm hover:text-white
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''} ${uppercase ? 'uppercase' : ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue}
        </button >
    )
}