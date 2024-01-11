import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
  },
  plugins: [vue()],
});
