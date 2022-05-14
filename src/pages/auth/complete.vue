<script setup>
import HeadingTitle from '@/components/HeadingTitle'
import Step from '@/components/Step'
import Information from '@/components/alerts/Information'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <HeadingTitle>アカウント登録完了</HeadingTitle>
      <Step />
      <Section>
        <Information>
          <p>アカウントの登録が完了しました！</p>
          <p>お楽しみください。</p>
        </Information>
      </Section>
    </div>
  </Base>
</template>
