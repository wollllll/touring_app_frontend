<script setup>
import Step from '@/components/Step'
import ViewTitle from '@/components/ViewTitle'
import Information from '@/components/alerts/Information'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import UserEdit from '@/components/users/Edit'
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <ViewTitle>アカウント設定</ViewTitle>
      <Step />
      <UserEdit />
    </div>
  </Base>
</template>
