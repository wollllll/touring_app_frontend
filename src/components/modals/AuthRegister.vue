<script setup>
import IconWithText from '@/components/IconWithText'
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/forms/Input'
import Base from '@/components/modals/Base'
import CloseButton from '@/components/modals/CloseButton'
import { storeService } from '@/services/storeService'

const isShowModal = storeService.getters.isAuthRegisterModal()
</script>

<template>
  <Base :class="isShowModal ? 'modal-open' : ''">
    <template #title>
      <IconWithText class="bi-person-plus">アカウント登録</IconWithText>
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
      />
      <Input
        type="password"
        label="パスワード"
        id="register_password"
        placeholder="パスワード"
        :required="true"
      />
      <PrimaryButton>
        <router-link :to="{ name: 'auth_register' }">
          <IconWithText class="bi-person-plus">登録</IconWithText>
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
