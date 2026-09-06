import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    // Provide dummy values so tests can run without a real .env
    env: {
      VITE_USER_SERVICE_URL: "http://localhost:8001",
      VITE_STUDENT_SERVICE_URL: "http://localhost:8002",
      VITE_LECTURER_SERVICE_URL: "http://localhost:8003",
      VITE_COURSE_SERVICE_URL: "http://localhost:8004",
      VITE_ENROLLMENT_SERVICE_URL: "http://localhost:8005",
    },
  },
});