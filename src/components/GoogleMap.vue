<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
import { ref } from 'vue'

const API_KEY = process.env.VUE_APP_GOOGLE_MAP_API_KEY
const center = ref({ lat: 35.0889962, lng: 138.9533645 })
const showSpot = ref({})
const spots = [
  {
    id: 1,
    title: '伊豆の吊り橋',
    image_url: '/img/spot1.881c736e.jpg',
    latitude: 35.0889962,
    longitude: 138.9533645,
  },
  {
    id: 2,
    title: '伊豆の山',
    image_url: '/img/spot2.1d47994f.jpg',
    latitude: 35.0809962,
    longitude: 138.9533645,
  },
  {
    id: 3,
    title: '伊豆の山だ伊豆の山だ伊豆の山だ伊豆の山だ',
    image_url: '/img/spot2.1d47994f.jpg',
    latitude: 35.1009962,
    longitude: 138.9533645,
  },
]
const updateShowSpot = (spot) => {
  center.value = { lat: spot.latitude, lng: spot.longitude }
  showSpot.value = spot
}
</script>

<template>
  <GoogleMap
    class="relative w-full h-full"
    :api-key="API_KEY"
    :center="center"
    :zoom="15"
    :fullscreenControl="false"
    :mapTypeControl="false"
    :zoomControl="false"
    :streetViewControl="false"
    :keyboardShortcuts="false"
  >
    <Marker
      @click="updateShowSpot(spot)"
      :key="index"
      v-for="(spot, index) in spots"
      :options="{ position: { lat: spot.latitude, lng: spot.longitude } }"
    />
    <button
      class="shadow bg-white text-inherit btn btn-sm btn-ghost w-2/3 max-w-xs absolute top-3 inset-x-0 mx-auto text-gray-700"
    >
      中心を検索
    </button>
    <i
      class="bi bi-record-circle absolute inset-0 m-auto leading-10 w-10 h-10 text-center text-xl"
    ></i>
    <div
      class="shadow bg-white text-inherit btn btn-ghost btn-sm btn-circle absolute top-3 left-3 rounded-full text-center"
    >
      <i class="bi bi-gear text-xl"></i>
    </div>
    <div
      v-if="showSpot.id"
      class="bg-white shadow absolute bottom-3 inset-x-0 mx-auto w-11/12 sm:w-1/2 max-w-md"
    >
      <div class="grid grid-cols-5 cursor-pointer">
        <div class="col-span-2">
          <img class="h-20 w-full object-cover" :src="showSpot.image_url" :alt="showSpot.title" />
        </div>
        <div class="col-span-3 p-2">
          <div class="h-2/3 leading-5">
            <i class="bi bi-geo-alt"></i>
            {{ showSpot.title }}
          </div>
          <div class="h-1/3 text-right">
            - sursurk.r3m
          </div>
        </div>
      </div>
    </div>
  </GoogleMap>
</template>
