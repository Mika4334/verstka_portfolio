// app/sessions.server.ts
import { createCookieSessionStorage } from "react-router";

// Определяем тип данных, которые будем хранить в сессии
type SessionData = {
	userId: string;
};

type SessionFlashData = {
	error: string;
};

// Создаём хранилище
const { getSession, commitSession, destroySession } =
	createCookieSessionStorage<SessionData, SessionFlashData>({
		// Кука с настройками безопасности
		cookie: {
			name: "__session", // Имя куки
			httpOnly: true, // Запрещает доступ из JS (защита от XSS)
			maxAge: 60 * 60 * 24 * 7, // 7 дней
			path: "/",
			sameSite: "lax",
			secrets: ["s3cr3t"], // Ключ для подписи куки (из env!)
			// secure: process.env.NODE_ENV === "production", // Только HTTPS в проде
		},
	});

export { getSession, commitSession, destroySession };
