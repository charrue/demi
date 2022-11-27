import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "./lib/charrue/index.ts",
    "./lib/vue/index.ts",
  ],
  format: ["cjs", "esm"],
  outDir: "./lib",
  dts: {
    resolve: true
  },
  external: [
    "vue",
    "@charrue/reactivity",
  ]
});
