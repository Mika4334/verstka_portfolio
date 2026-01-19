export function CImage({ h, w, imgW, imgH, src, alt, shadow }) {
    return (
        <div className={`${w ? w : ''} ${h ? h : ''} flex justify-center items-center ${shadow ?? ''}`}>
            <img className={`${imgW ? imgW : ''} ${imgH ? imgH : ''} w-full max-w-fit h-fit max-h-full `} src={src} alt={alt} />
        </div>
    )
}