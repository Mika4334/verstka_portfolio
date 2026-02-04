export function BGImage({ width, height, src, alt, cover, center, otherStyle }) {
    let bgImageClass = `${width} ${height} ${src} ${cover ? 'bg-cover' : 'bg-contain'} ${center ?? 'bg-center'} ${otherStyle ? otherStyle : ''} bg-no-repeat flex justify-center items-center`
    return (
        <div className={bgImageClass}>
            <img className={`-z-1`} alt={alt} />
        </div>
    )
}