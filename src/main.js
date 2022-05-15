import App from './App.vue'
import './assets/css/base.scss'
import { router } from '@/router'
import { spotService } from '@/services/spotService'
import { storeService } from '@/services/storeService'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  spotService.commit.setShowSpot({})
  storeService.commit.setIsCreateSpotModal(false)
  storeService.commit.setIsShowSpotModal(false)
  storeService.commit.setIsShowSearchModal(false)

  next()
})
