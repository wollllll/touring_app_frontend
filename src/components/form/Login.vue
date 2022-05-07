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
      <LineLogin class="lg:mt-0 mt-5" />
      <GoogleLogin class="lg:mt-0 mt-5" />
    </div>
    <div class="divider lg:divider-horizontal" />
    <div class="place-items-center lg:py-5 grid flex-grow py-0">
      <Input
        type="login_email"
        label="メールアドレス"
        id="email"
        placeholder="メールアドレス"
        :required="true"
      />
      <Input
        type="login_password"
        label="パスワード"
        id="password"
        placeholder="パスワード"
        :required="true"
        class="mt-3"
      />
      <PrimaryButton class="mt-5">
        <i class="bi bi-lock text-xl" />&nbsp;ログイン
      </PrimaryButton>
    </div>
  </div>
</template>
