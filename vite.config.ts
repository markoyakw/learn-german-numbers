import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  optimizeDeps: {
    include: ['lodash']
  },
  server: {
    host: '0.0.0.0'
  }
}) satisfies UserConfig

