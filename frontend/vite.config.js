import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig( (command,mode)=> {
  const env = loadEnv(mode, process.cwd(), "")
  console.log(env.VITE_DEBUG)

  return{
  plugins: [react(), tailwindcss()],
  server: {
    ...(env.VITE_DEBUG === "true" && {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
)
  }
}
})




