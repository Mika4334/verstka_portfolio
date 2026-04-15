// import type { Route } from "./+types/home";
import { Outlet } from "react-router";
import { NavBar } from "../views/NavBar";
import { Footer } from "../views/Footer";

// export function meta({}: Route.MetaArgs) {
// 	return [
// 		{ title: "Eatly" },
// 		{ name: "delivery food service", content: "Welcome to Eatly" },
// 	];
// }

export default function AuthLayout() {
	return (
		<>
			<div className='hidden md:flex'>
				<Outlet />
			</div>
			<main className='md:hidden flex flex-col gap-20 max-w-full w-full px-5 lg:px-17 xl:px-23.75 overflow-x-hidden'>
				<NavBar
					hideLogoName
					hideNavLoginSignup={true}
					hideBottomBorder={false}
				/>
				<Outlet />
				<div className='relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw] md:hidden'>
					<Footer />
				</div>
			</main>
		</>
	);
}
