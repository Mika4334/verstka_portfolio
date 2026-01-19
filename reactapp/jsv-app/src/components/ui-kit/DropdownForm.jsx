export function DropdownForm({ w }) {
    return (
        <select name="123" id="month" className={`${w} pl-[10px] rounded-xl bg-hr/30 outline-0`}>
            <option className='bg-hr' value="Select">Select</option>
            <option className='bg-hr' value="January">January</option>
            <option className='bg-hr' value="February">February</option>
            <option className='bg-hr' value="March">March</option>
        </select>
    )
}