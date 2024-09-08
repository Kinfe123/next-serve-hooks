import { defineConfig } from "tsup";
export default defineConfig({
  clean: true,
  dts: true,
  entry: ["server/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
});
