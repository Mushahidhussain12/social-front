import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        //To avoid cors error that i faced previously!!
        proxy: {
            "/api": {
                target: "https://mern-back-7d3f.onrender.com",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});