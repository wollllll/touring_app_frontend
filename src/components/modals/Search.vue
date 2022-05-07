<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/form/Input'
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
      <Input type="text" placeholder="検索" />
      <div class="grid grid-cols-2 pt-3">
        <div class="col-span-1">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">お気に入り</span>
              <input type="checkbox" class="checkbox checkbox-primary" />
            </label>
          </div>
        </div>
        <div class="col-span-1">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">フォローアカウント</span>
              <input type="checkbox" class="checkbox checkbox-primary" />
            </label>
          </div>
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
