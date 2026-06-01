import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // FORÇANDO O NITRO A ATIVAR NA VERCEL
  nitro: {
    preset: "vercel"
  }
});
