import type { Route } from "./+types/home";
import { FOF } from "../ui-kit/404";

export function meta({}: Route.MetaArgs) {
	return [{ title: "404" }, { name: "not found", content: "Wrong path" }];
}

export default function Home() {
	return <FOF />;
}
