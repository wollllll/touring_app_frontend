<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Base from '@/components/modals/layouts/Base'
import CloseButton from '@/components/modals/layouts/CloseButton'
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isShowSearchModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title> <i class="bi bi-search" />&nbsp;スポットを検索 </template>
    <template #close>
      <CloseButton @click="storeService.commit.setIsShowSearchModal(false)" />
    </template>
    <template #content>
      <div>
        <input
          type="text"
          placeholder="検索"
          class="input input-bordered w-full"
        />
      </div>
      <div class="grid grid-cols-2 pt-3">
        <div class="col-span-1">
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
          &nbsp;お気に入り
        </div>
        <div class="col-span-1">
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
          &nbsp;フォローアカウント
        </div>
      </div>
      <div class="mt-5 text-right">
        <PrimaryButton class="btn-md w-auto">
          <i class="bi bi-search" />&nbsp;検索
        </PrimaryButton>
      </div>
    </template>
  </Base>
</template>
