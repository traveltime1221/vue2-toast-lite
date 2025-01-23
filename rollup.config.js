import vue from 'rollup-plugin-vue'; // 處理 Vue 文件
import css from 'rollup-plugin-css-only'; // 處理 CSS
import terser from "@rollup/plugin-terser";
// import buble from 'rollup-plugin-buble'; // 用來處理 ES6 轉換

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue2-toast-lite.esm.js', // ESM 格式
      format: 'es',
      name: 'Vue2ToastLite',
    },
    {
      file: 'dist/vue2-toast-lite.esm.js', // ESM 格式
      format: 'es',
      name: 'Vue2ToastLite',
      plugins: [terser()], // 使用 terser 壓縮
    },
    {
      file: 'dist/vue2-toast-lite.umd.js', // UMD 格式
      format: 'umd',
      name: 'Vue2ToastLite',
    },
    {
      file: 'dist/vue2-toast-lite.umd.js', // UMD 格式
      format: 'umd',
      name: 'Vue2ToastLite',
      plugins: [terser()], // 使用 terser 壓縮
    },
  ],
  external: ['vue'], // 讓 Vue 成為外部依賴
  plugins: [
    vue(), // 處理 Vue 文件
    css({ output: 'vue2-toast-lite.css' }), // 把 CSS 輸出到單獨的檔案
    // buble(), // 用來處理 ES6 轉換
  ]
};
