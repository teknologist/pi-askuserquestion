import { existsSync } from "node:fs";
import { defineConfig } from "vitest/config";

const PI_NM = "/opt/homebrew/lib/node_modules/@mariozechner/pi-coding-agent/node_modules";
const PI_ROOT = "/opt/homebrew/lib/node_modules/@mariozechner/pi-coding-agent";
const LOCAL_NM = `${process.cwd()}/node_modules`;
const TYPEBOX = existsSync(`${PI_NM}/typebox/build/index.mjs`)
  ? `${PI_NM}/typebox/build/index.mjs`
  : `${LOCAL_NM}/typebox/build/index.mjs`;

export default defineConfig({
  resolve: {
    alias: {
      "@mariozechner/pi-tui": `${PI_NM}/@mariozechner/pi-tui/dist/index.js`,
      "@mariozechner/pi-coding-agent": `${PI_ROOT}/dist/index.js`,
      typebox: TYPEBOX,
    },
  },
});
