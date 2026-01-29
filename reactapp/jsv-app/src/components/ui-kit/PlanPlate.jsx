import { FeatureItem } from './ui-kit/FeatureItem';

export function PlanPlate({ }) {
    return (
        <div>
            <div>
                <div>
                    <h></h>
                    <p></p>
                </div>
                <div>
                    <h></h>
                    <p></p>
                </div>
                <div>
                    <h></h>
                    <p></p>
                </div>
            </div>
            <hr />
            <div>
                <div></div>
                <div className='flex items-center h-13'>
                    <p className='self-start pt-1'>$</p>
                    <h4>0</h4>
                    <p className='self-end text-sc'>/month</p>
                </div>
                <div className='flex items-center h-13'>
                    <p className='self-start pt-1'>$</p>
                    <h4>9</h4>
                    <p className='self-end text-sc'>/month</p>
                </div>
            </div>
            <hr />
            <div>
                <h5>Core features</h5>
                <FeatureItem />
                {/* Лист фичей без текста сделать */}
            </div>
            <hr />
            <div></div>
        </div>
    )
}