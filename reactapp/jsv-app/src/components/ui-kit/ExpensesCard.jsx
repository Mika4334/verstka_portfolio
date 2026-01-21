import { CImage } from '../ui-kit/CImage';
import { CIcon } from '../ui-kit/CIcon';
import { BGImage } from '../ui-kit/BGImage';
import { DropdownForm } from '../ui-kit/DropdownForm';

export function ExpensesCard({ w, h }) {
    return (
        <div className={`${w} ${h} flex gap-3.25 p-5.75 flex-col rounded-3xl bg-white drop-shadow-[0_40px_35px_rgba(0,0,0,0.25)]`}>
            <div className='flex justify-between pb-2.5'>
                <h4>Purchases</h4>
                <DropdownForm w='w-[104px]' />
            </div>
            <div className=' border-[0.93px] border-hr/50 rounded-3xl p-3.75 flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <CImage imgH='h-30' src='/svg/expense0.svg' alt='expense' />
                        <div>
                            <h5>Expense</h5>
                            <p className='text-[9px]/[150%] font-[500px]'>Increased By 10%</p>
                        </div>
                    </div>
                    <h5>$409.00</h5>
                </div>
                <CImage src='/svg/divider_violet.svg' alt='expenseuse' />
            </div>
            <div className=' border-[0.93px] border-hr/50 rounded-3xl p-3.75 flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <CImage imgH='h-30' src='/svg/expense.svg' alt='expenseuse' />
                        <div>
                            <h5>Vocher Usage</h5>
                            <p className='text-[9px]/[150%] font-[500px]'>Increased By 5%</p>
                        </div>
                    </div>
                    <h5>$45.78</h5>
                </div>
                <CImage src='/svg/divider_yellow.svg' alt='vocheruse' />
            </div>
        </div>
    )
}