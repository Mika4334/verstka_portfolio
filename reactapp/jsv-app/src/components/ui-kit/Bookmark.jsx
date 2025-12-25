import { CImage } from './CImage';

export function Bookmark({ h, w, src, alt, imgW }) {
    return (
        <div className={`rounded-full bg-pm/20 ${h} ${w}`}>
            <CImage w={w} h={h} imgW={imgW} src={src} alt={alt} />
        </div>
    )
}
