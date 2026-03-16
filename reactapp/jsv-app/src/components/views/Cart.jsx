import React from "react";
import { CartCard } from "../ui-kit/CartCard";
import { CImage } from "../ui-kit/CImage";
import { CIcon } from "../ui-kit/CIcon";
import { PrimaryButton } from "../ui-kit/BaseButton";

export function Cart({
	CustomerAdress = null,
	DeliveryTime = "15 min",
	order,
}) {
	let orders = order.map((element, index) => (
		<CartCard srcImg={order.imgSrc} price={order.price} imgW='' />
	));
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex justify-center items-center h-fit w-full'>
				<CImage src='/img/cart/map.png' />
			</div>

			<div className='bg-white w-118 h-80 rounded-3xl -mt-34'>
				<div className='flex flex-col gap-5'>
					<div className='flex gap-5 bg-black rounded-t-3xl p-5'>
						<CImage src='/img/cart/delivery_man.png' />
						<div className='flex flex-col justify-center items-start text-white'>
							<h5>David Smith</h5>
							<p>Food Rider</p>
						</div>
					</div>
					<div className='flex justify-between px-5'>
						<div className='flex gap-7'>
							<CImage src='/img/cart/location_time.png' />
							<div className='flex flex-col justify-between'>
								<div>
									<p>Your Address</p>
									<p>{CustomerAdress}</p>
								</div>
								<div>
									<p>Delivery Time</p>
									<p>{DeliveryTime}</p>
								</div>
							</div>
						</div>
						<div className='self-end w-32 h-10'>
							<PrimaryButton textValue='Pending' />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full'>
				<CIcon src='/svg/dishes/il2.png' />
				<div className='flex'>
					<CImage src='/svg/CartArrowLeft.svg' customStyle='self-end' />
					<form className='min-w-79 w-full flex flex-col gap-8 justify-center items-center'>
						{orders}
						<div className='flex flex-col gap-5'>
							<div className='relative group'>
								<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
									<div
										className="w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                            [mask:url('/svg/coupon.svg')_center/contain_no-repeat]
                                            [-webkit-mask:url('/svg/coupon.svg')_center/contain_no-repeat]"
									/>
								</div>
								<input
									className='SignUpInputs'
									placeholder='Apply Coupon'
									type='text'
									// pattern=".+@exemple\.com"
								/>
							</div>
						</div>
						<input type='text' />
						<PrimaryButton
							textValue='Review Payment'
							height='h-11.5 '
							width='w-full'
						/>
					</form>
					<CImage src='/svg/CartArrowRight.svg' customStyle='self-end' />
				</div>
			</div>
		</div>
	);
}
