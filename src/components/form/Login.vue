<script setup>
import GoogleLogin from '@/components/buttons/GoogleLogin'
import LineLogin from '@/components/buttons/LineLogin'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import TwitterLogin from '@/components/buttons/TwitterLogin'
import Input from '@/components/form/Input'
</script>

<template>
  <div class="lg:flex-row flex flex-col">
    <div class="place-items-center lg:py-5 grid flex-grow pt-5">
      <TwitterLogin />
      <LineLogin class="mt-5" />
      <GoogleLogin class="mt-5" />
    </div>
    <div class="divider lg:divider-horizontal" />
    <div class="place-items-center lg:py-5 grid flex-grow py-0">
      <div class="w-full">
        <Input type="email" placeholder="メールアドレス" />
      </div>
      <div class="w-full pt-5">
        <Input type="password" placeholder="パスワード" />
      </div>
      <PrimaryButton class="mt-5">
        <i class="bi bi-lock text-xl" />&nbsp;ログイン
      </PrimaryButton>
    </div>
  </div>
</template>
