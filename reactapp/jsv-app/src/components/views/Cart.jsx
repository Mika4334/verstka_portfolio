// import { CartCard } from "../ui-kit/CartCard";
// import { CImage } from "../ui-kit/CImage";
// import { PrimaryButton } from "../ui-kit/BaseButton";
// import { useState } from "react";

// export function Cart({
// 	customerAdress = null,
// 	deliveryTime = "15 min",
// 	delivery = 10,
// 	order,
// 	coupons,
// }) {
// 	const [quantities, setQuantities] = useState(() => {
// 		const initialQuantities = {};
// 		order.forEach((_, index) => {
// 			initialQuantities[index] = 1;
// 		});
// 		return initialQuantities;
// 	});

// 	const handleIncrement = (index) => {
// 		setQuantities((prev) => ({
// 			...prev,
// 			[index]: (prev[index] || 0) + 1,
// 		}));
// 	};

// 	const handleDecrement = (index) => {
// 		setQuantities((prev) => ({
// 			...prev,
// 			[index]: Math.max(0, (prev[index] || 0) - 1),
// 		}));
// 	};

// 	let [discount, setDiscount] = useState(0);

// 	// Вычисление subtotal напрямую во время рендера
// 	const subtotal = order.reduce((sum, element, index) => {
// 		return sum + element.price * (quantities[index] || 0);
// 	}, 0);

// 	// Вычисление total
// 	const total = subtotal - discount + delivery;

// 	const handleApplyCoupon = () => {
// 		setDiscount((subtotal * coupons[i]) / 100);
// 	};

// 	// Создание заказов с передачей пропсов
// 	let orders = order.map((element, index) => (
// 		<CartCard
// 			key={index}
// 			srcImg={element.imgSrc}
// 			price={element.price}
// 			quantity={quantities[index] || 0}
// 			onIncrement={() => handleIncrement(index)}
// 			onDecrement={() => handleDecrement(index)}
// 		/>
// 	));

// 	return (
// 		<div className='flex flex-col justify-center items-center'>
// 			<div className='flex justify-center items-center h-fit w-full'>
// 				<CImage src='/img/cart/map.png' />
// 			</div>

// 			<div className='bg-white w-118 h-80 rounded-3xl -mt-34'>
// 				<div className='flex flex-col gap-5'>
// 					<div className='flex gap-5 bg-black rounded-t-3xl p-5'>
// 						<CImage src='/img/cart/delivery_man.png' />
// 						<div className='flex flex-col justify-center items-start text-white'>
// 							<h5>David Smith</h5>
// 							<p>Food Rider</p>
// 						</div>
// 					</div>
// 					<div className='flex justify-between px-5'>
// 						<div className='flex gap-7'>
// 							<CImage src='/img/cart/location_time.png' />
// 							<div className='flex flex-col justify-between'>
// 								<div>
// 									<p>Your Address</p>
// 									<p>{customerAdress}</p>
// 								</div>
// 								<div>
// 									<p>Delivery Time</p>
// 									<p>{deliveryTime}</p>
// 								</div>
// 							</div>
// 						</div>
// 						<div className='self-end w-32 h-10'>
// 							<PrimaryButton textValue='Pending' />
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='flex flex-col w-full mt-24 md:mt-28 lg:mt-40'>
// 				<CImage src='/svg/il2.svg' divW='w-10' customStyle='pl-185' />
// 				<div className='flex w-full justify-center'>
// 					<CImage src='/svg/CartArrowLeft.svg' customStyle='self-end' />
// 					<form className='min-w-79 w-full max-w-173 flex flex-col gap-8 justify-center items-center'>
// 						{orders}
// 						<div className='flex flex-col gap-5 w-full'>
// 							<div className='relative group'>
// 								<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
// 									<div
// 										className="w-5 h-5 bg-gray-400 group-focus-within:bg-pm
//                                             [mask:url('/svg/coupon.svg')_center/contain_no-repeat]
//                                             [-webkit-mask:url('/svg/coupon.svg')_center/contain_no-repeat]"
// 									/>
// 								</div>
// 								<input
// 									onClick={handleApplyCoupon}
// 									className='SignUpInputs'
// 									placeholder='Apply Coupon'
// 									type='text'
// 								/>
// 							</div>
// 						</div>
// 						<div className='flex flex-col w-full gap-4.5'>
// 							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
// 								<p>Subtotal</p>
// 								<p>${subtotal.toFixed(2)}</p>
// 							</div>
// 							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
// 								<p>Delivery</p>
// 								<p>${delivery}</p>
// 							</div>
// 							<div className='flex justify-between items-center font-bold text-2xl'>
// 								<p>Total</p>
// 								<p>${total.toFixed(2)}</p>
// 							</div>
// 						</div>
// 						<PrimaryButton
// 							textValue='Review Payment'
// 							height='h-11.5 '
// 							width='w-full'
// 						/>
// 					</form>
// 					<CImage src='/svg/CartArrowRight.svg' customStyle='self-end' />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import { CartCard } from "../ui-kit/CartCard";
import { CImage } from "../ui-kit/CImage";
import { PrimaryButton } from "../ui-kit/BaseButton";
import { useState } from "react";

export function Cart({
	customerAdress = null,
	deliveryTime = "15 min",
	delivery = 10,
	order,
	coupons = {},
}) {
	const [quantities, setQuantities] = useState(() => {
		const initialQuantities = {};
		order.forEach((_, index) => {
			initialQuantities[index] = 1;
		});
		return initialQuantities;
	});

	const handleIncrement = (index) => {
		setQuantities((prev) => ({
			...prev,
			[index]: (prev[index] || 0) + 1,
		}));
	};

	const handleDecrement = (index) => {
		setQuantities((prev) => ({
			...prev,
			[index]: Math.max(0, (prev[index] || 0) - 1),
		}));
	};

	const [discount, setDiscount] = useState(0);
	const [couponCode, setCouponCode] = useState("");
	const [couponMessage, setCouponMessage] = useState({ text: "", type: "" }); // type: "success" | "error"

	// Вычисление subtotal напрямую во время рендера
	const subtotal = order.reduce((sum, element, index) => {
		return sum + element.price * (quantities[index] || 0);
	}, 0);

	// Вычисление total
	const total = Math.max(0, subtotal - discount + delivery); // Защита от отрицательного total

	const handleApplyCoupon = () => {
		// Очистка предыдущего сообщения
		setCouponMessage({ text: "", type: "" });

		// Проверка на пустой код
		if (!couponCode.trim()) {
			setCouponMessage({
				text: "Please enter a coupon code",
				type: "error",
			});
			return;
		}

		// Поиск купона в массиве coupons
		const foundCoupon = coupons.find(
			(coupon) => coupon.code.toUpperCase() === couponCode.trim().toUpperCase(),
		);

		if (foundCoupon) {
			// Проверка минимальной суммы заказа, если указана
			if (foundCoupon.minOrder && subtotal < foundCoupon.minOrder) {
				setCouponMessage({
					text: `Minimum order amount $${foundCoupon.minOrder} required for this coupon`,
					type: "error",
				});
				return;
			}

			// Проверка срока действия, если указан
			if (
				foundCoupon.expiryDate &&
				new Date(foundCoupon.expiryDate) < new Date()
			) {
				setCouponMessage({
					text: "This coupon has expired",
					type: "error",
				});
				return;
			}

			// Расчет скидки
			let discountAmount = 0;
			if (foundCoupon.type === "percentage") {
				discountAmount = (subtotal * foundCoupon.value) / 100;
				// Проверка максимальной скидки для процентных купонов
				if (foundCoupon.maxDiscount) {
					discountAmount = Math.min(discountAmount, foundCoupon.maxDiscount);
				}
			} else if (foundCoupon.type === "fixed") {
				discountAmount = foundCoupon.value;
			}

			// Скидка не может превышать subtotal
			discountAmount = Math.min(discountAmount, subtotal);

			setDiscount(discountAmount);
			setCouponMessage({
				text: `Coupon applied! You saved $${discountAmount.toFixed(2)}`,
				type: "success",
			});
		} else {
			setDiscount(0);
			setCouponMessage({
				text: "Invalid coupon code",
				type: "error",
			});
		}
	};

	const handleRemoveCoupon = () => {
		setDiscount(0);
		setCouponCode("");
		setCouponMessage({ text: "", type: "" });
	};

	// Создание заказов с передачей пропсов
	let orders = order.map((element, index) => (
		<CartCard
			key={index}
			srcImg={element.imgSrc}
			price={element.price}
			quantity={quantities[index] || 0}
			onIncrement={() => handleIncrement(index)}
			onDecrement={() => handleDecrement(index)}
		/>
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
									<p>{customerAdress}</p>
								</div>
								<div>
									<p>Delivery Time</p>
									<p>{deliveryTime}</p>
								</div>
							</div>
						</div>
						<div className='self-end w-32 h-10'>
							<PrimaryButton textValue='Pending' />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full mt-24 md:mt-28 lg:mt-40'>
				<CImage src='/svg/il2.svg' divW='w-10' customStyle='pl-185' />
				<div className='flex w-full justify-center'>
					<CImage src='/svg/CartArrowLeft.svg' customStyle='self-end' />
					<form className='min-w-79 w-full max-w-173 flex flex-col gap-8 justify-center items-center'>
						{orders}
						<div className='flex flex-col gap-5 w-full'>
							<div className='relative group'>
								<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
									<div
										className="w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                            [mask:url('/svg/coupon.svg')_center/contain_no-repeat]
                                            [-webkit-mask:url('/svg/coupon.svg')_center/contain_no-repeat]"
									/>
								</div>
								<div className='flex justify-center items-center h-15'>
									<input
										value={couponCode}
										onChange={(e) => setCouponCode(e.target.value)}
										className='SignUpInputs h-full'
										placeholder='Apply Coupon'
										type='text'
										disabled={discount > 0}
									/>
									<button
										type='button'
										onClick={handleApplyCoupon}
										disabled={discount > 0}
										className={`ml-2 w-1/4 h-full px-4 py-2 rounded-lg ${
											discount > 0
												? "bg-hr cursor-not-allowed border-[2px] border-hr"
												: "text-white bg-pm border-[2px] border-pm rounded-2xl hover:bg-pmhover hover:border-white cursor-pointer"
										}`}
									>
										Apply
									</button>
								</div>
								{discount > 0 && (
									<button
										type='button'
										onClick={handleRemoveCoupon}
										className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700'
									></button>
								)}
							</div>
							{couponMessage.text && (
								<h6
									className={`tracking-wider ${
										couponMessage.type === "success"
											? "text-green-600"
											: "text-red-600"
									}`}
								>
									{couponMessage.text}
								</h6>
							)}
						</div>
						<div className='flex flex-col w-full gap-4.5'>
							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
								<p>Subtotal</p>
								<p>${subtotal.toFixed(2)}</p>
							</div>
							{discount > 0 && (
								<div className='flex justify-between items-center border-b border-dashed border-sc text-green-600'>
									<p>Discount</p>
									<p>-${discount.toFixed(2)}</p>
								</div>
							)}
							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
								<p>Delivery</p>
								<p>${delivery}</p>
							</div>
							<div className='flex justify-between items-center font-bold text-2xl'>
								<p>Total</p>
								<p>${total.toFixed(2)}</p>
							</div>
						</div>
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
