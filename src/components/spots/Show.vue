<script setup>
import { spotService } from '@/services/spotService'
import { ref } from 'vue'

const show = ref(spotService.getters.showSpot())
</script>

<template>
  <div
    class="bottom-3 sm:w-1/2 absolute inset-x-0 w-11/12 max-w-md mx-auto bg-white shadow"
  >
    <div class="grid grid-cols-5 cursor-pointer">
      <div class="col-span-2">
        <img
          class="object-cover w-full h-20"
          :src="show.image_url"
          :alt="show.title"
        />
      </div>
      <div class="col-span-3 p-2">
        <div class="h-2/3 leading-5">
          <i class="bi bi-geo-alt" />
          {{ show.title }}
        </div>
        <div class="h-1/3 text-right">- {{ show.user_name }}</div>
      </div>
    </div>
  </div>
</template>
