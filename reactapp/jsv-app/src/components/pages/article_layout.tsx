// import type { Route } from "./+types/home";
import { Outlet } from "react-router";
import { ArticlePost } from "../views/ArticlePost";

// export function meta({}: Route.MetaArgs) {
// 	return [
// 		{ title: "Eatly" },
// 		{ name: "delivery food service", content: "Welcome to Eatly" },
// 	];
// }

export default function MainLayout() {
	return (
		<>
			<ArticlePost Article={<Outlet />} />
		</>
	);
}
