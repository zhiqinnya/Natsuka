import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'node:fs'
import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const generateConfig = () => ({
  socket: process.env.SOCKETURL || "wss://status.api.locyanfrp.cn/ws",
  apiURL: process.env.APIURL || "https://status.api.locyanfrp.cn",
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    {
      name: 'dynamic-config-json',
      configureServer (server) {
        // dynamic `config.json` for dev
        server.middlewares.use((req, res, next) => {
          if (req.url === '/config.json') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(generateConfig()));
          } else {
            next();
          }
        });
      },
      closeBundle () {
        // static `config.json` for prod
        const configPath = path.resolve(__dirname, 'dist/config.json');
        writeFileSync(configPath, JSON.stringify(generateConfig(), null, 2));
        console.log('Generated config.json:', generateConfig());
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
