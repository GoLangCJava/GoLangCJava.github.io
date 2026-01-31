import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/**
 * Vite + React 最佳实践配置
 * 优化构建速度、开发体验和生产性能
 */
export default defineConfig({
  plugins: [
    react(),
  ],
  
  esbuild: {
    jsx: 'automatic',
  },
  
  // 构建优化
  build: {
    // 指定 CSS 输出目录
    outDir: 'dist',
    // 清理构建缓存
    emptyOutDir: true,
    // 压缩资源
    minify: 'terser',
    // 生成 source map
    sourcemap: true,
    // 分包策略
    rollupOptions: {
      output: {
        // 手动分包优化
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        compact: true,
      },
    },
    // 优化依赖预构建
    commonjsOptions: {
      include: [/react/, /react-dom/],
      transformMixedEsModules: true,
    },
  },

  // 开发服务器优化
  server: {
    // 开启 HMR（Hot Module Replacement）
    hmr: {
      overlay: true,
    },
    // 强制更新客户端
    watch: {
      usePolling: false,
    },
    // 端口配置
    port: 3000,
    strictPort: false,
    // host 配置（可选）
    host: true,
  },

  // 依赖优化
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },

  // CSS 优化
  css: {
    // 启用 CSS 模块化（如果使用 CSS Modules）
    modules: {
      localsConvention: 'camelCase',
    },
    // 使用 PostCSS 处理 CSS
    postcss: './postcss.config.js',
    devSourceMap: true,
  },

  // 环境变量
  define: {
    // 开发环境标识
    __DEV__: JSON.stringify(false),
    // 生产环境标识
    __PROD__: JSON.stringify(true),
  },

  // 路径别名
  resolve: {
    alias: {
      // 组件别名
      '@': './src',
      '@components': './src/components',
      '@types': './src/types',
      '@styles': './src/styles',
      '@utils': './src/utils',
      '@hooks': './src/hooks',
      '@assets': './src/assets',
    },
    dedupe: ['react', 'react-dom'],
  },

  // 实验性功能
  experimental: {
    // 启用顶层 await
    topLevelAwait: false,
  },

  // 预览优化
  preview: {
    // 预览端口
    port: 4173,
    strictPort: false,
    host: true,
  },
})
