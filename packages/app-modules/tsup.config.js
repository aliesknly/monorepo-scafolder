import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./user/index.ts", "./utilities/index.ts", "./index.ts"],
	sourcemap: true,
	dts: true,
	format: ["esm", "cjs"],
	clean: true,
	splitting: false,
});
