import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

const getTypesPath = (jsFile) => {
  const pathInfo = parse(jsFile);
  return format({
    ...pathInfo,
    base: "",
    dir: `${pathInfo.dir}/types`,
    ext: ".d.ts",
  });
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: getTypesPath(pkg.module ?? pkg.main),
    output: [{ file: pkg.types, format: "esm" }],
    plugins: [dts()],
  },
];
