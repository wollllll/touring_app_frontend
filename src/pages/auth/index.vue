<script setup>
import Information from '@/components/Information'
import Input from '@/components/form/Input'
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
          アカウントを新規作成&nbsp;<i class="bi bi-lock text-xl" />
        </button>
      </section>
      <section class="mt-5">
        <Information>
          <p>アカウントをお持ちの方はこちら</p>
        </Information>
        <div class="pt-5">
          <Input type="email" placeholder="メールアドレス" />
        </div>
        <div class="pt-5">
          <Input type="password" placeholder="パスワード" />
        </div>
        <button class="btn btn-primary w-full mt-5">
          ログイン&nbsp;<i class="bi bi-person-plus text-xl" />
        </button>
      </section>
      <section class="mt-10">
        <Information>
          <p>SNSでログイン</p>
        </Information>
        <div class="grid w-full grid-cols-3 pt-10">
          <div class="col-span-1 px-3">
            <img
              src="img/instagram.png"
              alt="instagram logo"
              class="md:w-20 md:h-20 w-10 h-10 mx-auto"
            />
          </div>
          <div class="col-span-1 px-3">
            <img
              src="img/twitter.png"
              alt="twitter logo"
              class="md:w-20 md:h-20 w-10 h-10 mx-auto"
            />
          </div>
          <div class="col-span-1 px-3">
            <img
              src="img/line.png"
              alt="line logo"
              class="md:w-20 md:h-20 w-10 h-10 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  </Base>
</template>
