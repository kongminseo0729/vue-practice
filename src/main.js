import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // ⭐ 반드시 필요

const app = createApp(App)

app.use(router)    // ⭐ 먼저 등록
app.mount('#app')  // ⭐ 그 다음 mount
