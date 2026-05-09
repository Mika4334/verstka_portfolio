// app/models/user.server.ts
export async function getStats(userId: string) {
	// Это может быть запрос к вашей БД (Prisma, Drizzle, etc.)
	const stats = await db.userStats.findUnique({
		where: { userId },
	});

	// Или запрос к внешнему микросервису
	// const response = await fetch(`https://service.com{userId}`);
	// const stats = await response.json();

	return stats;
}
