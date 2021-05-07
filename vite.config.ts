//import vue from '@vitejs/plugin-vue'
const path = require('path') 
import type { UserConfig } from 'vite'

const viteConfig: UserConfig = {
 port: 3001,
 open: true,
 base: './',
 alias: {
  '/@/': path.resolve(__dirname, './src')
 },
 proxy: {}
}
export default viteConfig
// module.exports = {
//  pages: {
//   index: {
//    index: {
//     entry: 'src/main.ts'
//    } 
//   }
//  }
// }

// export default {
//  base: '/dist',
//  plugins: [vue()],
//  alias: [
//   {find: '@', replacement: resolve(__dirname, 'src')}
//  ],
//  base: './',
//  server: {
//   port: 8888,
//   open: true,
//   cors: true
//  }
// }

