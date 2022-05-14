<script setup>
import HeadingTitle from '@/components/HeadingTitle'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import UserEdit from '@/components/users/Edit'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <Section>
        <HeadingTitle>アカウント設定</HeadingTitle>
        <UserEdit />
      </Section>
    </div>
  </Base>
</template>
