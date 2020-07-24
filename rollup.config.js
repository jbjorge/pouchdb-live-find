import { nodeResolve } from '@rollup/plugin-node-resolve';
import polyfills from 'rollup-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json';

export default {
    input: 'lib/index.ts',
    output: [
        {
          file: pkg.main,
          format: 'cjs',
          exports: 'named',
          sourcemap: true
        },
        {
          file: pkg.module,
          format: 'es',
          exports: 'named',
        //   sourcemap: true
        },
      ],
    plugins: [
        typescript({
            include: ['lib/**/*'],
            esModuleInterop: true
        }),
        commonjs(),
        polyfills(),
        nodeResolve({
            browser: true
        }),
    ]
};