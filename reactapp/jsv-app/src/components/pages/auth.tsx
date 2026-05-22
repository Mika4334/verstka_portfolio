// import { Outlet } from "react-router";
// import { authMiddleware } from "../../middleware/auth";
// import { getStats } from "../../models/user.server";
// import type { Route } from "./+types/auth";

// // export const clientMiddleware = [authMiddleware]; // Для SPA/Client-side
// export const middleware = [authMiddleware]; // Для SSR

// export async function loader({ context }: Route.LoaderArgs) {
// 	// Данные из middleware попадают в context
// 	const user = context.user;
// 	return { stats: await getStats(user.id) };
// }

// export default function AuthLayout() {
// 	return <Outlet />;
// }
