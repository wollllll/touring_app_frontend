<script setup>
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Login from '@/components/form/Login'
import Base from '@/components/layouts/Base'
import { storeService } from '@/services/storeService'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <section>
        <Information>
          <p>スポットを投稿するにはアカウントを登録する必要があります。</p>
          <p>
            アカウントを登録するとスポットのお気に入り追加や他の人のアカウントをフォローすることが出来ます。
          </p>
        </Information>
        <PrimaryButton
          class="mt-5"
          @click="storeService.commit.setIsAuthRegisterModal(true)"
        >
          <i class="bi bi-person-plus text-xl" />&nbsp;アカウントを新規作成
        </PrimaryButton>
      </section>
      <section class="mt-10">
        <Information>
          <p>アカウントをお持ちの方はこちら</p>
        </Information>
        <Login class="lg:mt-5 mt-0" />
      </section>
    </div>
  </Base>
</template>
