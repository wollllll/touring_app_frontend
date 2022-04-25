<script setup>
import { ref } from 'vue'
import { spotService } from '@/services/spotService'

const showSpot = ref(spotService.getters.showSpot())
</script>

<template>
  <div
    class="bg-white shadow absolute bottom-3 inset-x-0 mx-auto w-11/12 sm:w-1/2 max-w-md"
  >
    <div class="grid grid-cols-5 cursor-pointer">
      <div class="col-span-2">
        <img
          class="h-20 w-full object-cover"
          :src="showSpot.image_url"
          :alt="showSpot.title"
        />
      </div>
      <div class="col-span-3 p-2">
        <div class="h-2/3 leading-5">
          <i class="bi bi-geo-alt"></i>
          {{ showSpot.title }}
        </div>
        <div class="h-1/3 text-right">- sursurk.r3m</div>
      </div>
    </div>
  </div>
</template>
