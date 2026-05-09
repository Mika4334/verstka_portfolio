// app/middleware/auth.ts
import { redirect } from "react-router";
import { getSession } from "../services/sessions.server";

export async function authMiddleware({ request }: { request: Request }) {
	const session = await getSession(request.headers.get("Cookie"));

	if (!session) {
		throw redirect("/signup"); // Используем throw, чтобы прервать цепочку сразу
	}

	return { user: session };
}
