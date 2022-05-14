<script setup>
import IconWithText from '@/components/IconWithText'
import ViewTitle from '@/components/ViewTitle'
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Login from '@/components/forms/Login'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import { router } from '@/router'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <Section>
        <ViewTitle>アカウント登録</ViewTitle>
        <Information>
          <p>スポットを投稿するにはアカウントを登録する必要があります。</p>
          <p>
            アカウントを登録するとスポットのお気に入り追加や他の人のアカウントをフォローすることが出来ます。
          </p>
        </Information>
        <PrimaryButton @click="router.push({ name: 'auth_register' })">
          <IconWithText icon-class="bi-person-plus"
            >アカウントを新規登録</IconWithText
          >
        </PrimaryButton>
      </Section>
      <Section>
        <ViewTitle>ログイン</ViewTitle>
        <Login />
      </Section>
    </div>
  </Base>
</template>
