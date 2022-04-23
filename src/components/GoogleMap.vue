<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
import { ref } from 'vue'

const API_KEY = process.env.VUE_APP_GOOGLE_MAP_API_KEY
const center = ref({ lat: 35.0889962, lng: 138.9533645 })
const markers = [
  { position: { lat: 35.0889962, lng: 138.9533645 } },
  { position: { lat: 35.0809962, lng: 138.9533645 } },
  { position: { lat: 35.1009962, lng: 138.9533645 } },
]
const updateCenter = (marker) => {
  center.value = marker.position
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
  >
    <Marker
      @click="updateCenter(marker)"
      :key="index"
      v-for="(marker, index) in markers"
      :options="{ position: marker.position }"
    />
    <button
      class="shadow btn btn-sm btn-outline w-2/6 absolute top-3 inset-x-0 mx-auto text-gray-700"
    >
      中心を検索
    </button>
    <i
      class="bi bi-record-circle absolute inset-0 m-auto leading-3 w-3 h-3 text-center"
    ></i>
    <div
      class="shadow btn btn-sm btn-outline btn-circle absolute top-3 left-3 rounded-full text-center"
    >
      <i class="bi bi-gear text-xl"></i>
    </div>
  </GoogleMap>
</template>
