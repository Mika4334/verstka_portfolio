import type { Route } from "./+types/home";
import { ForgetView } from "../views/Credentials";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Forget Password?" },
		{ name: "Forget Password?", content: "Forget Password?" },
	];
}

export default function SignUp() {
	return <ForgetView />;
}
