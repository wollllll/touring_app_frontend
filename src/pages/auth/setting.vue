<script setup>
import HeadingTitle from '@/components/HeadingTitle'
import Step from '@/components/Step'
import Base from '@/components/layouts/Base'
import UserEdit from '@/components/users/Edit'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <HeadingTitle>アカウント設定</HeadingTitle>
      <Step />
      <UserEdit />
    </div>
  </Base>
</template>
