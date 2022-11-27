import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "./lib/charrue/index.ts",
    "./lib/vue/index.ts",
  ],
  format: ["cjs", "esm"],
  outDir: "./lib",
  dts: true,
  external: [
    "vue",
    "@vue/reactivity",
    "@vue-reactivity/watch",
  ]
});
