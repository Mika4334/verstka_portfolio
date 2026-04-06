import { NavMenu } from "../ui-kit/NavMenu";
import { LoginButton, PrimaryButton } from "../ui-kit/BaseButton";
import { BurgerMenu } from "../ui-kit/BurgerMenu";
import { Logo } from "../ui-kit/Logo";

export function NavBar() {
	return (
		<nav className='max-w-full pt-12 pb-6.25 border-b border-hr'>
			<div className='flex justify-between items-center w-full'>
				<Logo withName />
				<BurgerMenu />
				<div className='hidden md:flex items-center'>
					<NavMenu />
					<div className='flex justify-between w-58 w-max-58 min-h-11 h-15'>
						<LoginButton textValue='Login' width='w-full' height='h-full' />
						<PrimaryButton textValue='Signup' width='w-full' height='h-full' />
					</div>
				</div>
			</div>
		</nav>
	);
}
