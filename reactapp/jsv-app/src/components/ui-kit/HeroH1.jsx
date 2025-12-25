export function HeroH1({ mobile }) {
    return (
        <>
            <h1>Enjoy Foods {!mobile && 'All'} Over {!mobile && 'The'} <span className="text-pm"> World </span></h1>
        </>
    )
}