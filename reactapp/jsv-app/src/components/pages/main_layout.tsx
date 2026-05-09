// import type { Route } from "./+types/home";
import { Outlet, redirect } from "react-router";
import { NavBar } from "../views/NavBar";
import { Footer } from "../views/Footer";

// export function meta({}: Route.MetaArgs) {
// 	return [
// 		{ title: "Eatly" },
// 		{ name: "delivery food service", content: "Welcome to Eatly" },
// 	];
// }

// import type { Route } from "./+types/sign_in";
// import type { MiddlewareFunction } from "react-router";
// import { getUserFromSession } from "~/middleware/auth.server";
// import { userContext } from "~/context";
// import type { User } from "~/types";

// // Server-side Authentication Middleware
// async function authMiddleware({
// 	request,
// 	context,
// }: Parameters<MiddlewareFunction>[0]) {
// 	const user = await getUserFromSession(request);
// 	if (!user) {
// 		throw redirect("/signin");
// 	}
// 	// context.set(userContext, user);
// }

// export const middleware: Route.MiddlewareFunction[] = [authMiddleware];

export default function MainLayout() {
	return (
		<>
			<main className='flex flex-col gap-30 max-w-full w-full px-5 lg:px-17 xl:px-23.75 overflow-x-hidden'>
				<NavBar hideNavLoginSignup={false} hideBottomBorder={false} />
				<Outlet />
				<div className='relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw]'>
					<Footer />
				</div>
			</main>
		</>
	);
}
