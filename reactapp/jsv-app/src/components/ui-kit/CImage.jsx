export function CImage({ h, w, imgW, src, alt }) {
    return (
        <div className={`${w} ${h} flex justify-center items-center`}>
            <img className={`w-full ${imgW} max-w-fit h-fit max-h-full`} src={src} alt={alt} />
        </div>
    )
}