import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tailwindcss from './style.css'


createApp(App, tailwindcss).use(router).mount('#app')
