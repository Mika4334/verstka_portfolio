export function CImage({ h, w, imgW, src, alt, shadow }) {
    return (
        <div className={`${w} ${h} flex justify-center items-center ${shadow ?? ''}`}>
            <img className={`w-full ${imgW} max-w-fit h-fit max-h-full`} src={src} alt={alt} />
        </div>
    )
}