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

export default function Layout() {
	return (
		<main className='flex flex-col gap-16 bg-red-400 h-full max-w-full w-full px-5 lg:px-17 xl:px-23.75 overflow-x-hidden'>
			<NavBar />
			<Outlet />
			<Footer />
		</main>
	);
}
