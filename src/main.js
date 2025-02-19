import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import '@arco-design/web-vue/dist/arco.css'
import 'flag-icons-svg/css/flag-icons.css'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.mount('#app')
