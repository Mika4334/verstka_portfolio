import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import preReloadPlugin from "./plugins/prereload";

// https://vite.dev/config/
export default defineConfig({
	// plugins: [preReloadPlugin(), tailwindcss(), reactRouter(), react()],
	plugins: [preReloadPlugin(), tailwindcss(), reactRouter()],
});
