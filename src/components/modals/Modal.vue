<script setup>
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isShowModal()
const hide = () => {
  storeService.commit.setIsShowModal(false)
}
</script>

<template>
  <div class="modal" :class="isShowModal ? 'modal-open' : ''">
    <div class="modal-box relative">
      <div class="grid grid-cols-12">
        <div class="col-span-11">
          <h2 class="text-lg font-bold"><slot name="title" /></h2>
        </div>
        <div class="w-full col-span-1 text-right">
          <i
            @click="hide()"
            class="btn btn-sm btn-primary btn-circle bi bi-x text-xl"
          />
        </div>
      </div>
      <div class="pt-3">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
