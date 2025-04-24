import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import { configDefaults } from "vitest/config.js";

export default defineConfig({
	plugins: [react(), tsConfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./tests/setup.ts"],
		coverage: {
			include: ["src/components/**"],
		},
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
