<script setup>
import { spotService } from '@/services/spotService'
import { storeService } from '@/services/storeService'
import { ref } from 'vue'
import Carousel from "@/components/Carousel";

const isShowModal = storeService.getters.isShowModal()
const show = ref(spotService.getters.showSpot())
</script>

<template>
  <div class="modal" :class="isShowModal ? 'modal-open' : ''">
    <div class="modal-box relative">
      <div class="grid grid-cols-12">
        <div class="col-span-11">
          <h2 class="text-lg font-bold">{{ show.title }}</h2>
        </div>
        <div class="w-full col-span-1 text-right">
          <a href="#">
            <i
                @click="storeService.commit.setIsShowModal(false)"
                class="btn btn-sm btn-primary btn-circle bi bi-x text-xl" />
          </a>
        </div>
      </div>
      <div class="py-4">
        <Carousel />
        <p>
          {{ show.content }}
        </p>
      </div>
    </div>
  </div>
</template>
