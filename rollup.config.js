import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import * as fs from 'fs'
import * as path from 'path'

import pkg from './package.json'

// const directoryExport = path.join(__dirname, 'src/exports')

// const files = fs.readdirSync(directoryExport)
// let arrayFiles = []

// files.forEach(function(file) {
//   const res = file.split('.')
//   arrayFiles.push(res[0])
// })

// const plugins = [
//   external(),
//   postcss({
//     modules: true
//   }),
//   url(),
//   svgr(),
//   babel({
//     exclude: 'node_modules/**',
//     plugins: [ 'external-helpers' ]
//   }),
//   resolve(),
//   commonjs()
// ]

// const createConfig = filename => ({
//   input: `src/exports/${filename}.js`,
//   output: [
//     {
//       file: `dist/${filename}.js`,
//       format: 'cjs',
//       sourcemap: false
//     },
//     {
//       file: `dist/${filename}.es.js`,
//       format: 'es',
//       sourcemap: false
//     }
//   ],
//   plugins
// })


// const configs = arrayFiles.map(filename => createConfig(filename))

// export default configs

export default {
  input: 'src/exports/InputText.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
