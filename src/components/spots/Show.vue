<script setup>
const props = defineProps({
  spot: Object,
})
</script>

<template>
  <div class="hover:opacity-75 bg-white shadow">
    <div class="grid grid-cols-5 cursor-pointer">
      <div class="col-span-2">
        <img class="object-cover w-full h-20" :src="require(`@/../public/img/${spot.image_url}`)" :alt="spot.title" />
      </div>
      <div class="col-span-3 p-2">
        <div class="h-2/3 leading-5">
          <i class="bi bi-geo-alt" />
          {{ spot.title }}
        </div>
        <div class="h-1/3 text-sm text-right">- {{ spot.user_name }}</div>
      </div>
    </div>
  </div>
</template>
