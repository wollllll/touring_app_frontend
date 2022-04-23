<script setup>
import Base from '@/components/layouts/Base'
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.689247, lng: -74.044502 };
const options = {
  panControl: false
}
const API_KEY = process.env.VUE_APP_GOOGLE_MAP_API_KEY
</script>

<template>
  <Base>
    <GoogleMap :api-key="API_KEY" class="w-full h-full" :center="center" :zoom="15" :options="options" map-type-id="terrain">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </Base>
</template>
