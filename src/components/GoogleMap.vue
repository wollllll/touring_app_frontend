<script setup>
import ShowSpot from '@/components/spots/Show'
import { spots } from '@/fakers/spot'
import { spotService } from '@/services/spotService'
import { storeService } from '@/services/storeService'
import { ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

const API_KEY = process.env.VUE_APP_GOOGLE_MAP_API_KEY
const center = ref({ lat: 35.0889962, lng: 138.9533645 })

const showSpot = ref(spotService.getters.showSpot())

const setShowSpot = (spot) => {
  center.value = { lat: spot.latitude, lng: spot.longitude }
  spotService.commit.setShowSpot(spot)
}
const showModal = () => storeService.commit.setIsShowModal(true)
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
      @click="setShowSpot(spot)"
      :key="index"
      v-for="(spot, index) in spots"
      :options="{ position: { lat: spot.latitude, lng: spot.longitude } }"
    />
    <button
      class="text-inherit btn btn-secondary btn-sm top-3 absolute inset-x-0 w-2/3 max-w-xs mx-auto shadow"
    >
      中心を検索
    </button>
    <i
      class="bi bi-record-circle absolute inset-0 w-10 h-10 m-auto text-xl leading-10 text-center"
    ></i>
    <div
      class="text-inherit btn btn-secondary btn-sm btn-circle top-3 left-3 absolute text-center rounded-full shadow"
    >
      <i class="bi bi-gear text-xl"></i>
    </div>
    <ShowSpot v-if="showSpot.id" @click="showModal" />
  </GoogleMap>
</template>
