<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/forms/Input'
import TextArea from '@/components/forms/TextArea'
import Base from '@/components/modals/layouts/Base'
import CloseButton from '@/components/modals/layouts/CloseButton'
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isCreateSpotModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title>
      <i class="bi bi-geo-alt" />&nbsp;スポットの投稿
    </template>
    <template #close>
      <CloseButton @click="storeService.commit.setIsCreateSpotModal(false)" />
    </template>
    <template #content>
      <div class="w-full h-40 bg-red-500">画像アップロード</div>
      <Input
        type="text"
        label="スポット名"
        id="create_name"
        placeholder="例）静岡の隠れスポット"
        :required="true"
        class="mt-3"
      />
      <TextArea
        label="投稿内容"
        id="create_content"
        placeholder="例）景色が綺麗でおすすめです！"
        :required="true"
        :rows="5"
        class="mt-3"
      />
      <div class="flex">
        <Input
          type="text"
          label="緯度"
          id="create_latitude"
          placeholder="緯度"
          :disabled="true"
          class="mt-3 mr-1"
        />
        <Input
          type="text"
          label="経度"
          id="create_longitude"
          placeholder="経度"
          :disabled="true"
          class="mt-3 ml-1"
        />
      </div>
      <div class="mt-5 text-right">
        <PrimaryButton class="btn-md w-auto">
          <i class="bi bi-pencil-square"></i>&nbsp;投稿
        </PrimaryButton>
      </div>
    </template>
  </Base>
</template>
