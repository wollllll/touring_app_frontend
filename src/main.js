import App from './App.vue'
import './assets/css/tailwind.css'
import { router } from '@/router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')
