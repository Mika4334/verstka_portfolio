// import { CartCard } from "../ui-kit/CartCard";
// import { CImage } from "../ui-kit/CImage";
// import { PrimaryButton } from "../ui-kit/BaseButton";
// import { useState } from "react";

// export function Cart({
// 	customerAdress = null,
// 	deliveryTime = "15 min",
// 	delivery = 10,
// 	order,
// 	coupons = {},
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

// 	const [discount, setDiscount] = useState(0);
// 	const [couponCode, setCouponCode] = useState("");
// 	const [couponMessage, setCouponMessage] = useState({ text: "", type: "" }); // type: "success" | "error"

// 	// Вычисление subtotal напрямую во время рендера
// 	const subtotal = order.reduce((sum, element, index) => {
// 		return sum + element.price * (quantities[index] || 0);
// 	}, 0);

// 	// Вычисление total
// 	const total = Math.max(0, subtotal - discount + delivery); // Защита от отрицательного total

// 	const handleApplyCoupon = () => {
// 		// Очистка предыдущего сообщения
// 		setCouponMessage({ text: "", type: "" });

// 		// Проверка на пустой код
// 		if (!couponCode.trim()) {
// 			setCouponMessage({
// 				text: "Please enter a coupon code",
// 				type: "error",
// 			});
// 			return;
// 		}

// 		// Поиск купона в массиве coupons
// 		const foundCoupon = coupons.find(
// 			(coupon) => coupon.code.toUpperCase() === couponCode.trim().toUpperCase(),
// 		);

// 		if (foundCoupon) {
// 			// Проверка минимальной суммы заказа, если указана
// 			if (foundCoupon.minOrder && subtotal < foundCoupon.minOrder) {
// 				setCouponMessage({
// 					text: `Minimum order amount $${foundCoupon.minOrder} required for this coupon`,
// 					type: "error",
// 				});
// 				return;
// 			}

// 			// Проверка срока действия, если указан
// 			if (
// 				foundCoupon.expiryDate &&
// 				new Date(foundCoupon.expiryDate) < new Date()
// 			) {
// 				setCouponMessage({
// 					text: "This coupon has expired",
// 					type: "error",
// 				});
// 				return;
// 			}

// 			// Расчет скидки
// 			let discountAmount = 0;
// 			if (foundCoupon.type === "percentage") {
// 				discountAmount = (subtotal * foundCoupon.value) / 100;
// 				// Проверка максимальной скидки для процентных купонов
// 				if (foundCoupon.maxDiscount) {
// 					discountAmount = Math.min(discountAmount, foundCoupon.maxDiscount);
// 				}
// 			} else if (foundCoupon.type === "fixed") {
// 				discountAmount = foundCoupon.value;
// 			}

// 			// Скидка не может превышать subtotal
// 			discountAmount = Math.min(discountAmount, subtotal);

// 			setDiscount(discountAmount);
// 			setCouponMessage({
// 				text: `Coupon applied! You saved $${discountAmount.toFixed(2)}`,
// 				type: "success",
// 			});
// 		} else {
// 			setDiscount(0);
// 			setCouponMessage({
// 				text: "Invalid coupon code",
// 				type: "error",
// 			});
// 		}
// 	};

// 	const handleRemoveCoupon = () => {
// 		setDiscount(0);
// 		setCouponCode("");
// 		setCouponMessage({ text: "", type: "" });
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
// 								<div className='flex justify-center items-center h-15'>
// 									<input
// 										value={couponCode}
// 										onChange={(e) => setCouponCode(e.target.value)}
// 										className='SignUpInputs h-full'
// 										placeholder='Apply Coupon'
// 										type='text'
// 										disabled={discount > 0}
// 									/>
// 									<button
// 										type='button'
// 										onClick={handleApplyCoupon}
// 										disabled={discount > 0}
// 										className={`ml-2 w-1/4 h-full px-4 py-2 rounded-lg ${
// 											discount > 0
// 												? "bg-hr cursor-not-allowed border-[2px] border-hr"
// 												: "text-white bg-pm border-[2px] border-pm rounded-2xl hover:bg-pmhover hover:border-white cursor-pointer"
// 										}`}
// 									>
// 										Apply
// 									</button>
// 								</div>
// 								{discount > 0 && (
// 									<button
// 										type='button'
// 										onClick={handleRemoveCoupon}
// 										className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700'
// 									></button>
// 								)}
// 							</div>
// 							{couponMessage.text && (
// 								<h6
// 									className={`tracking-wider ${
// 										couponMessage.type === "success"
// 											? "text-green-600"
// 											: "text-red-600"
// 									}`}
// 								>
// 									{couponMessage.text}
// 								</h6>
// 							)}
// 						</div>
// 						<div className='flex flex-col w-full gap-4.5'>
// 							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
// 								<p>Subtotal</p>
// 								<p>${subtotal.toFixed(2)}</p>
// 							</div>
// 							{discount > 0 && (
// 								<div className='flex justify-between items-center border-b border-dashed border-sc text-green-600'>
// 									<p>Discount</p>
// 									<p>-${discount.toFixed(2)}</p>
// 								</div>
// 							)}
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

// import { CartCard } from "../ui-kit/CartCard";
// import { CImage } from "../ui-kit/CImage";
// import { PrimaryButton } from "../ui-kit/BaseButton";
// import { useState, useEffect } from "react";

// export function Cart({
// 	customerAdress = null,
// 	deliveryTime = "15 min",
// 	delivery = 10,
// 	order,
// 	coupons = {},
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

// 	const [discount, setDiscount] = useState(0);
// 	const [couponCode, setCouponCode] = useState("");
// 	const [couponMessage, setCouponMessage] = useState({ text: "", type: "" });
// 	const [appliedCoupon, setAppliedCoupon] = useState(null); // Сохраняем примененный купон

// 	// Вычисление subtotal напрямую во время рендера
// 	const subtotal = order.reduce((sum, element, index) => {
// 		return sum + element.price * (quantities[index] || 0);
// 	}, 0);

// 	// Вычисление total
// 	const total = Math.max(0, subtotal - discount + delivery);

// 	const recalculateDiscount = (coupon, currentSubtotal) => {
// 		// Проверка минимальной суммы заказа, если указана
// 		if (coupon.minOrder && currentSubtotal < coupon.minOrder) {
// 			// Если минимальная сумма не выполнена, убираем скидку
// 			setDiscount(0);
// 			setAppliedCoupon(null);
// 			setCouponCode("");
// 			setCouponMessage({
// 				text: `Coupon removed: Minimum order amount $${coupon.minOrder} required`,
// 				type: "error",
// 			});
// 			return;
// 		}

// 		// Проверка срока действия, если указан
// 		if (coupon.expiryDate && new Date(coupon.expiryDate) < new Date()) {
// 			setDiscount(0);
// 			setAppliedCoupon(null);
// 			setCouponCode("");
// 			setCouponMessage({
// 				text: "Coupon removed: This coupon has expired",
// 				type: "error",
// 			});
// 			return;
// 		}

// 		// Расчет скидки
// 		let discountAmount = 0;
// 		if (coupon.type === "percentage") {
// 			discountAmount = (currentSubtotal * coupon.value) / 100;
// 			// Проверка максимальной скидки для процентных купонов
// 			if (coupon.maxDiscount) {
// 				discountAmount = Math.min(discountAmount, coupon.maxDiscount);
// 			}
// 		} else if (coupon.type === "fixed") {
// 			discountAmount = coupon.value;
// 		}

// 		// Скидка не может превышать subtotal
// 		discountAmount = Math.min(discountAmount, currentSubtotal);

// 		setDiscount(discountAmount);
// 		setCouponMessage({
// 			text: `Coupon applied! You saved $${discountAmount.toFixed(2)}`,
// 			type: "success",
// 		});
// 	};

// 	// Эффект для пересчета скидки при изменении subtotal или appliedCoupon
// 	useEffect(() => {
// 		if (appliedCoupon) {
// 			recalculateDiscount(appliedCoupon, subtotal);
// 		}
// 	}, [subtotal, appliedCoupon]);

// 	const handleApplyCoupon = () => {
// 		// Очистка предыдущего сообщения
// 		setCouponMessage({ text: "", type: "" });

// 		// Проверка на пустой код
// 		if (!couponCode.trim()) {
// 			setCouponMessage({
// 				text: "Please enter a coupon code",
// 				type: "error",
// 			});
// 			return;
// 		}

// 		// Поиск купона в массиве coupons
// 		const foundCoupon = coupons.find(
// 			(coupon) => coupon.code.toUpperCase() === couponCode.trim().toUpperCase(),
// 		);

// 		if (foundCoupon) {
// 			// Сохраняем примененный купон
// 			setAppliedCoupon(foundCoupon);
// 			// Пересчитываем скидку
// 			recalculateDiscount(foundCoupon, subtotal);
// 		} else {
// 			setDiscount(0);
// 			setAppliedCoupon(null);
// 			setCouponMessage({
// 				text: "Invalid coupon code",
// 				type: "error",
// 			});
// 		}
// 	};

// 	const handleRemoveCoupon = () => {
// 		setDiscount(0);
// 		setCouponCode("");
// 		setAppliedCoupon(null);
// 		setCouponMessage({ text: "", type: "" });
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
// 								<div className='flex justify-center items-center h-15'>
// 									<input
// 										value={couponCode}
// 										onChange={(e) => setCouponCode(e.target.value)}
// 										className='SignUpInputs h-full'
// 										placeholder='Apply Coupon'
// 										type='text'
// 										disabled={appliedCoupon !== null}
// 									/>
// 									{appliedCoupon === null ? (
// 										<button
// 											type='button'
// 											onClick={handleApplyCoupon}
// 											className={`ml-2 w-1/4 h-full px-4 py-2 rounded-lg text-white bg-pm border-[2px] border-pm rounded-2xl hover:bg-pmhover hover:border-white cursor-pointer`}
// 										>
// 											Apply
// 										</button>
// 									) : (
// 										<button
// 											type='button'
// 											onClick={handleRemoveCoupon}
// 											className='ml-2 w-1/4 h-full px-4 py-2 rounded-lg text-white bg-red-500 border-[2px] border-red-500 rounded-2xl hover:bg-red-600 hover:border-white cursor-pointer'
// 										>
// 											Remove
// 										</button>
// 									)}
// 								</div>
// 							</div>
// 							{couponMessage.text && (
// 								<h6
// 									className={`tracking-wider ${
// 										couponMessage.type === "success"
// 											? "text-green-600"
// 											: "text-red-600"
// 									}`}
// 								>
// 									{couponMessage.text}
// 								</h6>
// 							)}
// 						</div>
// 						<div className='flex flex-col w-full gap-4.5'>
// 							<div className='flex justify-between items-center border-b border-dashed border-sc text-sc'>
// 								<p>Subtotal</p>
// 								<p>${subtotal.toFixed(2)}</p>
// 							</div>
// 							{discount > 0 && (
// 								<div className='flex justify-between items-center border-b border-dashed border-sc text-green-600'>
// 									<p>Discount</p>
// 									<p>-${discount.toFixed(2)}</p>
// 								</div>
// 							)}
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
import { useState, useEffect, useCallback } from "react";

export function Cart({
	customerAdress = null,
	deliveryTime = "15 min",
	delivery = 10,
	order,
	coupons = {},
}) {
	// Используем Map для более надежного хранения quantities с id товаров
	const [quantities, setQuantities] = useState(() => {
		const initialQuantities = {};
		order.forEach((item, index) => {
			// Используем комбинацию индекса и имени как уникальный ключ
			const itemId = `${item.name || item.imgSrc}_${index}`;
			initialQuantities[itemId] = 1;
		});
		return initialQuantities;
	});

	// Создаем массив товаров с уникальными ID
	const itemsWithIds = order.map((item, index) => ({
		...item,
		uniqueId: `${item.name || item.imgSrc}_${index}`,
		originalIndex: index,
	}));

	const handleIncrement = (uniqueId) => {
		setQuantities((prev) => ({
			...prev,
			[uniqueId]: (prev[uniqueId] || 0) + 1,
		}));
	};

	const handleDecrement = (uniqueId) => {
		setQuantities((prev) => {
			const currentQty = prev[uniqueId] || 0;

			// Если количество станет 0, удаляем товар
			if (currentQty === 1) {
				const newQuantities = { ...prev };
				delete newQuantities[uniqueId];
				return newQuantities;
			}

			// Иначе просто уменьшаем количество
			return {
				...prev,
				[uniqueId]: currentQty - 1,
			};
		});
	};

	const [discount, setDiscount] = useState(0);
	const [couponCode, setCouponCode] = useState("");
	const [couponMessage, setCouponMessage] = useState({ text: "", type: "" });
	const [appliedCoupon, setAppliedCoupon] = useState(null);

	// Вычисление subtotal с учетом актуальных quantities
	const subtotal = itemsWithIds.reduce((sum, item) => {
		const quantity = quantities[item.uniqueId] || 0;
		return sum + item.price * quantity;
	}, 0);

	// Фильтруем товары для отображения
	const visibleItems = itemsWithIds.filter(
		(item) => quantities[item.uniqueId] > 0,
	);

	// Вычисление total
	const total = Math.max(0, subtotal - discount + delivery);

	// Эффект для пересчета скидки при изменении subtotal или appliedCoupon
	useEffect(() => {
		if (appliedCoupon) {
			recalculateDiscount(appliedCoupon, subtotal);
		}
	}, [subtotal, appliedCoupon]);

	const recalculateDiscount = useCallback((coupon, currentSubtotal) => {
		// Проверка минимальной суммы заказа, если указана
		if (coupon.minOrder && currentSubtotal < coupon.minOrder) {
			setDiscount(0);
			setAppliedCoupon(null);
			setCouponCode("");
			setCouponMessage({
				text: `Coupon removed: Minimum order amount $${coupon.minOrder} required`,
				type: "error",
			});
			return;
		}

		// Проверка срока действия, если указан
		if (coupon.expiryDate && new Date(coupon.expiryDate) < new Date()) {
			setDiscount(0);
			setAppliedCoupon(null);
			setCouponCode("");
			setCouponMessage({
				text: "Coupon removed: This coupon has expired",
				type: "error",
			});
			return;
		}

		// Расчет скидки
		let discountAmount = 0;
		if (coupon.type === "percentage") {
			discountAmount = (currentSubtotal * coupon.value) / 100;
			if (coupon.maxDiscount) {
				discountAmount = Math.min(discountAmount, coupon.maxDiscount);
			}
		} else if (coupon.type === "fixed") {
			discountAmount = coupon.value;
		}

		discountAmount = Math.min(discountAmount, currentSubtotal);
		setDiscount(discountAmount);
		setCouponMessage({
			text: `Coupon applied! You saved $${discountAmount.toFixed(2)}`,
			type: "success",
		});
	}, []);

	const handleApplyCoupon = () => {
		setCouponMessage({ text: "", type: "" });

		if (!couponCode.trim()) {
			setCouponMessage({
				text: "Please enter a coupon code",
				type: "error",
			});
			return;
		}

		const foundCoupon = coupons.find(
			(coupon) => coupon.code.toUpperCase() === couponCode.trim().toUpperCase(),
		);

		if (foundCoupon) {
			setAppliedCoupon(foundCoupon);
			recalculateDiscount(foundCoupon, subtotal);
		} else {
			setDiscount(0);
			setAppliedCoupon(null);
			setCouponMessage({
				text: "Invalid coupon code",
				type: "error",
			});
		}
	};

	const handleRemoveCoupon = () => {
		setDiscount(0);
		setCouponCode("");
		setAppliedCoupon(null);
		setCouponMessage({ text: "", type: "" });
	};

	// Создание заказов с передачей пропсов
	let orders = visibleItems.map((item) => (
		<CartCard
			key={item.uniqueId}
			srcImg={item.imgSrc}
			price={item.price}
			quantity={quantities[item.uniqueId] || 0}
			onIncrement={() => handleIncrement(item.uniqueId)}
			onDecrement={() => handleDecrement(item.uniqueId)}
			name={item.name} // Добавьте name в CartCard если нужно
		/>
	));

	// Если корзина пуста, показываем соответствующее сообщение
	if (visibleItems.length === 0) {
		return (
			<div className='flex flex-col justify-center items-center py-20'>
				<h3 className='text-2xl font-bold mb-4'>Your cart is empty</h3>
				<a
					href='/' // СКОРРЕКТИРОВАТЬ ПОСЛЕ ПОДКЛЮЧЕНИЯ РОУТИНГА
					className='flex justify-around items-center w-full max-w-100 h-20 text-2xl text-white bg-pm border-0.5 border-pm rounded-2xl hover:bg-pmhover hover:border-white'
				>
					Continue Shopping
				</a>
			</div>
		);
	}

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
					<div className='flex justify-between px-5 py-8'>
						<div className='flex gap-7'>
							<CImage src='/img/cart/location_time.png' />
							<div className='flex flex-col justify-between'>
								<div>
									<p className='text-sm text-sc'>Delivery Time</p>
									<p className='text-sm'>{deliveryTime}</p>
								</div>
								<div>
									<p className='text-sm text-sc'>Your Address</p>
									<p className='text-sm'>{customerAdress}</p>
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
										disabled={appliedCoupon !== null}
									/>
									{appliedCoupon === null ? (
										<button
											type='button'
											onClick={handleApplyCoupon}
											className={`ml-2 w-1/4 h-full px-4 py-2 rounded-lg text-white bg-pm border-[2px] border-pm rounded-2xl hover:bg-pmhover hover:border-white cursor-pointer`}
										>
											Apply
										</button>
									) : (
										<button
											type='button'
											onClick={handleRemoveCoupon}
											className='ml-2 w-1/4 h-full px-4 py-2 rounded-lg text-white bg-red-500 border-[2px] border-red-500 rounded-2xl hover:bg-red-600 hover:border-white cursor-pointer'
										>
											Remove
										</button>
									)}
								</div>
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
							type='submit'
						/>
					</form>
					<CImage src='/svg/CartArrowRight.svg' customStyle='self-end' />
				</div>
			</div>
		</div>
	);
}
