<script setup>
import Base from '@/components/modals/Base'
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isShowSearchModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title> <i class="bi bi-search" />&nbsp;検索 </template>
    <template #close>
      <i
        @click="storeService.commit.setIsShowSearchModal(false)"
        class="btn btn-sm btn-primary btn-circle bi bi-x text-xl"
      />
    </template>
    <template #content> aa </template>
  </Base>
</template>
