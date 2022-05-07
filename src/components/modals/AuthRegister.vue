<script setup>
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/form/Input'
import Base from '@/components/modals/Base'
import CloseButton from '@/components/modals/CloseButton'
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isAuthRegisterModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title>
      <i class="bi bi-person-plus text-xl" />&nbsp;アカウント登録
    </template>
    <template #close>
      <CloseButton @click="storeService.commit.setIsAuthRegisterModal(false)" />
    </template>
    <template #content>
      <div class="w-full">
        <Input type="text" placeholder="名前" />
      </div>
      <div class="w-full mt-5">
        <Input type="email" placeholder="メールアドレス" />
      </div>
      <div class="w-full mt-5">
        <Input type="password" placeholder="パスワード" />
      </div>
      <PrimaryButton class="mt-5">
        <router-link :to="{ name: 'auth_register' }">
          <i class="bi bi-person-plus text-xl" />&nbsp;登録
        </router-link>
      </PrimaryButton>
      <Information class="mt-5">
        <p>
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </p>
      </Information>
    </template>
  </Base>
</template>
