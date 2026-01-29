import { PrimaryButton, SecondaryButton } from '../ui-kit/BaseButton';

export function FoodResSort() {
    return (
        <div className='flex h-12.7 sm:h-13.2 h-18.75'>
            <SecondaryButton textValue='Food' />
            <PrimaryButton textValue='Restaraunts' />
        </div>
    )
}