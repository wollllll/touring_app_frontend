<script setup>
import Information from '@/components/Information'
import Login from '@/components/form/Login'
import Base from '@/components/layouts/Base'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <section>
        <Information>
          <p>
            スポットを投稿するにはアカウントを登録する必要があります。
            アカウントを登録するとスポットのお気に入り追加や他の人のアカウントをフォローすることが出来ます。
          </p>
        </Information>
        <button class="btn btn-primary w-full mt-10">
          <i class="bi bi-lock text-xl" />&nbsp;アカウントを新規作成
        </button>
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
