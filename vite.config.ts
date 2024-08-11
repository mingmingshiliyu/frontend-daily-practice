import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    open: true,
    cors: true,
    strictPort: true,
    watch:{
      usePolling: true,
    },
  },
  css:{
    modules: { // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
   },
   preprocessorOptions: {
    less: {
      // 支持内联 JavaScript
      javascriptEnabled: true,
    },
},
  }
  
  
})
