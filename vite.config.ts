import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@features': path.resolve(__dirname, './src/features'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@processes': path.resolve(__dirname, './src/processes'),
      },
    },
    plugins: [react()],
    build: {
      commonjsOptions: { transformMixedEsModules: true },
    },
  }
})
