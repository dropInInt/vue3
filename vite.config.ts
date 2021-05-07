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

