<script setup>
import SecondaryButton from '@/components/buttons/SecondaryButton'
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
    <SecondaryButton
      class="btn-sm top-3 absolute inset-x-0 w-2/3 max-w-xs mx-auto"
    >
      <i class="bi bi-search text-lg" />&nbsp;中心を検索
    </SecondaryButton>
    <i
      class="bi bi-record-circle absolute inset-0 w-10 h-10 m-auto text-xl leading-10 text-center"
    ></i>
    <ShowSpot
      v-if="showSpot.id"
      @click="storeService.commit.setIsShowSpotModal(true)"
    />
  </GoogleMap>
</template>
