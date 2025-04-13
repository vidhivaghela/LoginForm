import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import("tailwindcss").Config;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
