<script setup>
import Base from '@/components/layouts/Base'
import UserEdit from '@/components/users/Edit'
import HeadingTitle from '@/components/viewParts/HeadingTitle'
import Step from '@/components/viewParts/Step'
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
