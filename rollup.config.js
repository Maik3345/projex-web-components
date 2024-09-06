import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';

export default {
  input: "equalization-component.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [resolve(), commonjs(), terser()],
};
