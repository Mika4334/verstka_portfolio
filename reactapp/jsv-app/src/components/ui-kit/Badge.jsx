
export function Badge({ textValue, badgeColor }) {
    let setColor = ''
    if (badgeColor === 'r') {
        setColor = 'text-red bg-red/20'
    }
    else if (badgeColor === 'g') {
        setColor = 'text-grn bg-grn/20'
    }
    else if (badgeColor === 'y') {
        setColor = 'text-ylw bg-ylw/20'
    }

    return (
        <div className={`w-fit py-0.5 px-1.5 rounded-lg ${setColor}`}>
            {textValue}
        </div>
    )
}