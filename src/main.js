import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@/assets/main.css'
import '@arco-design/web-vue/dist/arco.css'
import 'flag-icons-svg/css/flag-icons.css'

import ArcoVueIcon from '@arco-design/web-vue/es/icon'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
