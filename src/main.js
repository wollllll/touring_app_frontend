import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { router } from '@/router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
  },
}).use(router).mount('#app')
