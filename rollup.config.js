import typescript from 'rollup-plugin-typescript';

export default {
  input: 'lambda.ts',
  output: {
    file: 'dist/graphql.js',
    format: 'cjs'
  },
  name: "Mondrian",
  plugins: [
    typescript(),
  ]
}
