<script setup>
import Carousel from '@/components/Carousel'
import Base from '@/components/modals/Base'
import CloseButton from '@/components/modals/CloseButton'
import Profile from '@/components/users/Profile'
import { spotService } from '@/services/spotService'
import { storeService } from '@/services/storeService'
import { ref } from 'vue'

const show = ref(spotService.getters.showSpot())
const isShowModal = storeService.getters.isShowSpotModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title>
      <i class="bi bi-geo-alt" />&nbsp;{{ show.title }}
    </template>
    <template #close>
      <CloseButton @click="storeService.commit.setIsShowSpotModal(false)" />
    </template>
    <template #content>
      <Carousel />
      <p class="font-bold">2022-4-30 10:00</p>
      <p>{{ show.content }}</p>
      <div class="text-right">
        <label class="swap">
          <input type="checkbox" />

          <i class="bi bi-star swap-off sm:text-xl text-2xl fill-current" />
          <i
            class="bi bi-star-fill swap-on sm:text-xl text-2xl text-yellow-400 fill-current"
          />
        </label>
      </div>
      <Profile />
    </template>
  </Base>
</template>
