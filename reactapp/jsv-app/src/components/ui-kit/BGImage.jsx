export function BGImage({ width, height, src, alt, cover, center }) {
    return (
        <div className={`${width} ${height} ${src} ${cover ? 'bg-cover' : 'bg-contain'} ${center ?? 'bg-center'} bg-no-repeat flex justify-center items-center`}>
            <img className="-z-1" alt={alt} />
        </div>
    )
}