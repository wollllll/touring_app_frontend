<script setup>
import Base from '@/components/layouts/Base'
const center = { lat: 35.0889962, lng: 138.9533645 };
const markers = [
  {
    position: {
      lat: 35.088996, lng: 138.9533645
    },
  }
]
const options = {
  fullscreenControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  disableDefaultUi: false
}
</script>

<template>
  <Base>
    <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        :options="options"
        class="w-full h-full"
    >
      <GMapCluster>
        <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
        />
      </GMapCluster>
    </GMapMap>
  </Base>
</template>
