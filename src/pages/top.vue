<script setup>
import Base from '@/components/layouts/Base'
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.689247, lng: -74.044502 };
const options = {
  panControl: false
}
</script>

<template>
  <Base>
    <GoogleMap api-key="AIzaSyAQnuDqCj9K3_p1S7m6d7E969VsaoEhqv8" class="w-full h-full" :center="center" :zoom="15" :options="options" map-type-id="terrain">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </Base>
</template>
