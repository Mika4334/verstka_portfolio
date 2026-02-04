import React from 'react';

export function FeatureList({ children }) {
    let featureList = React.Children.toArray(children)
    // let rowsQty = `grid-rows-${children.length.toString()}`
    return (
        <ul className='flex flex-col justify-around'>
            {featureList}
        </ul>
    )
}