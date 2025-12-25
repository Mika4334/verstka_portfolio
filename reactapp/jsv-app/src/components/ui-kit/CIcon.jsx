export function CIcon({ w, h, relative = '', position, src, alt }) {
    return (
        <div className={`h-0 w-0 ${relative ?? 'relative'}`}>
            <img className={`max-w-fit ${w} ${h} ${relative ?? 'absolute'} ${position ?? ''} `} src={src} alt={alt} />
        </div>
    )
}

