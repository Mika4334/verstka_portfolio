import type { Route } from "./+types/home";
import { SignUpView } from "../views/Credentials";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Sign Up" }, { name: "Sign Up", content: "Sign Up" }];
}

export default function SignUp() {
	return <SignUpView />;
}
