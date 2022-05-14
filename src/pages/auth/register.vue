<script setup>
import IconWithText from '@/components/IconWithText'
import Step from '@/components/Step'
import ViewTitle from '@/components/ViewTitle'
import Information from '@/components/alerts/Information'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Input from '@/components/forms/Input'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <ViewTitle>メールアドレス入力</ViewTitle>
      <Step />
      <Section>
        <Input
          type="text"
          label="メールアドレス"
          id="register_email"
          placeholder="メールアドレス"
          :required="true"
        />
        <Information class="mt-5">
          <p>
            利用規約、プライバシーポリシーに同意したうえでメールアドレスを送信してください。
          </p>
        </Information>
        <div>re chapter</div>
        <PrimaryButton @click="router.push({ name: 'auth_confirm' })">
          <IconWithText icon-class="bi-send">
            メールアドレスを送信
          </IconWithText>
        </PrimaryButton>
      </Section>
    </div>
  </Base>
</template>
