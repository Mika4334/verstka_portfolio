export function BurgerMenu() {
    return (
        <>
            <button popovertarget="burgerPopover" className="burgerMenu w-8 h-5.75">
                <svg
                    width={34}
                    height={25}
                    viewBox="0 0 34 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path d="M1 1H32.5H1Z" fill="#918F8F" />
                    <path
                        d="M1 1H32.5"
                        stroke="#282828"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                    <path d="M1 12.1628H32.5H1Z" fill="#918F8F" />
                    <path
                        d="M1 12.1628H32.5"
                        stroke="#282828"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                    <path d="M1 23.3257H32.5H1Z" fill="#918F8F" />
                    <path
                        d="M1 23.3257H32.5"
                        stroke="#282828"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <div popover="auto" id="burgerPopover" className="burgerPopover">
                <a href="">Menu</a>
                <a href="">Blog</a>
                <a href="">Pricing</a>
                <a href="">Contact</a>
            </div>
        </>
    )
}