// Объект: ключ = папка, значение = описание проекта
const projects = {
	"4konya": "Адаптивная вёрстка сайта для коворкинга. Flexbox, Grid, анимации.",
	mntn: "Лендинг для альпинистов. Параллакс, адаптив, чистый CSS/JS.",
	fetch_jsonplaceholder:
		"Работа с API: получение и отображение данных через fetch().",
	flexes_layout: "Коллекция макетов на Flexbox. Практика вёрстки.",
	"tik-tak-toe": "Игра «Крестики-нолики». Логика на React.",
};

const baseUrl = "https://mika4334.github.io/verstka_portfolio/";
const githubBase = "https://github.com/Mika4334/verstka_portfolio/tree/main/";
const container = document.getElementById("projects-container");

Object.entries(projects).forEach(([folder, description], index) => {
	const projectUrl = `${baseUrl}${folder}/`;
	const githubUrl = `${githubBase}${folder}`;
	const localPreview = `${folder}/preview.png`;
	const fallbackUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(projectUrl)}?w=500`;

	// ОБЁРТКА: карточка + плашка с гитом
	const wrapper = document.createElement("div");
	wrapper.className = "project-wrapper";
	wrapper.style.setProperty("--i", index);

	// КАРТОЧКА-ССЫЛКА (превью + название)
	const card = document.createElement("a");
	card.className = "project";
	card.href = projectUrl;
	card.target = "_blank";
	card.rel = "noopener noreferrer";

	const img = document.createElement("img");
	img.alt = folder;
	img.loading = "lazy";
	img.decoding = "async";
	img.src = localPreview;
	img.onerror = function () {
		img.onerror = null;
		img.src = fallbackUrl;
	};

	const tooltip = document.createElement("span");
	tooltip.className = "tooltip";
	tooltip.textContent = description;

	const title = document.createElement("span");
	title.className = "project-title";
	title.textContent = folder;

	card.appendChild(img);
	card.appendChild(tooltip);
	card.appendChild(title);

	// ПЛАШКА С ГИТХАБОМ (под карточкой)
	const githubLink = document.createElement("a");
	githubLink.className = "github-link";
	githubLink.href = githubUrl;
	githubLink.target = "_blank";
	githubLink.rel = "noopener noreferrer";
	githubLink.innerHTML = `
		<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
		</svg>
		${folder} на GitHub
	`;

	// Сборка
	wrapper.appendChild(card);
	wrapper.appendChild(githubLink);
	container.appendChild(wrapper);
});

// // index.js (замена текущего)
// const projectFolders = [
// 	"4konya",
// 	"mntn",
// 	"fetch_jsonplaceholder",
// 	"flexes_layout",
// 	"tik-tak-toe",
// ];

// const baseUrl = "https://mika4334.github.io/verstka_portfolio/";
// const container = document.getElementById("projects-container");

// projectFolders.forEach((folder) => {
// 	const projectUrl = `${baseUrl}${folder}/`;
// 	const localPreview = `${folder}/preview.png`; // локальный путь
// 	const fallbackUrl = `https://s0.wp.com/mshots/v1/${projectUrl}?w=500`;

// 	const div = document.createElement("div");
// 	div.className = "project";

// 	const img = document.createElement("img");
// 	img.alt = folder;
// 	img.loading = "lazy";

// 	// Пробуем загрузить локальную картинку, при ошибке — подставляем mshots
// 	img.src = localPreview;
// 	img.onerror = function () {
// 		// onerror может вызываться несколько раз, поэтому удаляем обработчик,
// 		// чтобы не зациклиться
// 		img.onerror = null;
// 		img.src = fallbackUrl;
// 	};

// 	const link = document.createElement("a");
// 	link.href = projectUrl;
// 	link.target = "_blank";
// 	link.textContent = folder;

// 	div.appendChild(img);
// 	div.appendChild(link);
// 	container.appendChild(div);
// });

// // Просто дописывай сюда названия папок новых проектов
// const projectFolders = [
// 	"4konya",
// 	"mntn",
// 	"fetch_jsonplaceholder",
// 	"flexes_layout",
// 	"tik-tak-toe",
// ];

// const baseUrl = "https://mika4334.github.io/verstka_portfolio/";
// const container = document.getElementById("projects-container");

// projectFolders.forEach((folder) => {
// 	const projectUrl = `${baseUrl}${folder}/`;
// 	const screenshotUrl = `https://s0.wp.com/mshots/v1/${projectUrl}?w=500`;

// 	const div = document.createElement("div");
// 	div.className = "project";

// 	const img = document.createElement("img");
// 	img.src = screenshotUrl;
// 	img.alt = folder;
// 	img.loading = "lazy";

// 	const link = document.createElement("a");
// 	link.href = projectUrl;
// 	link.target = "_blank";
// 	link.textContent = folder;

// 	div.appendChild(img);
// 	div.appendChild(link);
// 	container.appendChild(div);
// });
