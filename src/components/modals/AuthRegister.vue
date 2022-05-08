<script setup>
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/forms/Input'
import Base from '@/components/modals/layouts/Base'
import CloseButton from '@/components/modals/layouts/CloseButton'
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
      <Input
        type="text"
        label="ユーザー名"
        id="register_name"
        placeholder="ユーザー名"
        :required="true"
      />
      <Input
        type="email"
        label="メールアドレス"
        id="register_email"
        placeholder="メールアドレス"
        :required="true"
        class="mt-3"
      />
      <Input
        type="password"
        label="パスワード"
        id="register_password"
        placeholder="パスワード"
        :required="true"
        class="mt-3"
      />
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
