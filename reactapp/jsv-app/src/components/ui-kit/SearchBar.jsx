import { CImage } from '../ui-kit/CImage';
export function SearchBar() {
    return (
        <div className='flex bg-slate-200/50 items-center pl-3.5 py-[14x]'>
            <CImage h='h-[29px]' src='/svg/search.svg' alt='search' />
            <input type="text" placeholder="Search" className='w-full ml-3 h-13.5 pl-3 placeholder:text-gray-400 focus:outline-2 focus:outline-pm focus:border-pm focus:border' />
        </div>
    )
}