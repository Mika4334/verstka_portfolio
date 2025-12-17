function Icon() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.64453 13.5469H21.4487" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5459 5.64453L21.448 13.5466L13.5459 21.4487" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export function PrimaryButton({ textValue, width, height, fontFamily, icon }) {
    let buttonClass =
        `flex justify-around items-center text-white bg-pm rounded-2xl hover:bg-pmhover
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue} {icon && <Icon />}
        </button >
    )
}

export function SecondaryButton({ textValue, width, height, fontFamily }) {
    let buttonClass =
        `text-pm bg-transparent rounded-2xl border-[2px] hover:bg-pm hover:text-white
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue}
        </button >
    )
}

export function LoginButton({ textValue, width, height, fontFamily }) {
    let buttonClass =
        `text-pm bg-transparent rounded-2xl hover:bg-pm hover:text-white
        ${width ?? 'w-full'} ${height ?? 'h-full'} ${fontFamily ?? ''}
        `;
    return (
        <button className={buttonClass} type="button">
            {textValue}
        </button >
    )
}