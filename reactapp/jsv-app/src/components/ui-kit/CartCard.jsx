import { CImage } from "../ui-kit/CImage";

export function CartCard({
	imgW,
	imgH,
	srcImg,
	alt,
	price,
	quantity,
	onIncrement,
	onDecrement,
}) {
	let subTotal = price * quantity;

	return (
		<div className='flex items-center justify-between w-full px-4 bg-white rounded-2xl h-min-300 shadow-[0_7px_35px_rgba(0,0,0,0.25)]'>
			<div className='flex items-center gap-5 py-1'>
				<CImage
					h='h-[100px]'
					src={srcImg}
					alt={alt}
					imgW={imgW}
					imgH={imgH}
					shadow='drop-shadow-[-1px_5px_5px_rgba(0,0,0,0.25)]'
				/>
				<div>
					<h5>Chicken Hell</h5>
					<h5 className='text-[7px]'>${price}</h5>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center'>
				<div className='flex justify-between items-center gap-3'>
					<button
						className='cursor-pointer'
						onClick={onDecrement}
						type='button'
						disabled={quantity === 0} // Опционально: деактивировать кнопку при 0
					>
						<CImage src='/svg/subt.svg' alt='subt' w='w-8' />
					</button>
					<div>{quantity}</div>
					<button
						className='cursor-pointer'
						onClick={onIncrement}
						type='button'
					>
						<CImage src='/svg/add.svg' alt='add' w='w-8' />
					</button>
				</div>
				<h5>${subTotal.toFixed(2)}</h5>
			</div>
		</div>
	);
}
