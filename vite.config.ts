import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import type { UserConfig } from 'vite'

const viteConfig: UserConfig = {
  plugins: [vue()],
  port: 3001,
  open: true,
  base: './',
  alias: {
    '/@/': resolve(__dirname, './src')
  },
  proxy: {
    '/api': {
      changeOrigin: true,
      target: 'http://192.168.2.11:7654/'
    },
    '/spd': {
      changeOrigin: true,
      secure: false,
      target: ''
    }
  },
}
export default viteConfig

