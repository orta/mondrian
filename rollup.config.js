// rollup.config.js
// @ts-check

import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/graphql.js',
    format: 'cjs'
  },
  name: "Mondrian",
  plugins: [
    typescript(),
  ]
}
