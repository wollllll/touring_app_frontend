<script setup>
import { storeService } from '@/services/storeService'
import { ref, watch } from 'vue'
import { spotService } from '@/services/spotService'

const modal = ref('')
const isShowModal = storeService.getters.isShowModal()
const showSpot = ref(spotService.getters.showSpot())

const hideModal = () => storeService.commit.setIsShowModal(false)
watch(isShowModal, () => (modal.value.checked = isShowModal.value))
</script>

<template>
  <input ref="modal" type="checkbox" id="modal" class="modal-toggle" />
  <label @click="hideModal" for="modal" class="modal cursor-pointer">
    <label class="modal-box relative">
      <h3 class="text-lg font-bold">{{ showSpot.title }}</h3>
      <p class="py-4">content</p>
    </label>
  </label>
</template>
