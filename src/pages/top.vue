<script setup>
import GoogleMap from '@/components/GoogleMap'
import Base from '@/components/layouts/Base'
import Modal from '@/components/modals/Modal'
import SpotContent from '@/components/modals/SpotContent'
import { spotService } from '@/services/spotService'
import { ref } from 'vue'

const show = ref(spotService.getters.showSpot())
</script>

<template>
  <Base>
    <GoogleMap />
    <Modal>
      <template #title>
        {{ show.title }}
      </template>
      <template #content>
        <SpotContent />
      </template>
    </Modal>
  </Base>
</template>
