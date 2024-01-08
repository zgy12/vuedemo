import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      rules: [
        ['m-auto', { margin: '0 auto' }],
        [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
        [/^p-t(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
        [/^p-b(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
        [/^p-l(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
        [/^p-r(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
        [/^p-tb(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px`, 'padding-bottom': `${d}px` })],
        [/^p-lr(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px`, 'padding-left': `${d}px` })],

        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^m-t(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
        [/^m-b(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
        [/^m-l(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
        [/^m-r(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
        [/^m-tb(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px`, 'margin-bottom': `${d}px` })],
        [/^m-lr(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px`, 'margin-left': `${d}px` })],

        [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
        [/^min-w-(\d+)$/, ([, d]) => ({ 'min-width': `${d}px` })],
        [/^max-w-(\d+)$/, ([, d]) => ({ 'max-width': `${d}px` })],
        [/^w(\d+)$/, ([, d]) => ({ width: `${d}%` })],
        [/^fs-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],

        [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
        [/^min-h-(\d+)$/, ([, d]) => ({ 'min-height': `${d}px` })],
        [/^max-h-(\d+)$/, ([, d]) => ({ 'max-height': `${d}px` })],

        [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': `${d}px` })],
        [/^lh(\d+)$/, ([, d]) => ({ 'line-height': `${d}` })],
        [/^b-r-(\d+)$/, ([, d]) => ({ 'border-radius': `${d}px` })],
        [/^b-r(\d+)$/, ([, d]) => ({ 'border-radius': `${d}%` })],
        [
          /text-elli/,
          () => ({
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            overflow: 'hidden',
          }),
        ],
        [
          /^text-elli-(\d+)$/, // 文本保留几行
          ([, d]) => ({
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': `${d}`,
            '-webkit-box-orient': ' vertical',
          }),
        ],
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8090,
  },
});
