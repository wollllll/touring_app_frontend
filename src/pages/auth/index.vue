<script setup>
import ViewTitle from '@/components/ViewTitle'
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Login from '@/components/forms/Login'
import Base from '@/components/layouts/Base'
import { storeService } from '@/services/storeService'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <section>
        <ViewTitle>アカウント登録</ViewTitle>
        <Information class="mt-3">
          <p>スポットを投稿するにはアカウントを登録する必要があります。</p>
          <p>
            アカウントを登録するとスポットのお気に入り追加や他の人のアカウントをフォローすることが出来ます。
          </p>
        </Information>
        <PrimaryButton
          class="mt-5"
          @click="storeService.commit.setIsAuthRegisterModal(true)"
        >
          <i class="bi bi-person-plus text-xl" />&nbsp;アカウントを新規登録
        </PrimaryButton>
      </section>
      <section class="mt-10">
        <ViewTitle>ログイン</ViewTitle>
        <Login class="lg:mt-5 mt-3" />
      </section>
    </div>
  </Base>
</template>
