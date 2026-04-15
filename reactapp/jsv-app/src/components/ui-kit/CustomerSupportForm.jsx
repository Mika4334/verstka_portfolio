import { PrimaryButton } from "./BaseButton";
import { CImage } from "./CImage";
import { BGImage } from "./BGImage";
import { CIcon } from "./CIcon";
import { H2 } from "./H2";

// export function CustomerSupportForm() {
// 	return (
// 		<>
// 			<div className='md:block w-ful max-w-full hidden'>
// 				<div className='flex justify-between'>
// 					<CImage
// 						src='/img/CustomerLeft0.png'
// 						alt='MobileScreen'
// 						w='w-2/1! 2xl:w-1/1 min-w-1/2'
// 						customStyle='justify-start'
// 					/>
// 					{/* <div className='flex w-full justify-start items-right md:pr-18 lg:pr-25'> */}
// 					<div className='flex justify-start items-center'>
// 						<CIcon
// 							src='/img/tilted_arrow.png'
// 							alt='tilted_arrow'
// 							divW='w-0'
// 							customStyle='self-end'
// 						/>
// 						<div className='flex flex-col justify-center'>
// 							<H2 beforeText='Customer' brkS spanText='Support' />
// 							<form
// 								className='mt-15 min-w-78 lg:w-87 xl:w-123'
// 								action=''
// 								method='post'
// 							>
// 								<input
// 									className='ContactUsInputs'
// 									placeholder='FULL NAME'
// 									type='text'
// 									autoComplete='given-name'
// 								/>
// 								{/* <input className='ContactUsInputs' placeholder='FULL NAME' type="text" autoComplete="family-name" /> */}
// 								<input
// 									className='ContactUsInputs'
// 									placeholder='ENTER YOUR EMAIL'
// 									type='email'
// 									pattern='.+@exemple\.com'
// 									autoComplete='off'
// 								/>
// 								<textarea
// 									className='ContactUsTextarea'
// 									placeholder='ENTER THE PROBLEM OR QUERY'
// 									rows='14'
// 								></textarea>
// 								<PrimaryButton textValue='Send Now' height='h-min-14 h-14' />
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='block md:hidden'>
// 				<div className='grid grid-cols-3 bg-pm max-w-full h-38'>
// 					<CImage
// 						src='/svg/CurlArrow90.svg'
// 						alt='CurlArrow'
// 						w='min-w-40'
// 						h='min-h-41'
// 						imgH='h-min-41'
// 					/>
// 					<h4 className='text-nowrap text-white text-[24px]/[120%]'>
// 						Contact Us
// 					</h4>
// 				</div>
// 				<form className='flex flex-col' action='' method='post'>
// 					<input
// 						className='ContactUsInputs'
// 						placeholder='FULL NAME'
// 						type='text'
// 						autoComplete='given-name'
// 					/>
// 					<input
// 						className='ContactUsInputs'
// 						placeholder='ENTER YOUR EMAIL'
// 						type='email'
// 						pattern='.+@exemple\.com'
// 						autoComplete='off'
// 					/>
// 					<textarea
// 						className='ContactUsTextarea'
// 						placeholder='ENTER THE PROBLEM OR QUERY'
// 						rows='14'
// 					></textarea>
// 					<PrimaryButton textValue='Send Now' height='h-min-14 h-14' />
// 				</form>
// 			</div>
// 		</>
// 	);
// }

export function CustomerSupportForm() {
	return (
		<>
			<div className='lg:block hidden'>
				<div className='flex pr-24 xl:pr-0'>
					<CImage
						src='/img/CustomerLeft0.png'
						alt='MobileScreen'
						// imgW='w-full!'
						w='w-1/2 min-w-1/2 self-start justify-start'
						// imgW='w-full'
					/>

					{/* <div className='flex w-full justify-start items-right md:pr-18 lg:pr-25'> */}
					<div className='flex'>
						<CImage
							src='/img/tilted_arrow.png'
							alt='tilted_arrow'
							w='min-w-21 max-w-40'
							h='min-h-21'
							// w='-ml-20 -mt-10'
							// imgH='w-50'
							customStyle='self-end -mb-15 -mr-4 lg:-mr-8'
						/>
						<div className='flex flex-col'>
							<H2
								beforeText='Customer&nbsp;'
								spanText='Support'
								textSize='text-[38px]! sm:text-[50px]! self-start'
							/>
							<form className='mt-15' action='' method='post'>
								<input
									className='ContactUsInputs'
									placeholder='FULL NAME'
									type='text'
									autoComplete='given-name'
								/>
								{/* <input className='ContactUsInputs' placeholder='FULL NAME' type="text" autoComplete="family-name" /> */}
								<input
									className='ContactUsInputs'
									placeholder='ENTER YOUR EMAIL'
									type='email'
									pattern='.+@exemple\.com'
									autoComplete='off'
								/>
								<textarea
									className='ContactUsTextarea'
									placeholder='ENTER THE PROBLEM OR QUERY'
									rows='14'
								></textarea>
								<PrimaryButton textValue='Send Now' height='h-min-14 h-14' />
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='block lg:hidden px-4'>
				<div className='grid grid-cols-3 bg-pm max-w-full h-38'>
					<CImage
						src='/svg/CurlArrow90.svg'
						alt='CurlArrow'
						w='min-w-40'
						h='min-h-41'
						imgH='h-min-41'
					/>
					<h4 className='text-nowrap text-white text-[24px]/[120%]'>
						Contact Us
					</h4>
				</div>
				<form className='flex flex-col' action='' method='post'>
					<input
						className='ContactUsInputs'
						placeholder='FULL NAME'
						type='text'
						autoComplete='given-name'
					/>
					<input
						className='ContactUsInputs'
						placeholder='ENTER YOUR EMAIL'
						type='email'
						pattern='.+@exemple\.com'
						autoComplete='off'
					/>
					<textarea
						className='ContactUsTextarea'
						placeholder='ENTER THE PROBLEM OR QUERY'
						rows='14'
					></textarea>
					<PrimaryButton textValue='Send Now' height='h-min-14 h-14' />
				</form>
			</div>
		</>
	);
}
