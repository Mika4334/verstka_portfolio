import { FeatureItem } from '../ui-kit/FeatureItem';
import { PrimaryButton } from '../ui-kit/BaseButton';
import { FeatureList } from '../ui-kit/FeatureList';

export function PlanPlate({ allFeatures, plan0, plan1 }) {

    return (
        <div className='hidden sm:flex flex-col gap-7 p-10 bg-white rounded-xl shadow-[7px_7px_35px_rgba(0,0,0,0.25)]'>
            <div className='grid grid-cols-3 gap-20'>
                <div>
                    <h5>Pricing</h5>
                    <p>Affordable Basic<br />& Pro Plans</p>
                </div>
                <div>
                    <h5>Premium</h5>
                    <p>Amazing Premium<br />Features Plan</p>
                </div>
                <div>
                    <h5>Basic</h5>
                    <p>Completely 100%<br />Free Plan</p>
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-3 gap-20'>
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
            <h5>Core features</h5>
            <div className='grid grid-cols-3 gap-20'>
                <FeatureList>
                    {allFeatures}
                </FeatureList>
                <FeatureList>
                    {plan0}
                </FeatureList>
                <FeatureList>
                    {plan1}
                </FeatureList>
            </div>
            <hr />
            <div className='grid grid-cols-3 gap-20'>
                <div></div>
                <PrimaryButton uppercase textValue='star free' height='h-10.5' width='w-26' />
                <PrimaryButton uppercase textValue='star pro' height='h-10.5' width='w-26' />
            </div>
        </div>
    )
}