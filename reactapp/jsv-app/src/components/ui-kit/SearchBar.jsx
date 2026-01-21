import { CImage } from '../ui-kit/CImage';
export function SearchBar() {
    return (
        <div>
            <CImage h='h-[27px]' src='/svg/quotes.svg' alt='quotes' />
            <input type="text" placeholder="search" />
        </div>
    )
}