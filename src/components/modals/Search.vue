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
          お気に入り&nbsp;<input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
        </div>
        <div class="col-span-1">
          フォローアカウント&nbsp;<input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
        </div>
      </div>
      <div class="pt-3 text-right">
        <button type="button" class="btn btn-md btn-primary">検索</button>
      </div>
    </template>
  </Base>
</template>
