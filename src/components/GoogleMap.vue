<script setup>
import Modal from '@/components/Modal'
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
      class="shadow text-inherit btn btn-secondary btn-sm w-2/3 max-w-xs absolute top-3 inset-x-0 mx-auto"
    >
      中心を検索
    </button>
    <i
      class="bi bi-record-circle absolute inset-0 m-auto leading-10 w-10 h-10 text-center text-xl"
    ></i>
    <div
      class="shadow text-inherit btn btn-secondary btn-sm btn-circle absolute top-3 left-3 rounded-full text-center"
    >
      <i class="bi bi-gear text-xl"></i>
    </div>
    <ShowSpot v-if="showSpot.id" @click="showModal" />
    <Modal />
  </GoogleMap>
</template>
