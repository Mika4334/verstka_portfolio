import { NavMenu } from "../ui-kit/NavMenu";
import { LoginButton, PrimaryButton } from "../ui-kit/BaseButton";
import { BurgerMenu } from "../ui-kit/BurgerMenu";
import { Logo } from "../ui-kit/Logo";

export function NavBar({
	hideLogoName = true,
	hideNavLoginSignup,
	hideBottomBorder,
}) {
	return (
		<nav
			className={`max-w-full pt-12 pb-6.25 ${hideBottomBorder ? "" : "border-b border-hr"} `}
		>
			<div className='flex justify-between items-center w-full'>
				<Logo withName={hideLogoName} />
				<BurgerMenu />
				<div
					className={`${hideNavLoginSignup ? "hidden!" : ""} hidden md:flex items-center`}
				>
					<div
						id='navMenu'
						className='navMenu w-93.5 h-6.75 flex justify-around items-center'
					>
						<NavMenu />
					</div>
					<div className='flex justify-between w-58 w-max-58 min-h-11 h-15'>
						<LoginButton textValue='Login' width='w-full' height='h-full' />
						<PrimaryButton textValue='Signup' width='w-full' height='h-full' />
					</div>
				</div>
			</div>
		</nav>
	);
}
