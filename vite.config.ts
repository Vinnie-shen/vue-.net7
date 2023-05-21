import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 项目启动后自动打开浏览器
    open: true,
    // 设置主机
    host: "127.0.0.1",
    // 设置端口
    port: 5001,
    // 本地代理
    proxy:{
      "/api":{
        target:"http://localhost:5117/api",
        // 启用跨域访问
        changeOrigin: true,
        // 修改请求路径
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/chathub':{
        target:"http://localhost:5117/chathub",
        // 启用跨域访问
        changeOrigin: true,
        ws: true,
        // 修改请求路径
        rewrite: path => path.replace(/^\/chathub/, '')
      }
    }
  }
})
