import { Options } from 'tsup';

export const tsup: Options = {
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    target: 'es2017',
    entryPoints: ['src/index.ts'],
};