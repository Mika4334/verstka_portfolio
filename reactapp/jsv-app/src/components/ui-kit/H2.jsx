export function H2({ beforeText, spanText, afterText, textSize, Sbrk, brkS }) {
    return (
        <h2 className={`${textSize}`}>
            {beforeText}  <span className="text-pm">{brkS && <br />}{spanText}{Sbrk && <br />} </span> {afterText}
        </h2>
    )
}