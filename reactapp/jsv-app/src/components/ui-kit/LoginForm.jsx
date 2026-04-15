import { CImage } from "./CImage";
import { Logo } from "./Logo";
import { PrimaryButton } from "./BaseButton";
import { WeekendSlider } from "./WeekendSlider";
import { SignUpCard } from "./SignUpCard";
// import { useState } from 'react';

export function SignUpForm() {
	return (
		<>
			<div className='flex flex-col md:h-256 max-h-full justify-between items-center py-8 relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw]'>
				<div className='self-start pl-10 hidden md:flex'>
					<Logo withName={false} />
				</div>
				<form className='min-w-79 w-full max-w-97 flex gap-8 flex-col justify-center items-center px-4 xl:px-0'>
					<h4 className='text-[28px]!'>Sign Up To eatly</h4>
					<div className='flex gap-4 items-center justify-between h-13 w-full'>
						<button className='SignUpButtons'>
							<CImage src='/svg/apple.svg' alt='apple' />
						</button>
						<button className='SignUpButtons'>
							<CImage src='/svg/google.svg' alt='google' />
						</button>
					</div>
					<h5 className='text-sc/50'>OR</h5>
					<div className='flex flex-col gap-5 w-full'>
						<div className='relative group'>
							{/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <div
                                    className="w-5 h-5 bg-gray-400 group-focus-within:bg-pm"
                                    style={{
                                        WebkitMaskImage: "url('/svg/user_icon.svg')",
                                        maskImage: "url('/svg/user_icon.svg')",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                    }}
                                />
                            </div> */}
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/user_icon.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/user_icon.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='FULL NAME'
								type='text'
								autoComplete='given-name'
							/>
						</div>
						<div className='relative group'>
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/email.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/email.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='EMAIL'
								type='email'
								pattern='.+@exemple\.com'
							/>
						</div>
						<div className='relative group'>
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/password.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/password.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='PASSWORD'
								type='password'
								minLength='8'
								maxLength='16'
								required
								autoComplete='off'
							/>
							<div className='absolute inset-y-0 inset-e-5 flex items-center justify-end ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/blocked_eye.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/blocked_eye.svg')_center/contain_no-repeat]"
								/>
							</div>
						</div>
					</div>
					<PrimaryButton textValue='Sign up' height='h-15' uppercase />
					<div>
						<p>
							Already Have An Account?{" "}
							<a className='text-pm font-bold' href=''>
								Log In
							</a>
						</p>
					</div>
				</form>
				<div className='sm:flex justify-between w-full hidden px-10'>
					<p>Privacy Policy</p>
					<p>Copyright 2022</p>
				</div>
			</div>
			<div className='pt-40 px-4 lg:px-10 gap-10 w-full hidden md:flex flex-col justify-center bg-pm bg-[url(img/sliderbg.png)] bg-contain bg-no-repeat'>
				<WeekendSlider iconHide={true} whiteTheme={true}>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#1 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#2 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#3 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
				</WeekendSlider>
			</div>
		</>
	);
}

export function SignInForm() {
	return (
		<>
			<div className='flex flex-col md:h-256 max-h-full justify-between items-center py-8 relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw]'>
				<div className='self-start pl-10 hidden md:flex'>
					<Logo withName={false} />
				</div>
				<form className='min-w-79 w-full max-w-97 flex gap-8 flex-col justify-center items-center px-4 xl:px-0'>
					<h4 className='text-[28px]!'>Sign In To eatly</h4>
					<div className='flex gap-4 items-center justify-between h-13 w-full'>
						<button className='SignUpButtons'>
							<CImage src='/svg/apple.svg' alt='apple' />
						</button>
						<button className='SignUpButtons'>
							<CImage src='/svg/google.svg' alt='google' />
						</button>
					</div>
					<h5 className='text-sc/50'>OR</h5>
					<div className='flex flex-col gap-5 w-full'>
						<div className='relative group'>
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/email.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/email.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='EMAIL'
								type='email'
								pattern='.+@exemple\.com'
							/>
						</div>
						<div className='relative group'>
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/password.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/password.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='PASSWORD'
								type='password'
								minLength='8'
								maxLength='16'
								required
								autoComplete='off'
							/>
							<div className='absolute inset-y-0 inset-e-5 flex items-center justify-end ps-3 pointer-events-none'>
								<div
									className=" w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/blocked_eye.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/blocked_eye.svg')_center/contain_no-repeat]"
								/>
							</div>
						</div>
						<a className='self-end text-pm font-bold' href=''>
							Forgot Password ?
						</a>
					</div>
					<PrimaryButton textValue='Sign up' height='h-15' uppercase />
					<div>
						<p>
							Create A New Account?{" "}
							<a className='text-pm font-bold' href=''>
								Sign Up
							</a>
						</p>
					</div>
				</form>
				<div className='sm:flex justify-between w-full hidden px-10'>
					<p>Privacy Policy</p>
					<p>Copyright 2022</p>
				</div>
			</div>
			<div className='pt-40 px-4 lg:px-10 gap-10 w-full hidden md:flex flex-col justify-center bg-pm bg-[url(img/sliderbg.png)] bg-contain bg-no-repeat'>
				<WeekendSlider iconHide={true} whiteTheme={true}>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#1 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#2 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#3 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
				</WeekendSlider>
			</div>
		</>
	);
}

export function ForgetForm() {
	return (
		<>
			<div className='flex flex-col md:h-256 max-h-full justify-between items-center py-18 relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw]'>
				<div className='self-start pl-10 hidden md:flex'>
					<Logo withName={false} />
				</div>
				<form className='min-w-79 w-full max-w-97 flex gap-2 flex-col justify-center items-center px-4 xl:px-0'>
					<h4 className='text-[28px]!'>Forget Password</h4>
					<p>Enter Your Mail To Reset</p>
					<div className='flex gap-4 items-center justify-between h-13 w-full'>
						<button className='SignUpButtons'>
							<CImage src='/svg/apple.svg' alt='apple' />
						</button>
						<button className='SignUpButtons'>
							<CImage src='/svg/google.svg' alt='google' />
						</button>
					</div>
					<h5 className='text-sc/50'>OR</h5>
					<div className='flex flex-col gap-5 w-full'>
						<div className='relative group'>
							<div className='absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none'>
								<div
									className="w-5 h-5 bg-gray-400 group-focus-within:bg-pm
                                [mask:url('/svg/email.svg')_center/contain_no-repeat]
                                [-webkit-mask:url('/svg/email.svg')_center/contain_no-repeat]"
								/>
							</div>
							<input
								className='SignUpInputs'
								placeholder='EMAIL'
								type='email'
								pattern='.+@exemple\.com'
							/>
						</div>
					</div>
					<PrimaryButton textValue='Verify' height='h-15' uppercase />
				</form>
				<div className='sm:flex justify-between w-full hidden px-10'>
					<p>Privacy Policy</p>
					<p>Copyright 2022</p>
				</div>
			</div>
			<div className='pt-40 px-4 lg:px-10 gap-10 w-full hidden md:flex flex-col justify-center bg-pm bg-[url(img/sliderbg.png)] bg-contain bg-no-repeat'>
				<WeekendSlider iconHide={true} whiteTheme={true}>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#1 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#2 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
					<SignUpCard
						imgSrc='img/sliderimage.png'
						heading='#3 Find Foods With Love '
						text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'
					/>
				</WeekendSlider>
			</div>
		</>
	);
}

// export function SignUpForm() {
//     const [icons, setIcons] = useState({
//         user: '/svg/user_icon.svg',
//         email: '/svg/email.svg',
//         password: '/svg/password.svg',
//         blockedEye: '/svg/blocked_eye.svg'
//     })

//     const iconsFocused = {
//         user: '/svg/user_icon_focused.svg',
//         email: '/svg/email_focused.svg',
//         password: '/svg/password_focused.svg',
//         blockedEye: '/svg/blocked_eye_focused.svg'
//     }

//     const iconsDefault = {
//         user: '/svg/user_icon.svg',
//         email: '/svg/email.svg',
//         password: '/svg/password.svg',
//         blockedEye: '/svg/blocked_eye.svg'
//     }

//     const handleFocus = (field) => {
//         setIcons(prev => ({ ...prev, [field]: iconsFocused[field] }))
//     }

//     const handleBlur = (field) => {
//         setIcons(prev => ({ ...prev, [field]: iconsDefault[field] }))
//     }

//     return (
//         <>
//             <div className='max-w-116.5 w-full flex flex-col items-center'>
//                 <form className='min-w-79 w-full max-w-97 flex gap-8 flex-col justify-center items-center'>
//                     <h4 className='text-[28px]!'>Sign Up To eatly</h4>
//                     <div className='flex gap-4 items-center justify-between h-13 w-full'>
//                         <button className='SignUpButtons'>
//                             <CImage src='/svg/apple.svg' alt='apple' />
//                         </button>
//                         <button className='SignUpButtons'>
//                             <CImage src='/svg/google.svg' alt='google' />
//                         </button>
//                     </div>
//                     <h5 className='text-sc/50'>OR</h5>
//                     <div className='flex flex-col gap-5 w-full'>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                                 <CImage src={icons.user} alt='user_icon' />
//                             </div>
//                             <input
//                                 onFocus={() => handleFocus('user')}
//                                 onBlur={() => handleBlur('user')}
//                                 className='SignUpInputs'
//                                 placeholder='FULL NAME'
//                                 type="text"
//                                 autoComplete="given-name"
//                             />
//                         </div>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                                 <CImage src={icons.email} alt='email' />
//                             </div>
//                             <input
//                                 onFocus={() => handleFocus('email')}
//                                 onBlur={() => handleBlur('email')}
//                                 className='SignUpInputs'
//                                 placeholder='EMAIL'
//                                 type="email"
//                                 pattern=".+@exemple\.com"
//                             />
//                         </div>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                                 <CImage src={icons.password} alt='password' />
//                             </div>
//                             <input
//                                 onFocus={() => {
//                                     handleFocus('password');
//                                     handleFocus('blocked_eye');
//                                 }}
//                                 onBlur={() => {
//                                     handleBlur('password');
//                                     handleBlur('blocked_eye');
//                                 }}
//                                 className='SignUpInputs'
//                                 placeholder='PASSWORD'
//                                 type="password"
//                                 minLength="8"
//                                 maxLength="16"
//                                 required
//                                 autoComplete="off"
//                             />
//                             <div className="absolute inset-y-0 end-5 flex items-center justify-end ps-3 pointer-events-none">
//                                 <CImage src={icons.blockedEye} alt='blocked_eye' />
//                             </div>
//                         </div>
//                     </div>
//                     <PrimaryButton textValue='Sign up' height='h-15' uppercase />
//                     <div>
//                         <p>Already Have An Account? <a className='text-pm font-bold' href="">Log In</a></p>
//                     </div>
//                 </form>
//                 <div className='sm:flex justify-between w-full hide'>
//                     <div className='w-full'>Privacy Policy</div>
//                     <div className='text-nowrap'>Copyright 2022</div>
//                 </div >
//             </div>
//             <div className='w-1/2 hidden md:flex flex-col gap-5 justify-center sm:px-12 lg:px-15 bg-pm bg-[url(img/sliderbg.png)] bg-contain bg-no-repeat'>
//                 <WeekendSlider iconHide={true} whiteTheme={true}>
//                     <SignUpCard imgSrc='img/sliderimage.png' heading='#1 Find Foods With Love ' text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.' />
//                     <SignUpCard imgSrc='img/sliderimage.png' heading='#2 Find Foods With Love ' text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.' />
//                     <SignUpCard imgSrc='img/sliderimage.png' heading='#3 Find Foods With Love ' text='Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.' />
//                 </WeekendSlider>
//             </div>
//         </>
//     )
// }
