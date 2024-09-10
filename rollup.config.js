import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import litcss from "rollup-plugin-lit-css";
import terser from "@rollup/plugin-terser";
import glob from "glob";
import path from "path";

const components = glob.sync("src/components/**/*.ts");

export default components.map((inputFile) => {
  const fileName = path.basename(inputFile, path.extname(inputFile));
  return {
    input: inputFile,
    output: [
      {
        dir: "dist",
        format: "esm",
        entryFileNames: `${fileName}.js`,
        sourcemap: true,
      },
    ],
    plugins: [resolve(), typescript(), litcss(), terser()],
  };
});
