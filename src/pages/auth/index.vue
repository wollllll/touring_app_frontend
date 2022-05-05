<script setup>
import Information from '@/components/Information'
import PrimaryButton from '@/components/buttons/Primary'
import Login from '@/components/form/Login'
import Base from '@/components/layouts/Base'
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
        <PrimaryButton class="mt-10">
          <i class="bi bi-person-plus text-xl" />&nbsp;アカウントを新規作成
        </PrimaryButton>
      </section>
      <section class="mt-10">
        <Information>
          <p>アカウントをお持ちの方はこちら</p>
        </Information>
        <Login class="lg:mt-10 mt-5" />
      </section>
    </div>
  </Base>
</template>
