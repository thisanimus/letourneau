import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
export default {
	input: "./assets/js/script.js",
	output: {
		file: "./assets/js/script.min.js",
		format: "es",
		name: "script",
	},
	watch: {
		include: ["assets/**/*"],
		exclude: "assets/js/bundle.min.js",
	},
	plugins: [
		nodeResolve({ jsnext: true, main: true }),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		terser(),
	],
};
