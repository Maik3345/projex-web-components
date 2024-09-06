import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import litcss from "rollup-plugin-lit-css";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), litcss(), terser()],
};
