import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    Icons({
      autoInstall: true
    })
  ],
  server: {
    cors: true,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/', //代理接口
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
