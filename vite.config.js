import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/remote": {
                target: "https://modernaminos.com",
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/remote/, ""),
            },
        },
    },
    preview: {
        proxy: {
            "/remote": {
                target: "https://modernaminos.com",
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/remote/, ""),
            },
        },
    },
});
