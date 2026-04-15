import type { Route } from "./+types/home";
import { SignInView } from "../views/Credentials";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Sign In" }, { name: "Sign In", content: "Sign In" }];
}

export default function SignUp() {
	return <SignInView />;
}
