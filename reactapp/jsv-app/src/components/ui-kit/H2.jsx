export function H2({ beforeText, spanText, afterText, textSize }) {
    return (
        <h2 className={`${textSize}`}>
            {beforeText} <span className="text-pm">{spanText}</span> {afterText}
        </h2>
    )
}