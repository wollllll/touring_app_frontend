<script setup>
import Information from '@/components/alerts/Information'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <Section class="mt-0">
        <Information>
          <p>まだアカウントの登録が完了していません。</p>
          <p>ご登録のメールアドレス宛てに確認メールを送信しました。</p>
          <p>メールに記載のURLを押して承認をしてください。</p>
        </Information>
      </Section>
    </div>
  </Base>
</template>
