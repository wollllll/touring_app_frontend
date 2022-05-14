<script setup>
import HeadingTitle from '@/components/HeadingTitle'
import IconWithText from '@/components/IconWithText'
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Login from '@/components/forms/Login'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <Section>
        <HeadingTitle>アカウント登録</HeadingTitle>
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
        <HeadingTitle>ログイン</HeadingTitle>
        <Login />
      </Section>
    </div>
  </Base>
</template>
